
const { prefix } = require('../../config.json');
module.exports = {
	name: 'help',
	description: 'All Commands.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
const { commands } = message.client;

if (!args.length) {
	data.push('Here\'s a list of all my commands:');
data.push(commands.map(command => command.name).join('\n'));


return message.author.send(data, { split: true })
	.then(() => {
		if (message.channel.type === 'dm') return;
		message.reply('Ich habe dir eine Liste meiner Commands per DM gesendet !');
	})
	.catch(error => {
		console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
		message.reply('Bitte Aktiviere DirektMessages auf diesem Server damit ich dir die Liste mit Commands senden kann');
	});
}
	},
};
