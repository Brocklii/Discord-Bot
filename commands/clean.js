module.exports = {
    name: 'clean',
    aliases: [],
    cooldown: 5,
    description: "This is a clean command!",
    async execute(message, args, cmd, client, Discord){
        if(message.member.roles.cache.has('832016608938557462')){
            if(!args[0]) return message.reply("Please enter the amount of messages you want to clear!");
            if(isNaN(args[0])) return message.reply("Please enter a real number!");

            if(args[0] > 100 || args[0] < 0) return message.reply("You must use a number between 0 and 100");
            if(args[0] == 0) return message.reply("Why...");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
        }else{
            message.reply("You don't have access to this command.")
        }
    }
}