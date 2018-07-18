const config = require('./botconfig.json');
const Discord = require("discord.js");
const client = new Discord.Client();
const profanities = ['shit', 'merda', 'fds', 'caralho', 'puta', 'fuck', 'cona', 'pila' ,'topkek','caralhete'];

client.on("message", (message) => {
  if (message.content.startsWith("yeet")) {
    message.channel.send("Bitch you thought");
  }
});

//Swear words
client.on("message", (message) => {
  var checkProfanities= function(profanity){
    return message.content.includes(profanity)
  };

  if (profanities.some(checkProfanities))
  {
    message.channel.send("*In high pitch* Watch your profanity");
  }
});



//Join server add Newbs
client.on('guildMemberAdd', member => {
  member.addRole('312678877312974852');
});


//Adds Newbs a quem n tenha

//vai buscar o token a config file
client.login(config.token);

//show the console a Ready message
client.on("ready", () => {
  console.log("I am ready!");
});

/*  for(let i=0;client.guilds.length-1;i++){


for (let j=0;guilds[i].members.length-1;j++){
      if(guilds[i].members[j].roles.length==0){
        guilds[i].members[j].addRole('312678877312974852');
      }

  }
  console.log("Membros movidos");
}





/*Start of the Comment

client.guilds.forEach((function(guild) {
if(guild.name=='Singularity'){
  guild.members.forEach((function(member){
    if(member.roles.lenght==0){
      member.addRole('312678877312974852');
    }
  });
}
});

//Adicionar profanities

client.on("message", (message) => {
if (message.content.startsWith('=')){
  if (message.content.substring(1,7)=='addprof'){
    profanities.push(message.content.slice(8,message.lenght-1));
    console.log(message.content.slice(8,message.lenght-1));
  }
}
});
End of Comment*/
