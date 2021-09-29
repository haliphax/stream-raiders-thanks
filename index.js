const RESPONSES = [
	'<3',
	'BloodTrail',
	'GlitchNRG',
	'HolidaySanta',
	'KevinTurtle',
	'OhMyDog',
	'PogChamp',
	'Poooound',
	'RyuChamp',
	'SabaPing',
	'SeemsGood',
	'SMOrc',
	'TBAngel',
	'TriHard',
	'VoteYea',
];

const qs = Object.fromEntries(
	window.location.href.split('?')[1].split('&').map(v => v.split('=')));
const twitch = new tmi.Client({
	channels: [qs.channel],
	identity: {
		username: qs.username,
		password: `oauth:${qs.oauth}`,
	},
});

twitch.on('message', (channel, tags, message, self) => {
	if (self) return;

	if (tags.username == 'streamcaptainbot'
		&& message.indexOf(' just placed a') >= 0)
	{
		const choice = Math.floor(Math.random() * RESPONSES.length);
		const who = message.substring(0, message.indexOf(' '));
		const resp = RESPONSES[choice] + (qs.includeUsername ? ` ${who}` : '');

		twitch.say(channel, resp);
	}
});

twitch.connect();
