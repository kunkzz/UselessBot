const {Client, RichEmbed} = require('discord.js');
const client = new Client();
const {token, prefix} = require('./botconfig.json');


//avatar
client.on("message", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
  	if (message.content.startsWith(prefix + "avatar"))
			{
    		message.reply(message.author.avatarURL);
  		}
		});


//emded
client.on("message", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
  	if (message.content.startsWith(prefix + "botinfo"))
			{
				const embed = new RichEmbed()
					.setColor('#0099ff')
					.setTitle('Useless Bot')
					.setURL('https://bit.ly/IqT6zt')
					.setAuthor('Useless Bot', 'https://media1.giphy.com/media/Ju7l5y9osyymQ/giphy.gif', '')
					.setDescription('This bot was created out of pure boredom, hope you are somewhat entertained by it.')
					.setThumbnail('https://media1.giphy.com/media/Ju7l5y9osyymQ/giphy.gif')
					.setImage('https://media1.giphy.com/media/Ju7l5y9osyymQ/giphy.gif')
					.setTimestamp()
					.setFooter('Useless bot is a joke please dont take it too serious uwu', 'https://media1.giphy.com/media/Ju7l5y9osyymQ/giphy.gif');
    	message.channel.send(embed);
  		}
});


//Server Join
client.on("guildMemberAdd", (member) => { // Check out previous chapter for information about this event
let guild = member.guild;
let memberTag = member.user.tag;
if(guild.systemChannel){
	guild.systemChannel.send(new RichEmbed() // Creating instance of Discord.RichEmbed
	.setTitle("A new user joined") // Calling method setTitle on constructor.
	.setDescription(memberTag + " has joined the" + ) // Setting embed description
	.setImage('https://thumbs.gfycat.com/ForthrightHugeAmericanratsnake-size_restricted.gif')
	.setThumbnail(member.user.displayAvatarURL) // The image on the top right; method requires an url, not a path to file!
	.addField("Members now", member.guild.memberCount) // Adds a field; First parameter is the title and the second is the value.
	.setTimestamp() // Sets a timestamp at the end of the embed
	);
}
});


//Ready to work properly
client.on('ready', () => {
  console.log('I am ready!');
});

client.login(token);
