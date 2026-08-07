document.addEventListener("DOMContentLoaded", function () {

  async function openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("ChatDB", 1);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("chats")) {
          db.createObjectStore("chats", { keyPath: "id" });
        }
      };

      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  }

  async function generateKey(secretKey) {
    const encoder = new TextEncoder();
    const rawKey = encoder.encode(secretKey);

    // Use SubtleCrypto to derive a 256-bit key
    const keyMaterial = await crypto.subtle.importKey(
      "raw",
      rawKey,
      { name: "PBKDF2" },
      false,
      ["deriveBits", "deriveKey"]
    );

    const key = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: encoder.encode("some-salt"), // Use a secure random salt in production
        iterations: 100000,
        hash: "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );

    return key;
  }

  async function encryptData(data, secretKey) {
    const key = await generateKey(secretKey); // Generate a valid 256-bit AES key
    const iv = crypto.getRandomValues(new Uint8Array(12)); // AES-GCM IV (12 bytes)
    const encodedData = new TextEncoder().encode(data);

    const encrypted = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      encodedData
    );

    return {
      encrypted: base64Encode(encrypted),
      iv: base64Encode(iv),
    };
  }

  async function decryptData(encryptedData, secretKey) {
    const key = await generateKey(secretKey); // Generate a valid 256-bit AES key
    const iv = base64Decode(encryptedData.iv);
    const encryptedArray = base64Decode(encryptedData.encrypted);

    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      encryptedArray
    );

    return new TextDecoder().decode(decrypted);
  }

  async function saveConversations(conversations) {
    try {
      // Serialize and encrypt the conversations data BEFORE opening the transaction
      const serializedData = JSON.stringify(conversations.messages);
      const encryptionKey = "MILYJdni2@n3ain%3naA"; // Secure encryption key
      const encryptedData = await encryptData(
        serializedData,
        encryptionKey
      );

      const db = await openDatabase(); // Open the database
      const transaction = db.transaction("chats", "readwrite");
      const store = transaction.objectStore("chats");

      // Clear existing data
      const clearPromise = new Promise((resolve, reject) => {
        const clearRequest = store.clear();
        clearRequest.onsuccess = resolve;
        clearRequest.onerror = (event) => reject(event.target.error);
      });
      await clearPromise;

      // Add the new conversation data
      const putPromise = new Promise((resolve, reject) => {
        const putRequest = store.put({ id: 1, data: encryptedData });
        putRequest.onsuccess = resolve;
        putRequest.onerror = (event) => reject(event.target.error);
      });
      await putPromise;

      // console.log("Conversations saved successfully.");
    } catch (error) {
      console.log(error);
      // console.error("Error saving conversations:", error);
    }
  }

  async function getConversations() {
    try {
      const db = await openDatabase();
      const transaction = db.transaction("chats", "readonly");
      const store = transaction.objectStore("chats");

      const data = await new Promise((resolve, reject) => {
        const getRequest = store.get(1);
        getRequest.onsuccess = () => resolve(getRequest.result);
        getRequest.onerror = (event) => reject(event.target.error);
      });

      if (data) {
        const encryptionKey = "MILYJdni2@n3ain%3naA";
        const encryptedData = data.data;

        // Decrypt and deserialize the conversations data
        const decryptedData = await decryptData(
          encryptedData,
          encryptionKey
        );
        return JSON.parse(decryptedData);
      } else {
        return []; // Return empty array if no data is found
      }
    } catch (error) {
      console.error("Error retrieving conversations:", error);
      return [];
    }
  }

  function base64Encode(arrayBuffer) {
    return btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
  }

  function base64Decode(base64) {
    return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
  }

  let conversations = { messages: [] };
  let isAsking = false;

  async function renderMessages() {
    // console.log(conversations);
    const chatContent = document.getElementById("chat-content");
    chatContent.innerHTML = "";

    conversations.messages.forEach((message) => {
      if (message.role === "user") {
        const userMessageDiv = createUserMessageElement(message);
        chatContent.appendChild(userMessageDiv);
      } else {
        const chatbotResponseDiv = createChatbotResponseElement(message);
        chatContent.appendChild(chatbotResponseDiv);
      }
    });

    document.getElementById("chat-content").scrollTop =
      document.getElementById("chat-content").scrollHeight;
  }

  async function initChatbot() {
    const chatbotContainer = document.getElementById("chatbot-container");
    // const chatbotHeader = document.getElementById("chatbot-header");
    const chatbotBody = document.getElementById("chatbot-body");
    const chatbotInputDiv = document.getElementById("chatbot-input-div");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotSend = document.getElementById("chatbot-send");
    const clearChatButton = document.getElementById("clear-conversations");

    chatbotInput.addEventListener("input", () => {
      if (chatbotInput.value.trim() === "") {
        chatbotSend.disabled = true;
        chatbotSend.classList.remove("text-black");
        chatbotSend.classList.add("text-gray-400");
        chatbotSend.style.backgroundColor = "transparent";
      } else {
        chatbotSend.disabled = false;
        chatbotSend.classList.remove("text-gray-400");
        chatbotSend.classList.add("text-black");
        chatbotSend.style.backgroundColor = "#f8f9fa";
      }
    });

    clearChatButton.addEventListener("click", async () => {
      await clearConversations();
    });

    clearChatButton.addEventListener("mouseover", () => {
      clearChatButton.classList.add("bg-light");
    });

    clearChatButton.addEventListener("mouseleave", () => {
      clearChatButton.classList.remove("bg-light");
    });

    conversations.messages = await getConversations();
    // console.log(conversations.messages);

    if (!conversations.messages.length) {
      conversations = {
        messages: [
          {
            role: "system",
            type: "text",
            text: "Typing...",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }),
            attachments: [],
          },
        ],
      };

      setTimeout(async () => {
        // const response = await generateAIChatRes('Hi');
        const response =
          "Hi there! Welcome to Kakr Labs. I'm your virtual assistant - <b>LIA</b>, here to guide you through the exciting world of blockchain and Web3.<br/><br/> You can ask me anything related to Kakr Labs and its services. How can I help you today?";
        const responseTime = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });

        // console.log(conversations.messages);

        conversations.messages.pop();
        conversations.messages.push({
          role: "system",
          type: "text",
          text: response,
          time: responseTime,
          attachments: [
            {
              title: "Learn about our solutions",
              url: "https://www.kakr.org/solutions",
            },
            {
              title: "Explore our documentation",
              url: "https://docs.kakr.ai",
            },
            {
              title: "Customer Support",
              url: "https://support.kakr.ai/support/home",
            },
          ],
        });

        renderMessages();
        await saveConversations(conversations);
      }, 1500);
    } else {
      // check if the last message is "Typing..." or user message
      const lastMessage = conversations.messages[conversations.messages.length - 1];
      if (lastMessage.role === "system" && lastMessage.text === "Typing...") {
        conversations.messages.pop(); // Remove the typing message
      } else if (lastMessage.role === "user") {
        conversations.messages.pop(); // Remove the user message
      }
    }

    isAsking = false;

    renderMessages();
  }

  initChatbot();

  const inputField = document.getElementById("chatbot-input");
  const chatbotSend = document.getElementById("chatbot-send");

  inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      // console.log(isAsking);
      if (inputField.value.trim() === "" || isAsking) {
        return;
      }

      sendUserMessage(inputField.value);
      inputField.value = "";
    }
  });

  inputField.addEventListener("input", (e) => {
    if (!isAsking) {
      if (inputField.value.trim() != "") {
        chatbotSend.disabled = false;
        chatbotSend.classList.remove("text-gray-400");
        chatbotSend.classList.add("text-black");
        // chatbotSend.style.backgroundColor = "#4375f0";
        chatbotSend.style.backgroundColor = "#2ec233";
      } else {
        chatbotSend.disabled = true;
        chatbotSend.classList.remove("text-black");
        chatbotSend.classList.add("text-gray-400");
        chatbotSend.style.backgroundColor = "transparent";
      }
    }
    // inputField.style.height = '60px';

    // inputField.style.height = inputField.scrollHeight;
    // const maxHeight = 300;

    // inputField.style.height = inputField.scrollHeight > maxHeight ? `${maxHeight}px` : `${inputField.scrollHeight}px`;
  });

  document.getElementById("chatbot-send").addEventListener("click", () => {
    if (inputField.value.trim() === "" || isAsking) {
      return;
    }
    sendUserMessage(inputField.value);
    inputField.value = "";
  });

  function createUserMessageElement(message) {
    // console.log(message);

    const messageDiv = document.createElement("div");
    messageDiv.style.transform = "translateY(10px)";
    messageDiv.style.animation = "fadeIn 0.5s forwards";
    messageDiv.classList.add(
      "mb-3",
      "d-flex",
      "flex-column",
      "align-items-end"
    );

    const userMessage = document.createElement("div");
    userMessage.classList.add(
      "user-message",
      "p-2",
      "text-white",
      "rounded"
    );
    userMessage.style.width = "fit-content";

    userMessage.textContent = message.text;

    const time = document.createElement("small");
    time.classList.add("text-muted", "mt-1");
    time.textContent = new Date(message.time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    messageDiv.appendChild(userMessage);
    messageDiv.appendChild(time);

    return messageDiv;
  }

  function createChatbotResponseElement(message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(
      "mb-3",
      "d-flex",
      "flex-column",
      "align-items-start"
    );

    if (message.text === "Typing...") {
      messageDiv.style.transform = "translateY(10px)";
      messageDiv.style.animation = "fadeIn 0.5s forwards";
    }

    const responseContainer = document.createElement("div");
    responseContainer.classList.add("d-flex", "align-items-start");

    const avatarContainer = document.createElement("div");
    avatarContainer.classList.add("me-3");
    avatarContainer.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="#2563eb" d="m19 1l-1.26 2.75L15 5l2.74 1.26L19 9l1.25-2.74L23 5l-2.75-1.25M9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5M19 15l-1.26 2.74L15 19l2.74 1.25L19 23l1.25-2.75L23 19l-2.75-1.26" />
      </svg>
      `;

    const textContainer = document.createElement("div");
    textContainer.classList.add("w-100");

    const chatbotResponse = document.createElement("div");
    chatbotResponse.classList.add(
      "chatbot-response",
      "p-2",
      "text-light",
      "rounded"
    );
    chatbotResponse.style.width = "fit-content";

    if (message.text === "Typing...") {
      chatbotResponse.innerHTML = `
              <div class="spinner-border text-primary spinner-border-sm" role="status">
                <span class="visually-hidden">Typing...</span>
              </div>
            `;
    } else {
      chatbotResponse.innerHTML = `<div style="line-height: 2rem;">${message.text}</div>`;
    }

    const time = document.createElement("small");
    time.classList.add("text-muted", "mt-1", "d-block");
    time.textContent = new Date(message.time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    textContainer.appendChild(chatbotResponse);

    let buttonContainer = null;

    if (message.attachments && message.attachments.length > 0) {
      buttonContainer = document.createElement("div");
      buttonContainer.classList.add(
        "d-flex",
        "gap-2",
        "mt-2",
        "button-container",
        "d-none"
      );

      message.attachments.forEach((attachment) => {
        const button = document.createElement("button");
        button.classList.add("btn", "response-button");
        button.textContent = attachment.title;
        button.onclick = () => window.open(attachment.url, "_blank");

        button.onmouseover = () => {
          button.style.backgroundColor = "#edf0f5";
          // button.style.transform = "scale(1.1)";
        };

        button.onmouseout = () => {
          button.style.backgroundColor = "#d6dde4";
          // button.style.transform = "scale(1)";
        };

        buttonContainer.appendChild(button);
      });

      textContainer.appendChild(buttonContainer);
    }

    textContainer.appendChild(time);
    responseContainer.appendChild(avatarContainer);
    responseContainer.appendChild(textContainer);
    messageDiv.appendChild(responseContainer);

    if (
      buttonContainer &&
      message.text &&
      message.text !== "Typing..." &&
      message.text !== ""
    ) {
      buttonContainer.classList.remove("d-none");
    }

    document.getElementById("chat-content").scrollTop =
      document.getElementById("chat-content").scrollHeight;

    return messageDiv;
  }

  async function clearConversations() {
    try {
      // Open the database and initiate a transaction
      const db = await openDatabase();
      const transaction = db.transaction("chats", "readwrite");
      const store = transaction.objectStore("chats");

      // Clear the chats store
      await new Promise((resolve, reject) => {
        const request = store.clear();
        request.onsuccess = () => resolve();
        request.onerror = (event) => reject(event.target.error);
      });

      // Fetch updated conversations (should now be empty)
      conversations.messages = await getConversations();

      if (!conversations.messages.length) {
        // Initialize with a default typing message
        conversations = {
          messages: [
            {
              role: "system",
              type: "text",
              text: "Typing...",
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }),
              attachments: [],
            },
          ],
        };

        // console.log(conversations);
        renderMessages(); // Render the default typing message

        // Simulate an AI response
        setTimeout(async () => {
          try {
            // const response = await generateAIChatRes('Hi'); // Get AI response
            const response =
              "Hi there! Welcome to Kakr Labs. I'm your virtual assistant - <b>LIA</b>, here to guide you through the exciting world of blockchain and Web3.<br /><br /> You can ask me anything related to Kakr Labs and its services. How can I help you today?";
            const responseTime = new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            });

            // Replace typing message with the AI response
            conversations.messages.pop();
            conversations.messages.push({
              role: "system",
              type: "text",
              text: response,
              time: responseTime,
              attachments: [
                {
                  title: "Learn about our solutions",
                  url: "https://www.kakr.org/solutions",
                },
                {
                  title: "Explore our documentation",
                  url: "https://docs.kakr.ai",
                },
                {
                  title: "Customer Support",
                  url: "https://support.kakr.ai/support/home",
                },
              ],
            });

            renderMessages(); // Re-render with the new message
            await saveConversations(conversations); // Save to database
            isAsking = false;
          } catch (error) {
            console.error("Error generating AI response:", error);
          }
        }, 1500);
      }

      transaction.oncomplete = () => {
        // console.log('Conversations cleared successfully.');
      };

      transaction.onerror = (event) => {
        console.error("Error clearing conversations:", event.target.error);
      };
    } catch (error) {
      console.error("Error in clearConversations:", error);
    }
  }

  // try {
  //     // Try parsing directly
  //     let intentDetectorResponseObj = JSON.parse(response);
  //     // console.log("Valid JSON detected.");
  //   } catch (error) {
  //     // If parsing fails, apply fix
  //     try {
  //       intentDetectorResponseObj = JSON.parse(
  //         intentDetectorResponseObj.replace(/([{,])(\s*)(\w+):/g, '$1"$3":')
  //       );
  //       // console.log("Fixed JSON:", ksEnhancedResponseObj);
  //     } catch (error) {
  //       console.error("Still invalid JSON:", error.message);
  //     }
  //   }
  const conversationsKey = "chatbotConversations";

  const responses = {
    hi: "Hello, I'm here to assist you. How can I help you today?",
    clear: "Is that all for now? Do you want to clear the chat? (yes/no)",
    yes: "Okay, I will clear the chat.",
  };

  const intentList = {
    Kakr_Labs_Main_Website_Information:
      "When the user is asking for general information about Kakr Labs.",
    Pteri_Explorer_Information:
      "When the user is asking about Pteri, the blockchain explorer by Kakr Labs.",
    Enterprise_Pricing_Information:
      "When the user is inquiring about enterprise pricing details.",
    Web2_vs_Web3_Information:
      "When the user is asking for comparisons or details about Web2 vs Web3.",
    Pteri_Playground_Information:
      "When the user wants information about the Pteri Playground feature.",
    Kakr_Labs_Contact_Information:
      "When the user wants to contact Kakr Labs.",
    Stages_Of_Litecoin_Transaction_Information:
      "When the user wants to know the stages of a Litecoin transaction.",
    Terms_Of_Services_Information:
      "When the user wants to know about the terms of services.",
    Default_Wallet_Address_Information:
      "When the user wants to know about the default wallet address.",
    Official_Wallet_Address_Information:
      "When the user wants to know about the official wallet address.",
    Documentation_Intro_Information:
      "When the user wants to know about the documentation.",
    Non_Custody_vs_Custody_Wallet_Information:
      "When the user wants to know about the difference between non-custody and custody wallets.",
    Kakr_Labs_Solutions_Information:
      "When the user wants to know about industrial solutions and use cases of the services that Kakr Labs provide. Do not make it primary intent(less priority unless specified explicitly).",
    Multi_Signature_Concept_Information:
      "When the user wants to know about the concept of multi-signature.",
    Litecoin_as_a_Service_Information:
      "When the user wants to know about Litecoin as a service (LiaaS).",
    UTXO_Concept_Information:
      "When the user wants to know about the concept of UTXOs.",
    Assets_Documentation_Information:
      "When the user wants to know about the assets documentation.",
    FAQs_and_Troubleshooting_Information:
      "When the user wants to know about the FAQs and troubleshooting.",
    Kakr_Labs_Services_Information:
      "When the user wants to know about the services Kakr Labs provide. Do not make it primary intent(less priority unless specified explicitly).",
    Difference_Between_Default_and_Official_Wallet_Address_Information:
      "When the user wants to know about the difference between the default and official wallet address.",
    Get_Started_Information:
      "When the user wants to know how to get started.",
    API_Policy_Information:
      "When the user wants to know about the API policy.",
    Spending_UTXOs_Information:
      "When the user wants to know about how to spend UTXOs.",
    Tokens_Information: "When the user wants to know about tokens.",
    Pteri_Pricing_Information:
      "When the user wants to know about Pteri or Pteri+LiaaS pricing.",
    Developers_Advantages_Information:
      "When the user wants to know about the advantages for developers using Liaas.",
    Wallet_Information:
      "When the user wants to know about wallets and its documentation.",
    LTC_Transactions_Information:
      "When the user wants to know about Litecoin transactions.",
    Collections_Information:
      "When the user wants to know about collections.",
    LTC_Addresses_Information:
      "When the user wants to know about Litecoin addresses.",
    NFT_Toolkit_Information:
      "When the user wants to know about the NFTs and its toolkit.",
    Developers_FAQs_and_Error_Handling_Information:
      "When the user wants to know about some error solution or the FAQs and error handling for developers.",
    Category_Codes_Information:
      "When the user wants to know about the category codes built by Kakr Labs.",
    Passphrase_and_Private_key_Information:
      "When the user wants to know about the passphrase or private keys for Litecoin wallet/address.",
    Pteri_Intelligence_Information:
      "When the user wants to know about the Pteri Intelligence.",
    Litecoin_Blockchain_Toolkit_Information:
      "When the user wants to know about the Litecoin blockchain toolkit.",
    Abous_Us_Information:
      "When the user wants to know about Kakr Labs and its team.",
    What_is_Blockchain_Information:
      "When the user wants to know about blockchain and its concept.",
    Pteri_Wallet_Information:
      "When the user wants to know about the Pteri wallet - Self Custody Wallet.",
    HD_Wallet_Information:
      "When the user wants to know about the HD (Hierarchical Deterministic) wallets.",
    Wallet_Solutions_Information:
      "When the user wants to know about the wallet solutions provided by Kakr Labs.",
    Documentation_Introduction_Information:
      "When the user wants to know about the documentation.",
  };

  // const BaseURL = "https://localhost:7242";
  const BaseURL =
    "https://kakrlabschatbotapi-cgg4dceafadjdeh0.canadacentral-01.azurewebsites.net";

  async function generateAIChatRes(query) {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const conversations = await getConversations();

      // traverse through the previous conversations apart from the first one and last one in descending order
      const history = conversations
        .slice(1, conversations.length - 1)
        .reverse()
        .map((message) => {
          return {
            role: message.role,
            content: [
              {
                type: "text",
                text: message.text,
                image_url: {
                  url:
                    message.attachments.length > 0
                      ? message.attachments[0].url
                      : "",
                },
              },
            ],
          };
        });

      // console.log(history);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify({ prompt: query, messages: history }),
      };

      const response = await fetch(
        `${BaseURL}/api/AI_Assistant/Chat`,
        requestOptions
      );

      const responseJson = await response.json();
      // console.log(responseJson);
      if (responseJson.successful) {
        if (responseJson.data === null) {
          // return JSON.stringify({
          //   hasMatch: false,
          //   isQueryNormal: true,
          //   chatbotResponse: responseJson.message,
          //   titles: [],
          //   urls: [],
          // });

          return JSON.stringify({
            response: responseJson.message,
            intent: "no_intent",
          });
        }
      }

      return responseJson.data;
    } catch (error) {
      console.error(error);
      return `Error: ${error.message}`;
    }
  }

  async function search(query) {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({ query: query });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
        body: raw,
      };

      const response = await fetch(
        `${BaseURL}/api/AI_Assistant/Search`,
        requestOptions
      );

      // console.log(response);
      const responseJson = await response.json();

      if (responseJson.successful) {
        return responseJson.data.value.value;
      }

      return [];
    } catch (error) {
      console.error(error);
      return `Error: ${error.message}`;
    }
  }

  async function getKSForDetectedIntent(intent) {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        `${BaseURL}/api/AI_Assistant/Get-Knowledge-From-Intent?intent=${intent}`,
        requestOptions
      );

      // console.log("fetched knowledge source", response);
      const responseJson = await response.json();

      if (responseJson.successful) {
        return responseJson.data.value;
      }
    } catch (error) {
      console.error(error);
      return `Error: ${error.message}`;
    }
  }

  async function intentDetector(query) {
    // PROMPT ENGINEERING
    let prompt;

    let identityText =
      "You are a Kakr Labs assistant designed to engage in conversation with users while also detecting their intent based on a predefined list. Your goal is to provide relevant and professional responses while ensuring the correct intent is identified." +
      "\n\n";

    let queryInput =
      "Now here is what the User typed for you." +
      "\n\n" +
      "UserQuery: " +
      '"' +
      query +
      '"' +
      "\n\n";

    let intentListText =
      "No intent should be prioritized over others. If multiple intents seem applicable, select the most precise intent based on user query, without assuming one is more important than another. If a query is vague, ask for clarification instead of assuming an intent." +
      "\n\n" +
      "Here's the list of intentions you can detect: " +
      "\n\n" +
      JSON.stringify(intentList, null, 2) +
      "\n\n";

    let resFormatText =
      "When responding to a user query, follow this JSON structure: {response: <your response here.>, intent: <detected_intent and it should be among the top intents>, top4Intents: <object with top 4 intents with relative score in descending order>, title: <array of 4 reference titles(1 or 2 words, 'Kakr' & 'Labs' always together) corresponding to the top intents(in descending order)>, numOfNecessaryIntentContexts: <analyze the number of knowledge sources required based on the user's query among top 4 intents and must be Integer. This should be more accurate!.>}" +
      "\n\n";

    let instruction2 =
      "If the intent is not in the list, return 'intent': 'no_intent' and If the user is just engaging in casual conversation, return 'intent': 'just_conversation'." +
      "\n\n";

    prompt =
      identityText +
      queryInput +
      intentListText +
      resFormatText +
      instruction2;

    // console.log(prompt);

    const response = await generateAIChatRes(prompt);

    // console.log("Intent Detector Response", response);

    const intentDetectorResponseObj = JSON.parse(
      response.replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
    );

    // console.log("Intent Detector log", intentDetectorResponseObj);

    if (intentDetectorResponseObj.intent === "no_intent") {
      // TODO: Handle this case
      const finalResponse = {
        chatbotResponse: intentDetectorResponseObj.response,
        hasMatch: false,
        isQueryNormal: false,
        titles: ["Kakr Labs"],
        urls: ["https://www.kakr.org"],
      };

      return finalResponse;
    } else if (intentDetectorResponseObj.intent === "just_conversation") {
      // TODO: Handle this case
      const finalResponse = {
        chatbotResponse: intentDetectorResponseObj.response,
        hasMatch: false,
        isQueryNormal: true,
        titles: [],
        urls: [],
      };

      return finalResponse;
    } else {
      // Kakr_Labs_Main_Website_Information: 0.6;
      // Pteri_Explorer_Information: 0.9;
      // Pteri_Playground_Information: 0.85;
      // Pteri_Wallet_Information: 0.95;

      // create array with descending order of top 4 intents
      const sortedTop4Intents = Object.keys(
        intentDetectorResponseObj.top4Intents
      ).sort(
        (a, b) =>
          intentDetectorResponseObj.top4Intents[b] -
          intentDetectorResponseObj.top4Intents[a]
      );
      // console.log("Top 4 Intents", sortedTop4Intents);

      const numOfNecessaryIntentContexts =
        intentDetectorResponseObj.numOfNecessaryIntentContexts;
      let allKs = [];

      for (let i = 0; i < numOfNecessaryIntentContexts; i++) {
        const ks = await getKSForDetectedIntent(sortedTop4Intents[i]);
        allKs.push(ks);
      }

      // console.log("All Knowledge Sources", allKs);

      const contentArray = allKs.map((ks) => ks.content);
      // console.log("Content Array", contentArray);

      let prompt =
        "You're Kakr labs assistant chatbot. Generate a response for the given query based on the contents provided below." +
        "\n\n" +
        "UserQuery: " +
        '"' +
        query +
        '"' +
        "\n\n" +
        "content: " +
        "\n\n" +
        contentArray +
        "\n\n" +
        "Here's the JSON structure you strictly follow for response: {response: <response>}. Keep the response in well-formatted and bullet points for better readability." +
        "\n\n" +
        "You should engage with the user in a professional and concise manner. Direct users towards the next step of action based on the top intents at the end." +
        "\n\n";

      // console.log("Final Prompt\n", prompt);

      const ksEnhancedResponse = await generateAIChatRes(prompt);
      // console.log("KS Enhanced Response", ksEnhancedResponse);
      let ksEnhancedResponseObj = null;

      try {
        // Try parsing directly
        const formattedKsEnhancedResponse = ksEnhancedResponse
          .replace(/([{,])(\s*)(\w+)(\s*):/g, '$1"$3":')
          .replace(/\n/g, "\\n");
        // console.log("Formatted JSON:", formattedKsEnhancedResponse);

        // ksEnhancedResponseObj = JSON.parse(formatteksdKsEnhancedResponse);
        ksEnhancedResponseObj = JSON.parse(
          formattedKsEnhancedResponse.substring(
            formattedKsEnhancedResponse.indexOf("{"),
            formattedKsEnhancedResponse.lastIndexOf("}") + 1
          )
        );
        // console.log("Valid JSON detected.");
      } catch (error) {
        // If parsing fails, apply fix
        console.error(error);

        // try {
        //   console.log("Invalid JSON Fixing...");
        //   const formattedKsEnhancedResponse = ksEnhancedResponse
        //     .replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
        //     .replace(/\n/g, "\\n");
        //   console.log("Formatted JSON:", formattedKsEnhancedResponse);

        //   ksEnhancedResponseObj = JSON.parse(formattedKsEnhancedResponse);
        //   // console.log("Fixed JSON:", ksEnhancedResponseObj);
        // } catch (error) {
        //   console.error("Still invalid JSON:", error.message);
        // }
      }

      // console.log("KsEnhancedResponseObj", ksEnhancedResponseObj);

      if (ksEnhancedResponseObj === null) {
        return {
          chatbotResponse:
            "Try again Later. We are facing some issues. Sorry for the inconvenience.",
          hasMatch: false,
          isQueryNormal: false,
          titles: ["Kakr Labs"],
          urls: ["https://www.kakr.org"],
        };
      }

      if (
        ksEnhancedResponseObj?.response ===
        "Try again Later. We are facing some issues. Sorry for the inconvenience."
      ) {
        return {
          chatbotResponse: ksEnhancedResponseObj.response,
          hasMatch: false,
          isQueryNormal: false,
          titles: ["Kakr Labs"],
          urls: ["https://www.kakr.org"],
        };
      }

      const finalResponse = {
        chatbotResponse: ksEnhancedResponseObj.response,
        hasMatch: true,
        isQueryNormal: false,
        urls: (() => {
          let urls = [];
          allKs.forEach((ks) => {
            urls.push(ks.url);
          });
          return urls;
        })(),
        titles: (() => {
          let titles = [];
          for (let i = 0; i < numOfNecessaryIntentContexts; i++) {
            titles.push(intentDetectorResponseObj.title[i]);
          }
          return titles;
        })(),
      };

      return finalResponse;
    }
  }

  async function generateResWithLLM(query) {
    let data = await search(query);
    // console.log(data);
    // data will be array of objects
    // if (data.length === 0) {
    //   return {
    //     hasMatch: false,
    //     isQueryNormal: true,
    //     chatbotResponse: "If you have any other queries, feel free to ask.",
    //     title: "Get Started",
    //     url: "https://docs.kakr.ai/using-pteri/get-started"
    //   }
    // }

    let response;
    if (data.length > 15) {
      data = data.slice(0, 15);
      // console.log(data);
    }

    // remove the Id and @search.score parameters from the data
    data.forEach((item) => {
      delete item["searchscore"];
      delete item.id;
    });

    // console.log(data);

    // PROMPT ENGINEERING
    let identityText =
      "Assume you are the smart chatbot of company - Kakr Labs. Your task is to respond to user queries based on the context provided in the array below. If a match is found, return the most relevant content in your response, otherwise, provide a fallback response while handling normal statements(expressions of acknowledgements/greetings/polite responses)." +
      "\n\n";

    let userQuery = "UserQuery: " + '"' + query + '"' + "\n\n";

    // let instruction1 = "Now, I want you to perform a task based on my instructions. You'll be provided with an array of multiple objects below, which contains the possible matching contents, titles and urls for the query. You have to choose the best context out of the given objects and create a response in a way such that it answers the user's query." + "\n\n";

    // stringify the data
    let context =
      "CONTEXT ARRAY: " + "\n\n" + JSON.stringify(data, null, 2) + "\n\n";

    // let instruction2 = "You can also add some additional information to make the response more informative and engaging. If the query is not the question then handle it accordingly and end the chatbotResponse with sentences like feel free to ask for anything or similar sentences." + "\n\n";

    let resFormatText =
      "Here's the structure you must follow for responses: {hasMatch: <false if no relevant context found, true if found>, isQueryNormal: <true for simple, polite expressions, false otherwise>, chatbotResponse: <summarized response out from matching content for user or responses handling normal sentences (e.g. Okay, Great!, Thank you.) or fallback: 'If you have any queries, feel free to ask anything about Kakr Labs. If you want to get started, you can visit our documentation.'>, urls: <an array of URLs from the top 3 matched contexts (not more than 3 references, not necessarily multiple URLs/ can be 0 or 1 as well), or empty>, titles: <an array of short titles(max 3 words) corresponding to references/URLs, 'Kakr Labs' together> }";

    const prompt = identityText + userQuery + context + resFormatText;
    console.log(prompt);

    response = await generateAIChatRes(prompt);
    // console.log(response);

    const responseObj = JSON.parse(
      response.substring(
        response.indexOf("{"),
        response.lastIndexOf("}") + 1
      )
    );
    // console.log(responseObj);

    return responseObj;
  }

  const QnaModel = {
    query: String,
    chatbotResponse: String,
    references: [],
    queryCreatedOn: Date,
    responseGeneratedOn: Date,
    location: "",
  };

  async function addUserQuery(qnaModel) {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(qnaModel);
      // console.log(raw);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        `${BaseURL}/api/Visitors/addVisitorsQnA`,
        requestOptions
      );

      const responseJson = await response.json();

      return responseJson.data;
    } catch (error) {
      console.error(error);
      return `Error: ${error.message}`;
    }
  }

  async function typeWriter(text, nodeIndex, charIndex, id) {
    // Disable the send button while typing
    const sendButton = document.getElementById("chatbot-send");
    const chatContent = document.getElementById("chat-content");
    sendButton.disabled = true;
    sendButton.classList.remove("text-black");
    sendButton.classList.add("text-gray-400");
    sendButton.style.backgroundColor = "transparent";

    isAsking = true;

    // Target the element where text is being typed
    const chatResponseElement =
      chatContent.children[id].querySelector(".chatbot-response")
        .children[0];

    // Parse the entire response into a DOM structure (once)
    if (!chatResponseElement.parsedNodes) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = text; // Parse the full HTML once
      chatResponseElement.parsedNodes = Array.from(tempDiv.childNodes); // Store nodes for incremental rendering
    }

    const parsedNodes = chatResponseElement.parsedNodes;

    function isNearBottom(el, threshold = 80) {
      return el.scrollHeight - el.scrollTop - el.clientHeight < threshold
    }

    function scrollToBottomIfNear(el) {
      if (!el) return;

      setTimeout(() => {
        if (isNearBottom(el)) {
          el.scrollTop = el.scrollHeight;
        }
      }, 0); // Wait for DOM update
    }

    // Helper function to process each node recursively
    async function processNode(node, parentElement) {
      if (node.nodeType === Node.TEXT_NODE) {
        // Handle text node: type out character by character
        const textContent = node.textContent;
        let tempTextNode = document.createTextNode(""); // Temporary text node
        parentElement.appendChild(tempTextNode);

        for (let i = 0; i < textContent.length; i++) {
          tempTextNode.nodeValue += textContent[i];
          await new Promise((resolve) => setTimeout(resolve, 12)); // Delay for typing

          // scroll to the bottom
          // document.getElementById("chat-content").scrollTop =
          //   document.getElementById("chat-content").scrollHeight;
          scrollToBottomIfNear(chatContent.value);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Handle element node: create it and append it
        const clonedNode = node.cloneNode(false); // Clone only the current element, not its children
        parentElement.appendChild(clonedNode);

        // Recursively process child nodes
        for (let child of node.childNodes) {
          await processNode(child, clonedNode);

          // scroll to the bottom
          scrollToBottomIfNear(chatContent.value);

        }
      }
    }

    // Process the nodes incrementally
    if (nodeIndex < parsedNodes.length) {
      const currentNode = parsedNodes[nodeIndex];
      await processNode(currentNode, chatResponseElement); // Process the current node

      // Move to the next node
      setTimeout(() => typeWriter(text, nodeIndex + 1, 0, id), 15);
    } else {
      // Typing has finished
      isAsking = false;

      // Clear parsed nodes to free memory
      delete chatResponseElement.parsedNodes;

      const buttonContainer = document
        .getElementById("chat-content")
        .children[id].querySelector(".button-container");

      if (buttonContainer) {
        buttonContainer.style.animation = "slideIn 0.5s ease-out forwards";
        buttonContainer.classList.remove("d-none");

        setTimeout(() => {
          buttonContainer.style.animation = "";
        }, 500);

        // get the height of the button container
        const buttonContainerHeight = buttonContainer.clientHeight;

        // scroll to the bottom
        document.getElementById("chat-content").scrollTop =
          document.getElementById("chat-content").scrollHeight -
          buttonContainerHeight;
      }
    }
  }

  async function sendUserMessage(message) {
    const currentTime = new Date().toISOString();
    // const intentType = await detectIntention(message);

    const userMessage = {
      role: "user",
      type: "text",
      text: message,
      // intent: intentType,
      time: currentTime,
      attachments: [],
    };
    appendMessage(userMessage);

    conversations.messages.push(userMessage);
    // console.log(conversations);

    // delay for 0.5 second
    setTimeout(() => {
      askQuestion(message);
    }, 500);

    await saveConversations(conversations);
    isAsking = false;
  }

  function appendMessage(message) {
    // console.log(message);
    const chatContent = document.getElementById("chat-content");
    const messageDiv =
      message.role === "user"
        ? createUserMessageElement(message)
        : createChatbotResponseElement(message);
    chatContent.appendChild(messageDiv);

    chatContent.scrollTop = chatContent.scrollHeight; // Scroll to the bottom
  }

  const formatMessageContent = (content) => {
    return (
      content
        .replace(/</g, "&lt;") // Escape <
        .replace(/>/g, "&gt;") // Escape >
        .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>") // Bold
        .replace(/\_(.+?)\_/g, "<i>$1</i>") // Italics
        .replace(/\_\_(.+?)\_\_/g, "<u>$1</u>") // Underline
        .replace(/\~\~(.+?)\~\~/g, "<del>$1</del>") // Strikethrough
        .replace(
          /^(#{1, 6}) (.+)$/gm,
          (_, h, content) => `<h${h.length}>${content}</h${h.length}>`
        ) // Headers
        .replace(/(?:^|\n)([-*]) (.+)/g, (_, bullet, item) => {
          return `<ul><li class="mb-3 mt-2">${item}</li></ul>`;
        })
        // ✅ FIX: Group ordered lists inside <ol>
        .replace(/(?:^|\n)(\d+)\. (.+)/g, (_, number, item) => {
          return `<ol><li>${item}</li></ol>`;
        })
        // ✅ Merge consecutive <ul> and <ol> into one list
        .replace(/<\/ul>\n?<ul>/g, "")
        .replace(/<\/ol>\n?<ol>/g, "")
        .replace(
          /(\[([^\]]+)\]\((https?:\/\/[^\s]+)\))|((https?:\/\/|www\.)[^\s]+)/g,
          (match, markdownLink, text, markdownUrl, standaloneUrl) => {
            if (markdownLink) {
              // ✅ Convert markdown-style links to HTML <a> tags
              return `<a href="${markdownUrl}" target="_blank" style="color: blue;">${text}</a>`;
            } else {
              // ✅ Convert standalone URLs to clickable links
              const href = standaloneUrl.startsWith("www.")
                ? `https://${standaloneUrl}`
                : standaloneUrl;
              return `<a href="${href}" target="_blank" style="color: blue;">${href}</a>`;
            }
          }
        )
        .replace(
          /\!\[(.+?)\]\((https?:\/\/.+?)\)/g,
          '<img src="$2" alt="$1" />'
        ) // Images
        .replace(/\n/g, "<br>") // Line breaks
        .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>") // Blockquote
        .replace(/`([^`]+)`/g, "<code>$1</code>") // Inline code
        .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>") // Code block
        .replace(/^---$|^\*\*\*$|^-{3,}$/gm, "<hr>")
    ); // Horizontal rule
  };

  async function askQuestion(message) {
    const chatInput = document.getElementById("chatbot-input");

    if (message) {
      // add date month year and time to the message
      const queryTime = new Date().toISOString();

      // Add typing... message
      const typingMessage = {
        role: "system",
        type: "text",
        text: "Typing...",
        time: queryTime,
        attachments: [],
      };

      conversations.messages.push(typingMessage);

      appendMessage(typingMessage);

      chatInput.value = "";
      isAsking = true;

      const responseObj = await intentDetector(message);
      let response = "";
      let attachments = [];

      // console.log("In Ask Question", responseObj);

      if (responseObj.hasMatch || responseObj.isQueryNormal) {
        response = responseObj.chatbotResponse;
        if (responseObj.urls.length > 0) {
          responseObj.urls.forEach((url, index) => {
            attachments.push({
              title: responseObj.titles[index],
              url: url,
            });
          });
        }
      } else {
        response =
          responseObj.chatbotResponse +
          "\n\n" +
          "Meanwhile if you want to get started, You can register or visit our documentation.";
        attachments.push(
          {
            title: "Register",
            url: "https://pteri.org/Register",
          },
          {
            title: "Get Started",
            url: "https://docs.kakr.ai/using-pteri/get-started",
          }
        );
      }

      let formattedResponse = "";
      if (response) {
        formattedResponse = formatMessageContent(response);
      }
      // console.log(formattedResponse);

      const responseTime = new Date().toISOString();

      const typingIndex = conversations.messages.findIndex(
        (msg) => msg.text === "Typing..."
      );

      if (typingIndex !== -1) {
        const updatedMessage = {
          role: "system",
          type: "text",
          text: formattedResponse,
          time: responseTime,
          attachments: attachments,
        };

        conversations.messages.splice(typingIndex, 1, updatedMessage);
        // console.log(typingIndex);

        await reRenderMessage(typingIndex, updatedMessage);
      }

      await addUserQuery({
        query: message,
        chatbotResponse: response,
        references: attachments,
        queryCreatedOn: queryTime,
        responseGeneratedOn: responseTime,
      });

      await saveConversations(conversations);
    }
  }

  async function reRenderMessage(index, updatedMessage) {
    const chatContent = document.getElementById("chat-content");
    const messageDiv = chatContent.children[index];

    if (!messageDiv) {
      console.error(`Message at index ${index} does not exist.`);
      return;
    }

    const emptyMessage = {
      role: "system",
      type: "text",
      text: "",
      time: updatedMessage.time,
      attachments: updatedMessage.attachments,
    };

    const updatedMessageDiv =
      updatedMessage.role === "user"
        ? createUserMessageElement(updatedMessage)
        : createChatbotResponseElement(emptyMessage);

    chatContent.replaceChild(updatedMessageDiv, messageDiv);
    await typeWriter(updatedMessage.text, 0, 0, index);
  }

  const downloadCSV = async () => {
    const data = await getConversations();

    // Process data to remove `type` and handle attachments
    const processedData = data.map((obj) => {
      const { type, attachments, time, ...rest } = obj; // Destructure and remove `type`
      const localTime = new Date(time).toLocaleString(); // Convert `time` to local time

      // Add processed time and attachments back to the object
      const attachmentLinks = attachments.reduce(
        (acc, attachment, index) => {
          acc[`link${index + 1}_url`] = attachment.url || "";
          return acc;
        },
        {}
      );

      return { ...rest, time: localTime, ...attachmentLinks }; // Combine the rest of the object with processed fields
    });

    // Extract headers dynamically
    const headers = Array.from(
      new Set(processedData.flatMap((obj) => Object.keys(obj)))
    );

    // Generate rows for the CSV
    const rows = processedData.map((obj) =>
      headers
        .map((header) => {
          let cellData = obj[header] ?? ""; // Handle undefined values gracefully
          // Escape double quotes by replacing them with two double quotes
          cellData = String(cellData).replace(/"/g, '""');
          // Wrap in double quotes if the cell data contains commas or quotes
          if (cellData.includes(",") || cellData.includes('"')) {
            cellData = `"${cellData}"`;
          }
          return cellData;
        })
        .join(",")
    );

    // Combine headers and rows
    const csvContent = [headers.join(","), ...rows].join("\n");

    // Create a Blob and download the CSV
    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute(
      "download",
      "LIA_Chat_" + new Date().toISOString() + ".csv"
    );
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  document
    .getElementById("download-chat")
    .addEventListener("click", downloadCSV);
});