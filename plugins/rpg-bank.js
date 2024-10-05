

let handler = async (m, {conn, usedPrefix}) => {
   let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
   if (who == conn.user.jid) return m.react('✖️')
   if (!(who in global.db.data.users)) return m.reply(`*The user is not in my database*`)
   let user = global.db.data.users[who]
   await m.reply(`${who == m.sender ? `Tienes *${user.bank} ⭐ Stars* in the Bank` : `The user @${who.split('@')[0]} tiene *${user.bank} ⭐ Stars* in the Bank`}`, null, { mentions: [who] })
}

handler.help = ['bank']
handler.tags = ['rpg']
handler.command = ['bank', 'banco'] 
handler.register = true 
export default handler 
