const Discord = require('discord.js');
const { translate } = require("../service/translationService");

module.exports = {
    getHelpEmbed() {
        return new Discord.MessageEmbed()
        .setTitle(translate('help_title', 'en'))
    }
}