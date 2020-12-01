const messageEmbedService = require('../service/messageEmbedService')

module.exports = {
    name: 'help',
    description: 'help command',
    serverModeratorOnly: true,
    execute(message) {
        message.channel.send(messageEmbedService.getHelpEmbed())
    }
}