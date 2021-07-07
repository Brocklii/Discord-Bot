const ms = require('ms');
module.exports = {
    name: 'mute',
    aliases: [],
    cooldown: 5,
    description: "This is a mute command!",
    execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first();
        if (target) {
            // let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
            let memberTarget = message.guild.members.cache.get(target.id);


            // memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            if (!args[1]) {
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
            }else{
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

                setTimeout(function() {
                    memberTarget.roles.remove(muteRole.id);
                    // memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            }
    } else {
        message.channel.send('Can\'t find that member!');
    }
}
}