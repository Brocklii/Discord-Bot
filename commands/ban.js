module.exports = {
    name: 'ban',
    aliases: [],
    cooldown: 5,
    description: "This is a ban command!",
    execute(message, args, cmd, client, Discord){
        // If member is of role THE APOSTLE
        if(message.member.roles.cache.has('468263226673594378')){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.reply("user has been banned");
            }else{
                message.reply('You couldn\'t ban that member');
            }
        }else{
            message.reply("You don't have access to this command.")
        }
    }
}