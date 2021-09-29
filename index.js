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
		const random = Math.floor(Math.random() * RESPONSES.length);
		const response = RESPONSES[random];
		const who = qs.includeUsername
			? message.substring(0, message.indexOf(' '))
			: '';
		const text = `${response} ${who}`.trim();

		twitch.say(channel, text);
	}
});

twitch.connect();
