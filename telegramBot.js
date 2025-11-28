export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    if (req.method == "POST") {
      const update = await req.json();

      if (update.message) {
        // Constants
        const adminId = env.adminId;
        const token = env.BOT_TOKEN;
        const chatId = update.message.chat.id;
        const userFirstName = update.message.from.first_name;
        const userLastName = update.message.from.last_name || "{Empty}";
        const userName = update.message.from.username || "{Empty}";
        const adminMessage = `${adminSubject}\nName: ${userFirstName}\nFamily: ${userLastName}\nUser: @${userName}\nId: ${chatId}`;
        const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

        const command = (update.message.text || "").trim().toLowerCase();

        if (command === "/start") {
          await sendMessage(telegramApiUrl, adminId, adminMessage);
          await sendMessage(telegramApiUrl, chatId, welcomeMessage, "Markdown");
        }
        if (command === "/help") {
          await sendMessage(telegramApiUrl, chatId, messageOne);
        }
        if (command === "/anonymous") {
          await sendMessage(telegramApiUrl, chatId, messageTwo);
        }
      }
      return new Response("OK");
    }
    return new Response("Worker is running");
  },
};


async function sendMessage(telegramApiUrl, chatId, text, parseMode = null) {
  const body = {
    chat_id: chatId,
    text: text,
  };

  if (parseMode) {
    body.parse_mode = parseMode;
  }

  await fetch(telegramApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return new Response("OK");
}

/////////////////////////////////////////////////////////////////////////////////
const adminSubject = "<-- Someone fell in my trap 🎯 -->";
const welcomeMessage = `Welcome Message`
const messageOne = `Message One`
const messageTwo = `Message Two`
/////////////////////////////////////////////////////////////////////////////////