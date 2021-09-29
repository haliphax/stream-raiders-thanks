# Stream Raiders thank-you bot

This is a static page which uses [tmi.js] in order to act as a chat bot. The
bot will respond to epic/legendary unit placement announcements from
`StreamCaptainBot` in chat.

Here's the URL you need to use:

https://haliphax.github.io/stream-raiders-thanks/?username=USER&channel=CHANNEL&includeUsername=1&oauth=TOKEN

You will need to replace the token values.
- `USER` is the bot's username (or your username if you are not using a
  separate account for the bot)
- `CHANNEL` is the channel the bot should join (likely yours)
- `TOKEN` is your OAuth token, which you can obtain using the
  [Twitch Token Generator]

If you don't want for the username of the player to be included in the
automated response, remove `&includeUsername=1` from the URL.

You can either load the page up in a tab as you normally would any other
web page and leave it open, or you can add it as an invisible source in your
streaming software of choice (e.g. OBS Studio).


[tmi.js]: https://tmijs.org
[Twitch Token Generator]: https://twitchtokengenerator.com
