const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'song', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "\n*If It's not working* \n *Use .need*\n";

var i = Math.floor(1*Math.random())

await message.sendMessage(r_text[i]);

}));
