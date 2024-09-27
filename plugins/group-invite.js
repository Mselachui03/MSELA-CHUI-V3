let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `🐯 Enter the number you want to send a group invite to.\n\n*Example:*\n*${usedPrefix + command}* 5218261275256`, m , rcanal)
if (text.includes('+')) return conn.reply(`🐯 Enter the number all together without the *+*`, m, rcanal)
if (isNaN(text)) return conn.reply(m.chat, `*Enter only numbers plus your country code without spaces*`, m, rcachannel)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `🐯 *GROUP INVITATION*\n\nA user invited you to join this group \n\n${link}`, m, {mentions: [ m.sender]})
        m.reply(`An invitation link was sent to the user.`)
}
handler.help = ['invite *<521>*']
handler.tags = ['group']
handler.command = ['invite','inv'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
