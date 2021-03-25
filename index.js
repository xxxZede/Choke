const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const config2 = require("./config2.json");
const config3 = require("./config3.json");
const market_sniper = require("./market_sniper.js");



bot.on('ready', function () { 
    console.log("je suis connecté !")
});

bot.login("ODIyODkyNTY5Njg3MjI4NDQ4.YFY4bQ.1MfUdC_9uGUdXLCLIz5Ggj4ZrOg");

clientInformation.login(process.env.TOKEN);



//bot.login(config.webhook_link)