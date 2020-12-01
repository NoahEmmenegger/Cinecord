const Discord = require('discord.js')
const config = require('../config.json')

const { commandHandler } = require('./handler/commandHandler')

const client = new Discord.Client();

client.on('ready', () => {
    console.log('ready')
})

client.on('message', (msg) => commandHandler(msg))

client.login(config.TOKEN)