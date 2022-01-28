const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.LIZA, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('toxic.jpg'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈*
 
*owner number wa.me/916380260672*
   
*owner number wa.me/918270026275*


*whatsapp group : https://chat.whatsapp.com/EQiRSt1omhJ3EqilWhacvo*


*githublink       _coming soon_*


*audio commads    _coming soon_*

*Bot Make Video ytube -coming soon*

*sticker commads  _coming soon_*     
`}) 

})); 
