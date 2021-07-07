// Role ID's
// ---------
// THE APOSTLE: <@&468263226673594378>
// DJ: <@&832016608938557462>
// THC APOSTLES: <@&468262668399280129>
// Member: <@&859087759071379498>
// Mute: <@&859092177082908692>
// 
// Links
// -----
// Bot: https://discord.com/oauth2/authorize?client_id=860529990823444542&scope=bot&permissions=8589934591
// NodeJS: https://nodejs.org/en/
// 

const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });


client.commands = new Discord.Collection();
client.events = new Discord.Collection(); 

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.DISCORD_TOKEN);