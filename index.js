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
bot.command('dao_remove-member', ctx => {})
bot.command('dao_set-role-to-member', ctx => {})

// votings
bot.command('dao_create-voting', ctx => {})
bot.command('dao_votings-all', ctx => {})
bot.command('dao_voting-get', ctx => {})
bot.command('dao_voting-vote', ctx => {})
bot.command('dao_voting-get-result', ctx => {})

// moneyflow
bot.command('dao_moneyflow-set', ctx => {})
bot.command('dao_sell-part', ctx => {})
bot.command('dao_buy-product', ctx => {})
bot.command('dao_buy-subscription', ctx => {})

// agreements
bot.command('dao_agreement-create', ctx => {})
bot.command('dao_agreement-get-all', ctx => {})
bot.command('dao_agreement-get', ctx => {})

// CRUD services and products
bot.command('dao_product-create', ctx => {})
bot.command('dao_product-get', ctx => {})
bot.command('dao_product-get-all', ctx => {})
bot.command('dao_product-update', ctx => {})
bot.command('dao_product-remove', ctx => {})

bot.command('dao_service-create', ctx => {})
bot.command('dao_service-get', ctx => {})
bot.command('dao_service-get-all', ctx => {})
bot.command('dao_service-update', ctx => {})
bot.command('dao_service-remove', ctx => {})





bot.launch()


/*
	SEPARATE SERVICE (event loop)

	for DAO in DAOs
		inspect state every day:
			if need to pay => pay
			if need to smth => smth

*/