const { log } = require("console");
const ChatRoom = require("./chatRoom");

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} has joined the chat`);
});

chat.on("message", (user, message) => {
  console.log(`${user} : ${message}`);
});

chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});

chat.join("Alice");
chat.join("bob");

chat.sendMessage("Alice", "hey bob, hello to everyone");
chat.sendMessage("bob", "hey Alice, hello to everyone");

chat.leave("Alice");
chat.sendMessage("Alice", "this message wont be send");
chat.leave("bob");
