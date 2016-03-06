const debug = require('debug')('slackbot');

const SlackBot = require('slackbots');

// const lib = require('./lib');

const { API_TOKEN, BOT_OPTIONS } = require('./config');

const server = {};
// let botId;
let bot;

server.start = () => {
  bot = new SlackBot({
    token: API_TOKEN,
    ...BOT_OPTIONS,
  });
  registerListener();
};

function registerListener() {
  debug('Registering handler');

  bot.on('start', () => {
    debug('Slack bot started');
  });

  bot.on('message', rawMessageHanlder);
}

function rawMessageHanlder(message) {
  debug('Received message', message);
}

module.exports = server;
