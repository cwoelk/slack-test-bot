Node Slack Bot Experiment
============================

Very simple test bot using the [Slack RTM Api][1] through the npm package
[slackbots][2].

## Create a bot ##

Log into your Slack team and [create a bot][3]. Make a note of the API token.

## Run the code ##

After `npm install` run the following replacing your *`<<<YOUR_API_TOKEN>>>`* with
the one you received when creating your bot.
```
API_TOKEN='<<<YOUR_API_TOKEN>>>' DEBUG=slackbot* npm start
```

[1]: https://api.slack.com/rtm
[2]: https://github.com/mishk0/slack-bot-api
[3]: https://my.slack.com/services/new/bot
