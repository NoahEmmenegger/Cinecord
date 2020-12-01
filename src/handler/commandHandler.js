const fs = require('fs');
const messageEmbedService = require('../service/messageEmbedService')

// init handler
const commands = [];

const commandFiles = fs.readdirSync('./src/command').filter(file => file.endsWith('.js'));

commandFiles.forEach(file => {
    const command = require(`../command/${file}`);
    commands.push(command)
});

let administrators = ['321338080126697474', '305021007599501312', '312937715802963968', '312937309165060096', '386900213022982155']

function isAdministrator(id) {
    return administrators.includes(id)
}

function isModerator(message) {
    return message.member.id === message.guild.ownerID || message.member.roles.cache.find(role => role.permissions.has('MANAGE_GUILD'))
}

module.exports = {
    commandHandler(message) {
        // build better guard
        if (!message.content) return;

        const arguments = message.content.split(' ')
        const commandIdentifier = arguments.shift().slice(1)
        const command = commands.find(x => x.name === commandIdentifier)

        if (!command) {
            console.log('no command found')
            return;
        }

        if (command.adminOnly && !isAdministrator(message.member.id)) {
            return;
        }

        if (command.serverModeratorOnly && !isModerator(message)) {
            message.reply(messageEmbedService.getErrorManageGuildEmbed())
            return;
        }

        command.execute(message, arguments)
    }
}