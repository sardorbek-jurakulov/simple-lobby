const Telegraf = require('telegraf'); // nodejsning telegram bot bilan ishlash imkonini beruvchi telegraf metodi ulandi loyihaga

const bot = new Telegraf('2091225781:AAEWFmV37CttQZuI7FpODXykeB8o7chCL7M'); // telegram botimizni tokeni orqali loyihamizdan u botni vakilini hosil qilib oldik

//start

bot.start((ctx) => {
    ctx.reply("You have entered the start command");
});

bot.launch(); // telegramdagi updatelarni pull qilish uchun ishlatiladi