module.exports = {
    name: 'kick',
    aliases: [],
    cooldown: 5,
    description: "This is a kick command!",
    execute(message, args, cmd, client, Discord){
        if(message.member.roles.cache.has('468263226673594378') || 
           message.member.roles.cache.has('468262668399280129')){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.reply("user has been kicked");
            }else{
                message.reply('You couldn\'t kick that member');
            }
        }else{
            message.reply("You don't have access to this command.")
        }
        
    }
}