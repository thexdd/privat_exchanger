const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env['506048904:AAFG6pQhqiNbmBn-LAbeEi4vMvC9YNkWVsM']);

// Register listeners
slimbot.on('message', message => {
  // reply when user sends a message
  slimbot.sendMessage(message.chat.id, 'Message received');
});

slimbot.on('edited_message', edited_message => {
  // reply when user edits a message
  slimbot.sendMessage(message.chat.id, 'Message edited');
});

// Call API
slimbot.startPolling();