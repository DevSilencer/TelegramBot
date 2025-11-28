# 🤖 Telegram Bot on Cloudflare Workers

A simple Telegram bot built with **Node.js** and deployed on **Cloudflare Workers**.
This bot responds to `/start`, `/help`, and `/anonymous` commands and forwards user information to the admin. 📩

---

## ✨ Features

* 🎉 Sends a welcome message to users on `/start`.
* 📬 Notifies the admin with user details when `/start` is triggered.
* ℹ️ Provides informational messages for `/help` and `/anonymous`.
* 🚀 Easy deployment on Cloudflare Workers.

---

## 🛠 Prerequisites

* Node.js (for development/testing) 💻
* Cloudflare Workers account ☁️
* Telegram Bot Token (from [BotFather](https://t.me/BotFather)) 🔑
* Admin Telegram ID 👤

---

## ⚡ Setup & Deployment

1. **Create a Cloudflare Worker**
   Go to your Cloudflare dashboard → Workers → Create a new Worker. 🏗

2. **Add Environment Variables**
   In your Worker settings, add the following environment variables:

   * `BOT_TOKEN` – Your Telegram bot token 🔑
   * `adminId` – Telegram ID of the admin 👤

3. **Upload your bot code**
   Copy the bot code (`telegramBot.js` or the main file) into the Worker editor. 📂

4. **Deploy the Worker**
   Save and deploy your Worker. You can now access it via the Worker URL. 🌐

---

## 📲 Usage

Send commands to your bot on Telegram:

* `/start` – Sends a welcome message and notifies the admin. 🎉
* `/help` – Sends help or informational message to the user. ℹ️
* `/anonymous` – Sends the anonymous message to the user. 🕵️‍♂️

**Note:** Admin receives a message with the following format:

```
<-- Someone fell in my trap 🎯 -->
Name: <First Name>
Family: <Last Name>
User: @username
Id: <Chat ID>
```

---

## 📝 Code Overview

* `fetch(req, env, ctx)` – Handles incoming POST requests from Telegram. 📬
* `sendMessage(telegramApiUrl, chatId, text, parseMode)` – Sends messages to Telegram users or admin. ✉️
* Constants at the bottom define messages for users and admin notifications. ⚙️

---

## 📜 License

MIT License. 🛠

---

## 💡 Notes

* Ensure that your Worker endpoint is publicly accessible so Telegram can send updates. 🌐
* For production, consider handling other commands and error cases. ⚠️
