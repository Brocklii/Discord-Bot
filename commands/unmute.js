module.exports = {
    name: 'unmute',
    aliases: [],
    cooldown: 5,
    description: "This is an unmute command!",
    execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first();
        if (target) {
            // let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            // memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else {
            message.channel.send('Can\'t find that member!');
        }
    }
}