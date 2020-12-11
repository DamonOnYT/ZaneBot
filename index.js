// Credits in the README.md file

const Discord = require('discord.js');
const client = new Discord.Client();
const term = require("node-cmd");
require('dotenv').config();

const prefix = 'hey zane '

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
    'do i lOOK LIKE A SEX DOLL',
    'i have sex with pans im pansexual',
    'i would neevr have sex with a male or trans',
    'just because I have a pharmacy room doesn’t mean I have a sex room',
    'damn he\'s asking for sex',
    'does pansexual mean where u have sex with a pan',
    'it’s not gay until you have the sex with another male, right?',
    'fuck i am leaving keyfm for pulse',
    'I SAID IM GONNA FUCK HIM UP',
    'FUCK UNI FUCK UNI',
    'yes ur a homie so I want to fuck u',
    'straight people can say they want to fuck people',
    'I make gay remarks sure but im straight as fuck',
    'i been fucking bitches since i was a newborn',
    'fuck me now no homo',
    'it’s not everyday U get to fuck ppl in keyfm',
    'and he said “can’t be fucked”',
    'SHUT THE HELL UP U FUCKING FAT BITCHES',
    'oh shut the fuck up u fucking RATS',
    'I LOVE YOU PARKER BYE',
    'damon let me stroke ur pussy',
    'actually killing myself',
    'never have children they’re so fucking annoying',
    'CAN WE BACKDOOR HIS PC OR RAT IT OR SMETHING',
    'can my mum do anything bc ill tell u she’ll sue him LMFAODNAKQKWJ',
    'see you in court',
    'ok becs ill make sure my mum sues you',
    'i want to get drunk AGAIN',
    'MY MUM HEARD THAT BYE\n SHE HEARD BIG BREASTS BYE\n BC I TURNED MY AIRPODS OFF',
    'my virginity was lost when i was 13 luv',
    'i want to click it but my girlfriend is next to me',
    'can i ask my mum to run -- over with her white car! **keep in mind, she is not the imposter**',
    'guys where does -- live ill go into his house and switch the server to me then jump out',
    'Parker maybe u should fuck -- and steal the server that would help',
    'bro i am hella pissed i could fucking tie my girlfriend to the bed and burn her alive !',
    'no bc im going to my gfs house later too and it’ll ruin my night :(',
    'no thanks parker i have my gf to do that LFNAODNA',
    'no MY GFS FAMILY ARE OVER FOR DINNER',
    'time to change keyfm to aqua guys !',
    'how did -- win most funniest staff fucking rigged awards dumb bitch awards',
    'both of u suck my dick and shut up',
    'shut up parker u deformed human u dumb ass bitch yute dumb cunt homeless bitch american trump looking ass rejection dumb fuck bitch ass dumb clown',
    'i don’t want water in my penis',
    'i only have a bath when it’s with my gf',
    'she’s not going to peg me when im nothing but nice :upside_down:',
    'if straight people call each other gay... do gay people call each other straight',
    'love kids me',
    'we should fuck some time :sweat_drops:',
    'im the new ivan guys hey !!!',
    'yeah go explore her expired tits :sparkles:',
    'i told you to do it so suck my VAGINA',
    'just make sure u hide Zane.Nudes',
    'remember when i fucked you hard',
    '2 many hoes but it’s damon',
    'wow i am honoured to be pinned by damon',
    'do not put this on the bot or i will put u on the blacklist for my house',
    'bobby’s forehead = plane runway',
    'me waiting to be cancelled by olly and bobby',
    'i am the real icon who is olly',
    'imagine sending that to some1 who is new to keyfm',
    'tell topgg to die',
    'message me again and ill drag u by ur hair outside of ur house and stomp u',
    '@Bex owo let’s lose nnn together :heartbeat:',
    '@Benny stop trying to hit on my wife :flushed:',
    'I DIDNT REALISE I PRESSED RANDOM BUTTONS LMFAOAKSNQ',
    'oh yeah it’s broken',
    'im out on a date with my gf :(',
    'FFS I CHOKED ON MY FOOD BC OF U',
    'ur still a slow bitch',
    'fuck off\n u trump supporting\n bitch\n duck lookin ass',
    'trump suPPORTER !',
    'do u want to go out of this server quicker than u came in',
    'i love it when my gf does the tip !',
    '@Ben if u don’t blur my name i will be suing you',
    'at this point im gonna be more inactive than -- if another quote is added',
    'why would u want shit in ur mouth anyways wtf',
    'why is there a bathroom rug on the desk',
    'I don’t want to be ivan v2',
    'not me stealing ur songs and playing them on keyfm and editing the recently played while im on air @Jak',
    '@Jak let me do a jack and steal all ur songs and make a show named zane’s jams',
    'if I’m banned i guarantee that keyfm closes in the next 3-4 weeks',
    'ur now a known idiot',
    'thanks fin, ur being fired on Sunday',
    'i would kidnap them all',
    'why do I feel high, im tired not high',
    'yeah just kiss a girl if ur gay\n and you\'ll be straight',
    ':sparkles: worldwide :sparkles:',
    'my ears are bleeding',
    'we\'re banning and firing people',
    'omg he\'s leaking the pANELLLLLLLLLLL\n WARNING ON THE GOOGLE DOCS',
    'just email keyfmlawyer@gmail.com and we\'ll get in touch',
    'it’s an addiction now',
    'where’s the 93% drunk one ffs',
    'toaster in bath = bath bomb',
    'we all really said :sparkles: lets abuse :sparkles:',
    'cant wait for becs to shank us',
    'wap wap wap wap',
    'petition for becs to sing fuzzy wuzzy was a bear on air !',
    'yeah ur the fuzzy becs :point_right::point_left:',
    'yeah we\'re having discord call sex',
    'proud to be a traitor',
    'may have got carried away with becs in the bedroom',
    'let me just reply and roast them slightly <3',
    'SAME IM DISGUSTED IN MYSELF',
    '@Becs @Elliott remind me not to join the vc you’re both in',
    'LOL stop get off',
    'save that for you and madison <3',
    'i\'d feel bad for you, you\'re going to die single <3',
    'yes that\'s my hot sexy ass beast of a wife',
    'we are so :sparkles: unique :sparkles:',
    'he\'s being dominated by these kids :[',
    'becs can i ruin ur career',
    'DO NOT MENTION CUM',
    'We have a whole category :)',
    'im hella capable i dont need some women to tell me what i need to do',
    'i won best male staff for a reason',
    '@Hex ur a badministrator',
    'im throwing myself out the window im so tired',
    'wow not becs flexing that she’d is more productive than ill ever be',
    'good because i should be the king if you\'re the queen, becs.',
    'all ive heard is fucking "that\'s totally radical duUUuhuh"',
    'it\'s fine, im here, i always do it, admins are useless',
    'Congratulations @Elliott on your pregnancy, wishing you the best from all of us at KeyFM (especially @Becs).',
    'ok im going back to being a mute',
    'can i skip this song\n its so bad',
    'true im the only zane in the radio community',
    'if u dont click the heart button i will disconnect immediately',
    'wait for me baby gorl',
    'sorry lads my voicebox came out',
    '@Damon com here baby gorl',
    'what a hot sexy beast chocolate icecream finger lickin\' lady',
    'see.. that\'s not what you were saying in bed last-',
    'im thankful for @Becs because she is having my babies',
    '@Becs let’s do cocaine tonight!',
    'only i use becs :/',
    'light mode is actually lovely',
    'demon -> damon same thing',
    'love u 2 damon <3\n yes homo lets fuck',
    'just a shame the shower and bath doesn’t drown me',
    'best dick?!',
    'i messaged them letting them know im not gay',
    'i like them but sometimes',
    'my gf is mine >:>',
    'hope he shouts poggers in the exam',
    'and then I did history religious studies and ict',
    'STOP IM SUPPOSED TO BE ANGRY NOT LAUGHING',
    'im about to chuck myself out the window',
    'love how damon is being blamed when i was in a vc with him all night',
    'time to pay hangour £55 xxxx',
    'i dnt play it as much my gf literally plays it more than me LOOOOOOl'

]

client.once('ready', () => {
    console.log(`Bot is online`);
    client.user.setActivity(`${prefix}quote | ${prefix}invite`, {type: "WATCHING"} )
});

client.on('message', message => {

    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/);

    if (args[0] === 'quote' || args[0] === 'quotes') {
        message.channel.send(ZaneQuoteList[Math.floor(Math.random()*ZaneQuoteList.length)]);
    };

    if (args[0] === 'invite') {
        const embed = new Discord.MessageEmbed()
        .setColor('#16c60c')
        .setTitle('Invite')
        .setDescription(`[Click here](https://discord.com/oauth2/authorize?client_id=771592519624425493&scope=bot&permissions=16384>) to add me to your server`);
        message.channel.send(embed);
    };

    if (args[0] === 'servercount') {
        const embed = new Discord.MessageEmbed()
        .setColor('#16c60c')
        .setTitle(`I am in **${client.guilds.cache.size}** servers!`);
        message.channel.send(embed);
    };

    if (args[0] === 'daniel') {
        message.reply('<@766677310438113310>');
        message.reply('<@766677310438113310>')
    };
    
     if (args[0] === 'eezy') {
        message.channel.send("<@325305414705086465> is kinda stinky ngl")
    };

    if (args[0] === 'pull') {
        if(message.author.id == "210539647741329408" || message.author.id == "200511039622742016") {
        term.get("(cd /root/ZaneBot && git pull)",
        function (err, data) {
          if (err) console.log(err);
          message.channel.send(data, { code: "asciidoc" });
        })
    };
    };


    if (args[0] === 'reboot') {
        if(message.author.id == "210539647741329408" || message.author.id == "200511039622742016") {
            process.exit(1)
        };
}

});

client.login(process.env.token);
