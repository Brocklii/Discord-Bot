module.exports = {
    name: 'command',
    aliases: [],
    cooldown: 5,
    description: "This is an Embed!",
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Rules')
            .setURL('https://brockkaess.com')
            .setDescription('This is an embed for server rules')
            .addFields(
                {name: 'Rule 1', value: 'Be nice'},
                {name: 'Rule 2', value: 'Be nice'},
                {name: 'Rule 3', value: 'Be nice'}
            )
            .setImage('https://www.brockkaess.com/assets/images/steam/steam12.jpg')
            .setFooter('Make sure to check out the rules channel');
            
        message.channel.send(newEmbed);
    }

}