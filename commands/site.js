module.exports = {
    name: 'site',
    aliases: [],
    cooldown: 5,
    description: "This is a site command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send('https://www.brockkaess.com')
    }
}