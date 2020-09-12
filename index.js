const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply('Welcome'))

bot.hears(/\/repeat (.+)/, ctx => {
  ctx.replyWithMarkdown(ctx.message)
})

bot.command('Hi', ctx => ctx.reply('Hello'))

// privete key
bot.command('pkey_generate', ctx => {})
bot.command('pkey_show', ctx => {})

// CRUD dao
bot.command('dao_create', ctx => {})
bot.command('dao_get', ctx => {})
bot.command('dao_get-all', ctx => {})
bot.command('dao_manage', ctx => {})

// roles
bot.command('dao_add-role', ctx => {})
bot.command('dao_add-member', ctx => {})
bot.command('dao_set-role-to-member', ctx => {})

// votings
bot.command('dao_create-voting', ctx => {})
bot.command('dao_votings-all', ctx => {})
bot.command('dao_voting-get', ctx => {})
bot.command('dao_voting-vote', ctx => {})
bot.command('dao_voting-get-result', ctx => {})

bot.launch()