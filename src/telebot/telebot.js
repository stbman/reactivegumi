var fs = require('fs')
var json_db = JSON.parse(fs.readFileSync('../assets/data/user_dummy.json', 'utf8'));



const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
BOT_TOKEN = '571221937:AAENOLNrt4gLfXKDCgb6q9rFVuO9uUzjIr4'
const bot = new Telegraf(BOT_TOKEN)

const keyboard = Markup.inlineKeyboard([
  Markup.urlButton('❤️', 'http://telegraf.js.org'),
  Markup.callbackButton('Delete', 'delete')
])


// on start up 		
bot.start((ctx) => ctx.reply('Digital Twin Learning Bot!'))
bot.help((ctx) => ctx.reply('Help message'))

//media splash 
bot.command('/info', (ctx) => { ctx.replyWithMediaGroup([
{
  'media': {source: '../assets/img/csc_logo.png'},
  'caption': 'Civil Service College Learning Bot 😃\n type /help for list of commands ',
  'type': 'photo'
}]) })


bot.help((ctx) => ctx.reply('Send me a sticker'))

// daily digest
bot.hears('mydaily', (ctx)=> ctx.reply(JSON.stringify(json_db['topics'])))
// quick review
bot.hears('review', (ctx)=> {
	console.log(ctx.chat.id)
	ctx.reply(ctx.chat.id)
})


// done courses

// helpful tips
bot.hears('tips', (ctx)=> ctx.reply())

// scorecard
bot.hears('scorecard', (ctx)=> ctx.reply())

// experts
bot.hears('guru', (ctx)=> ctx.reply())



bot.startPolling()
