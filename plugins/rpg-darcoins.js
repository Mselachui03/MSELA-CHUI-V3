

import MessageType from '@whiskeysockets/baileys'
let impuesto = 0.02
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '🐯 Mention the user with *@user.*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '🐯 Enter the amount of *⭐ Stars* you want to transfer.'
    if (isNaN(txt)) throw 'Only numbers.'
    let poin = parseInt(txt)
    let limit = poin
    let imt = Math.ceil(poin * impuesto)
    limit += imt
    if (limit < 1) throw '🐯 Minimum is *1 ⭐ Star*.'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'You don't have enough *⭐ Stars* to give.'
    users[m.sender].limit -= limit
    users[who].limit += poin
    
    await m.reply(`*${-poin}* ⭐ Stars 
Impuesto 2% : *${-imt}* ⭐ Stars
Total gastado: *${-limit}* ⭐ Stars`)
    conn.fakeReply(m.chat, `*+${poin}* *⭐ Stars.*`, who, m.text)
}
handler.help = ['darstars *@user <quantity>*']
handler.tags = ['rpg']
handler.command = ['darcoins', 'darstars']
handler.register = true 

export default handler
