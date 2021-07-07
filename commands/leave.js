module.exports = {
    name: 'leave',
    aliases: [],
    cooldown: 5,
    description: "This is a leave command!",
    async execute(message, args, cmd, client, Discord){
        const vc = message.member.voice.channel;

        if(!vc) return message.channel.send('You need to be in a voice channel to run this command.');
        await vc.leave();
        await message.channel.send(':no_entry: Disconnecting... :no_entry:');
    }
}