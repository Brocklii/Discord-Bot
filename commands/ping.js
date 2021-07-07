module.exports = {
    name: 'ping',
    aliases: ['hello'],
    cooldown: 5,
    description: "This is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send('pong!');
    }
}