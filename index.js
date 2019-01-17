const Discord = require('discord.js');

var bot = new Discord.Client();

// Embed pour le *help
var help = new Discord.RichEmbed()
    .setDescription("```|*help| : Affiche la liste des commandes.``````|*info| : Affiche les informations du Bot.``````|*meme| : Afficher des memes aléatoire``````|*ytb| ou |*youtube| : Afficher la chaine de Jey & Diamond``````|*abo| ou |*abonné| : Afficher les abonnés de Jey & Diamond```")
    .setColor("#00ffe2")
    .setAuthor("Voici les commandes Disponibles de Jey & Diamond Bot")

// Embed pour le *info
var info = new Discord.RichEmbed()
        .setDescription("```C'est Mivo#8967 Qui m'a développé```")
        .setColor("#00ffe2")

bot.login(process.env.BOT_TOKEN);

bot.on("ready", () => {
    bot.user.setActivity('"Jey & Dimond, *help"')
    bot.user.setGame('Jey & Dimond, *help', 'https://twitch.tv/Jey & Dimond')
    console.log("Le Bot Est Connecte")
})

// Liste des commandes
bot.on('message', message => {
    if (message.content === ("*help")) {
        message.channel.sendEmbed(help);
        bot.channels.find("id", "520754593576255489").send(`**[LOG] : ${message.author.username} a executer la commande *Help**`)
    }
})

// Afficher les infos
bot.on('message', message => {
    if (message.content === ("*info")) {
        message.channel.sendEmbed(info)
        bot.channels.find("id", "520754593576255489").send(`**[LOG] : ${message.author.username} a executer la commande *Info**`)
    }
})

// Salutation
bot.on('message', message => {
    if (message.cont === 'salut' || message.content === 'salut !' || message.content === 'salut!' || message.content === 'Salut' || message.content === 'Salut !' || message.content === 'Salut!' || message.content === 'bonjour' || message.content === 'Bonjour' || message.content === 'bonjour !' || message.content === 'bonjour!' || message.content === 'Bonjour !' || message.content === 'Bonjour!' || message.content === 'bonsoir' || message.content === 'Bonsoir' || message.content === 'bonsoir !' || message.content === 'bonsoir!' || message.content === 'Bonsoir !' || message.content === 'Bonsoir!' || message.content === 'allo' || message.content === 'Allo' || message.content === 'allo !' || message.content === 'allo!' || message.content === 'Allo !' || message.content === 'Allo!' || message.content === 'Salut tout le monde !' || message.content === 'Salut tout le monde!' || message.content === 'salut tout le monde !' || message.content === 'salut tout le monde!' || message.content === 'Salut tout le monde' || message.content === 'salut tout le monde') {
        message.reply(`**Bien le bonjour a toi !**`)
    }
})

// Antie insulte
bot.on('message', message => {
    if (message.content === 'pute' || message.content === 'Pute' || message.content === 'salope' || message.content === 'Salope' || message.content === 'enculer'  || message.content === 'Enculer' || message.content === 'fdp' || message.content === 'Fdp' || message.content === 'tg' || message.content === 'Tg' || message.content === 'tyl' || message.content === 'Tyl' || message.content === 'sale pute' || message.content === 'Sale Pute' || message.content ===  'ez' || message.content === 'Ez' || message.content === 'ta gueule' || message.content === 'Ta Gueule' || message.content === 'ntm' || message.content === 'Ntm' || message.content === 'pd' || message.content === 'Pd' || message.content === 'pedo' || message.content === 'Pedo' || message.content === 'Fils de pute' || message.content === 'fils de pute') {
        message.delete ()
        message.reply ("**Merci de ne pas dire d'insulte**")
    }
})

// Antie insulte full MAJ
bot.on('message', message => {
    if (message.content === 'FDP' || message.content === 'TG' || message.content === 'TYL' || message.content === 'EZ' || message.content === 'NTM' || message.content === 'PUTE' || message.content === 'SALOPE'|| message.content === 'ENCULER' || message.content === 'SALE PUTE' || message.content === 'TA GUEULE' || message.content === 'PD' || message.content === 'PEDO' || message.content === 'FILS DE PUTE') {
        message.delete ()
        message.reply ("**Merci de ne pas dire d'insulte**")
    }
})

// Des Memes Aléatoire
bot.on('message', message => {
    if (message.content === ("*meme")) {
        number = 39;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) +1;
        message.channel.send ( {files: ["./meme/" + imageNumber + ".png"]} )
        bot.channels.find("id", "520754593576255489").send(`**[LOG] : ${message.author.username} a executer la commande *Meme**`)
     }
 })

// Chaine youtube de Jey & Diamond
bot.on('message', message => {
    if (message.content === '*ytb' || message.content === '*Ytb' || message.content === '*youtube' || message.content === '*Youtube') {
        message.reply ("https://www.youtube.com/channel/UC85AH6nljFXo-dnyytrS1bg?sub_confirmation=1")
        bot.channels.find("id", "520754593576255489").send(`**[LOG] : ${message.author.username} a executer la commande *Youtube**`)
    }
})

// Live Subscribes de Jey & Diamond
bot.on('message', message => {
    if (message.content === '*abo' || message.content === '*Abo' || message.content === '*Abonné' || message.content === '*abonné') {
        message.reply ("https://livecounts.net/channel/Jey%20et%20Diamond")
        bot.channels.find("id", "520754593576255489").send(`**[LOG] : ${message.author.username} a executer la commande *Abonné**`)
    }
})
