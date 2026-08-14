<template>
  <div class="chat-widget">
    <button 
      v-if="!isOpen" 
      @click="toggleChat" 
      class="chat-toggle-btn"
      aria-label="Open chat"
    >
      <img src="/kakrlabs-logo.png" alt="PTERI" style="width:28px; height:28px; object-fit:contain; filter:brightness(0) invert(1);" />
    </button>

    <div v-if="isOpen" class="chat-container">
      <div class="chat-header">
        <div class="header-content">
          <div class="header-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <div>
            <span class="header-title">Pteri AI Assistant</span>
            <span class="header-subtitle">Ask me anything about Kakr Labs</span>
          </div>
        </div>
        <button @click="toggleChat" class="chat-close-btn" aria-label="Close chat">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div class="chat-messages" ref="messagesContainer">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.role]">
          <div v-if="message.role === 'assistant'" class="message-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <div class="message-content" v-html="formatMessage(message.content)"></div>
        </div>
        
        <div v-if="isLoading" class="message assistant">
          <div class="message-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <div class="message-content typing">
            <span></span><span></span><span></span>
          </div>
        </div>
        
        <!-- Quick Actions - Show only at start -->
        <div v-if="showQuickActions" class="quick-actions">
          <div class="quick-actions-title">Popular questions:</div>
          <button 
            v-for="action in quickActions" 
            :key="action.id"
            @click="selectQuickAction(action.prompt)"
            class="quick-action-btn"
            :disabled="isLoading"
          >
            <span class="action-icon">{{ action.icon }}</span>
            <span class="action-text">{{ action.label }}</span>
          </button>
        </div>
      </div>

      <div class="chat-input-container">
        <input 
          v-model="inputMessage" 
          @keypress.enter="sendMessage"
          type="text" 
          placeholder="Ask about Kakr Labs..."
          class="chat-input"
          :disabled="isLoading"
          ref="inputField"
        />
        <button @click="sendMessage" :disabled="isLoading || !inputMessage.trim()" class="send-btn">
          <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          <svg v-else class="spinner" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
          </svg>
        </button>
      </div>
      
      <div class="chat-footer">
        <span class="footer-text">Powered by Kakr Labs AI</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface QuickAction {
  id: string
  icon: string
  label: string
  prompt: string
}

const isOpen = ref(false)
const inputMessage = ref('')
const messages = ref<Message[]>([])
const isLoading = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)
const inputField = ref<HTMLInputElement | null>(null)
const sessionId = ref('')

// Use our server-side proxy instead of calling n8n directly (bypasses CORS)
const apiUrl = '/api/chat'

// Reduced to 4 most important quick actions
const quickActions: QuickAction[] = [
  {
    id: 'about',
    icon: '🏢',
    label: 'What is Kakr Labs?',
    prompt: 'What is Kakr Labs and what do you do?'
  },
  {
    id: 'wallet',
    icon: '💼',
    label: 'PTERI App',
    prompt: 'Tell me about the PTERI App'
  },
  {
    id: 'api',
    icon: '⚡',
    label: 'API Integration',
    prompt: 'How do I integrate with Kakr Labs API?'
  },
  {
    id: 'litecoin',
    icon: '⛏️',
    label: 'Why Litecoin?',
    prompt: 'Why does Kakr Labs use Litecoin blockchain?'
  }
]

const showQuickActions = computed(() => {
  return messages.value.length === 1 && !isLoading.value
})

const formatMessage = (content: string) => {
  // Convert markdown-style links to HTML
  let formatted = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
  
  // Convert line breaks to <br>
  formatted = formatted.replace(/\n/g, '<br>')
  
  // Highlight code blocks with backticks
  formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>')
  
  // Bold text
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  
  return formatted
}

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    if (messages.value.length === 0) {
      messages.value.push({
        role: 'assistant',
        content: 'Hi! I\'m your Pteri AI Assistant. I can help you learn about Kakr Labs, PTERI App, our API, and blockchain infrastructure. What would you like to know?'
      })
    }
    // Focus input field when chat opens
    nextTick(() => {
      inputField.value?.focus()
    })
  }
}

const scrollToBottom = (smooth = true) => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTo({
        top: messagesContainer.value.scrollHeight,
        behavior: smooth ? 'smooth' : 'auto'
      })
    }
  })
}

const selectQuickAction = async (prompt: string) => {
  if (isLoading.value) return
  inputMessage.value = prompt
  await sendMessage()
}

// Default responses for common queries
const getDefaultResponse = (message: string): string | null => {
  const lowerMessage = message.toLowerCase().trim()
  
  // Greetings
  if (['hi', 'hello', 'hey', 'hi there', 'hello there', 'hey there'].includes(lowerMessage)) {
    return 'Hi there! 👋 I\'m your Pteri AI Assistant. I can help you with:\n\n• Information about Kakr Labs and our services\n• PTERI App features\n• API integration and documentation\n• Blockchain infrastructure questions\n\nWhat would you like to know?'
  }
  
  // How are you
  if (['how are you', 'how are you?', 'how r u', 'how r u?'].includes(lowerMessage)) {
    return 'I\'m doing great, thank you for asking! 😊 I\'m here and ready to help you learn about Kakr Labs. What can I assist you with today?'
  }
  
  // Thanks
  if (['thanks', 'thank you', 'thank you!', 'thanks!', 'thx', 'ty'].includes(lowerMessage)) {
    return 'You\'re welcome! 😊 Feel free to ask if you have any other questions about Kakr Labs.'
  }
  
  // Bye
  if (['bye', 'goodbye', 'see you', 'see ya', 'bye bye'].includes(lowerMessage)) {
    return 'Goodbye! 👋 Feel free to come back anytime you have questions about Kakr Labs. Have a great day!'
  }
  
  return null
}

const sendMessage = async () => {
  if (!inputMessage.value.trim() || isLoading.value) return

  const userMessage = inputMessage.value.trim()
  messages.value.push({
    role: 'user',
    content: userMessage
  })
  
  inputMessage.value = ''
  isLoading.value = true
  scrollToBottom()

  // Check for default responses first
  const defaultResponse = getDefaultResponse(userMessage)
  if (defaultResponse) {
    // Simulate a brief delay for more natural feel
    setTimeout(() => {
      messages.value.push({
        role: 'assistant',
        content: defaultResponse
      })
      isLoading.value = false
      scrollToBottom()
      nextTick(() => {
        inputField.value?.focus()
      })
    }, 500)
    return
  }

  try {
    const response = await $fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        action: 'sendMessage',
        sessionId: sessionId.value || `session_${Date.now()}`,
        chatInput: userMessage
      }
    })

    if (response && typeof response === 'object') {
      const data = response as any
      
      // Store session ID
      if (data.sessionId) {
        sessionId.value = data.sessionId
      }

      // Extract response
      let assistantMessage = ''
      
      if (typeof data === 'string') {
        assistantMessage = data
      } else if (data.output) {
        assistantMessage = data.output
      } else if (data.response) {
        assistantMessage = data.response
      } else if (data.text) {
        assistantMessage = data.text
      } else if (data.message) {
        assistantMessage = data.message
      } else {
        assistantMessage = 'I received your question but couldn\'t format the response properly. Please try rephrasing your question.'
      }
      
      messages.value.push({
        role: 'assistant',
        content: assistantMessage
      })
      
      scrollToBottom()
    } else {
      throw new Error('Invalid response format')
    }
  } catch (error: any) {
    console.error('Chat error:', error)
    
    let errorMessage = 'I\'m having trouble connecting right now. Please try again in a moment, or contact us directly at contact@kakr.ai for immediate assistance.'
    
    // Provide specific error messages
    if (error.message && error.message.includes('CORS')) {
      errorMessage = 'There\'s a connection issue with the chat service. Please refresh the page and try again.'
    } else if (error.status === 404 || error.statusCode === 404) {
      errorMessage = 'The chat service is temporarily unavailable. Please contact us at contact@kakr.ai for assistance.'
    } else if (error.status === 500 || error.statusCode === 500) {
      errorMessage = 'I encountered an error processing your request. Please try asking your question differently, or reach out to contact@kakr.ai.'
    }
    
    messages.value.push({
      role: 'assistant',
      content: errorMessage
    })
    
    scrollToBottom()
  } finally {
    isLoading.value = false
    scrollToBottom()
    // Refocus input field
    nextTick(() => {
      inputField.value?.focus()
    })
  }
}
</script>

<style scoped>
.chat-widget {
  position: fixed;
  /* env() falls back to 0 on non-iOS browsers, so this is just 24px there;
     on notched/home-indicator devices it keeps the launcher clear of the
     inset area (handoff §7 "respect env(safe-area-inset-*)"). */
  bottom: calc(24px + env(safe-area-inset-bottom));
  right: calc(24px + env(safe-area-inset-right));
  /* Below modal overlays (which use 9999) so dialogs such as the contact-form
     success card are never blocked by the launcher, but above page content.
     Audit p4.3 / p15.5: the widget must not obscure content or mobile CTAs —
     the matching reserved footprint is --chat-safe-bottom in theme.css. */
  z-index: 998;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.chat-toggle-btn {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.chat-toggle-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 32px rgba(16, 185, 129, 0.5);
}

.chat-container {
  width: 420px;
  height: 650px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.chat-header {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-icon {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-content > div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.header-title {
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
}

.header-subtitle {
  font-size: 12px;
  opacity: 0.9;
  line-height: 1.2;
}

.chat-close-btn {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  cursor: pointer;
  padding: 8px;
  min-width: 44px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 0.2s;
}

.chat-close-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: #f9fafb;
  scroll-behavior: smooth;
}

.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: transparent;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

.message {
  margin-bottom: 16px;
  display: flex;
  gap: 10px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message.user {
  justify-content: flex-end;
}

.message.assistant {
  justify-content: flex-start;
}

.message-avatar {
  width: 32px;
  height: 32px;
  min-width: 32px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.message-content {
  max-width: 75%;
  padding: 12px 16px;
  border-radius: 12px;
  word-wrap: break-word;
  line-height: 1.5;
  font-size: 14px;
}

.message.user .message-content {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-bottom-right-radius: 4px;
  margin-left: auto;
}

.message.assistant .message-content {
  background: white;
  color: #1f2937;
  border-bottom-left-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.message-content.typing {
  display: flex;
  gap: 6px;
  padding: 16px 20px;
  background: white;
}

.message-content.typing span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  animation: typing 1.4s infinite;
}

.message-content.typing span:nth-child(2) {
  animation-delay: 0.2s;
}

.message-content.typing span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  30% {
    transform: translateY(-10px);
    opacity: 1;
  }
}

.quick-actions {
  margin-top: 16px;
  animation: fadeIn 0.4s ease;
}

.quick-actions-title {
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.quick-action-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  padding: 12px 16px;
  margin-bottom: 8px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  color: #374151;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.quick-action-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-color: #10b981;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.quick-action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quick-action-btn:last-child {
  margin-bottom: 0;
}

.action-icon {
  font-size: 18px;
  line-height: 1;
}

.action-text {
  flex: 1;
  font-weight: 500;
}

.message-content code {
  background: #f3f4f6;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  color: #059669;
}

.message.user .message-content code {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.message-content a {
  color: #10b981;
  text-decoration: underline;
  font-weight: 500;
}

.message.user .message-content a {
  color: white;
}

.message-content strong {
  font-weight: 600;
}

.chat-input-container {
  display: flex;
  gap: 10px;
  padding: 16px 20px;
  background: white;
  border-top: 1px solid #e5e7eb;
}

.chat-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  outline: none;
  font-size: 14px;
  color: #1f2937;
  background: #f9fafb;
  transition: all 0.2s ease;
}

.chat-input::placeholder {
  color: #9ca3af;
}

.chat-input:focus {
  border-color: #10b981;
  background: white;
}

.chat-input:disabled {
  background: #f3f4f6;
  cursor: not-allowed;
  opacity: 0.6;
}

.send-btn {
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.send-btn:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.chat-footer {
  padding: 12px 20px;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
  text-align: center;
}

.footer-text {
  font-size: 11px;
  color: #9ca3af;
  font-weight: 500;
}

@media (max-width: 768px) {
  .chat-widget {
    bottom: 16px;
    right: 16px;
  }
  
  .chat-container {
    width: calc(100vw - 32px);
    height: calc(100vh - 120px);
    max-width: 420px;
    max-height: 650px;
  }
  
  .chat-toggle-btn {
    width: 56px;
    height: 56px;
  }
}
</style>
