var fs = require('fs')
var json_db = JSON.parse(fs.readFileSync('../assets/data/user_dummy.json', 'utf8'));
var id_map = JSON.parse(fs.readFileSync('../assets/data/id.json', 'utf8'));


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

//media splash 
bot.command('/info', (ctx) => { ctx.replyWithMediaGroup([
{
  'media': {source: '../assets/img/csc_logo.png'},
  'caption': 'Civil Service College Learning Bot 😃',
  'type': 'photo'
}]) 
ctx.reply(
  'reply with the following keywords\n'+ 
  'daily : your daily topics feed\n'+
  'learn : current course recommendation\n'+
  'guru  : experts in your area\n'+ 
  'help  : for full list of commands')
})

//bot.help((ctx) => ctx.reply('Send me a sticker'))


// daily digest
function daily_func(id, db) {

	return out_str
}
const daily_regex = new RegExp('[Dd]aily')
bot.hears(daily_regex, (ctx)=> ctx.reply(daily_func(id_map[ctx.chat.id], json_db)))

// quick review
function learn_func(ctx, db) {

	return out_str
}
const learn_regex = new RegExp('[Ll]earn')
bot.hears(learn_regex, (ctx)=> ctx.reply(learn_func(id_map[ctx.chat.id], json_db)))

// done courses
function course_func(ctx, db) {

	ctx.reply('Hello '+ id_map[String(ctx.chat.id)]+'!\n Your Curated Courses')
	return out_str
}
const course_regex = new RegExp('[Cc]ourse')
bot.hears(course_regex, (ctx)=> ctx.reply(course_func(id_map[ctx.chat.id], json_db)))



// experts
function guru_func(ctx, db) {

	return out_str
}
const guru_func = new RegExp('[Gg]uru')
bot.hears(guru_func, (ctx)=> tx.reply(guru_func(id_map[ctx.chat.id], json_db)))


bot.startPolling()
