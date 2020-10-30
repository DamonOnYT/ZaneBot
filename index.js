// i was lazy and stole HexDev's code
// Credits: https://github.com/HexDevv/Clark-Bot

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

// most of these r out of the starboard
const ZaneQuoteList = [
    'give me access damon so i can ddos myself',
    'i keep saying not before a lot of my sentences',
    'if i said i love u 2 my mum via next she’d probably think im suicidal',
    'fuck this dumb ass css version one keyfm rubbish ass',
    'i was planning to get pissed but ive decided to be repsonsisbel and don’t do such thigns',
    'zane go rawr',
    'if she’s giving any sex it’s to me :point_right::point_left:',
    '@Kevin ur breath stinks, let’s drink mouthwash together!',
    'frozen cum ?',
    'i have corona',
    'it’s ok we all make mistakes, i was made !',
    'imaging having a bath with a toaser :heart_eyes:',
    'becs don’t ever say daddy on the dinner table because ur dad and me would stand up at the same time',
    'make sure u become an arsonist and commit arson to ur workplace',
    'if we do its in the bed',
    'julia deserves nothing',
    'if i hear this jingle again im going to boot u off air bye',
    'its the gay bean for me',
    'if only there was an option to mute to the dj on air and just listen to the music',
    'CBA JUST DROPPED MY PHONE ON THE STAIRS',
    'ur asking for it now im gonna chuck udown stairs',
    'zach if u dont shut up im gna put u in my van ivan style',
    'shut up bitch',
    'always safe around me <3',
    'and we made a baby',
    'yeah no i dont hire people from the streets zach',
    'its hella big',
    'its honestly so big',
    'yes ur a homie so I want to fuck u',
    'would love to pull damon\'s hair',
    'UPBEat copy',
    'hello eVERYBODY CLAP YOUR HANDS',
    'sorry im drunk',
    'executive doesnt do much',
    'why would anyone in the right mind have bath sex',
    'im somehow listening to sex songs now on youtube',
    'SEX TAPE COMING SOON',
    'it was that song where it goes like “let’s talk about sex baby”',
    'DAMON MARRY ME',
    'FUCK FUCK ME NOW',
    'bro this girl behind me is so fucking annoying',
    'shut the fuck u curly fried looking bitch',
    'LETS FUCK ON THE GRASS !!1',
    'BUT THEY\'RE REALLY FUCKING AND MAKING THE PHOTOS',
    'damon please fucking demote this dumb dj',
    'he\'s a fucking cunt',
    'anyone reading these would think im drunk',
    'fuck she EYED ME',
    '------ is so fucking dumb im about to slit my throat because of ------',
    'OH FUCK OFF',
    'fuck keyfm and fuck Chris yeah',
    'guess I really am fucked',
    'sorry but how the fuck do u expect me to stay at home, be depressed n stay in A ROOM TO REMEMBER CONTENT',
    'fuck u damon i was trying to troll chris',
    'fuck U CSS',
    'WHAT THE FUCK DID YOU SAY TO ME YOU LITTLE SHIT',
    'executive straight sex?',
    'did u have sex with the teacher',
    'do i lOOK LIKE A SEX DOLL'
]

client.on('ready', () => {
console.log(`Bot Started`)
});

client.on('message', async msg => {
    const msgcontent = msg.content.toLowerCase();
    if (!msgcontent.startsWith('hey zane')) return;
    if (msgcontent.includes('quotes') || msgcontent.includes('quote')) {
        const ClarkQuote = new Discord.MessageEmbed;
        await ClarkQuote.setDescription(ZaneQuoteList[Math.floor(Math.random()*ZaneQuoteList.length)]);
        return msg.reply(ClarkQuote);
    }
    
    
});
client.login(process.env.token);
