export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const portalId = "242XXXXX"; // Replace with your HubSpot Portal ID
  const formId = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"; // Replace with your HubSpot Form ID

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

  try {
    const response = await $fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error?.data || error.message,
    };
  }
});
