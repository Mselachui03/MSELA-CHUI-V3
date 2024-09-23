let handler = async (m, { conn, args, usedPrefix, command }) => {
    let chat = global.db.data.chats[m.chat] || {};
    if (args[0] === 'on') {
        if (chat.antiBot) return conn.reply(m.chat, 'AntiBot is now activated.', m, rcanal)
        chat.antiBot = true
        await conn.reply(m.chat, '🐯 AntiBot enabled for this group.', m, rcanal)
    } else if (args[0] === 'off') {
        if (!chat.antiBot) return conn.reply(m.chat, 'AntiBot is now disabled.', m, rcanal)
        chat.antiBot = false
        await conn.reply(m.chat, '🐯 AntiBot disabled for this group.', m, rcanal)
    } else {
        await conn.reply(m.chat, `*Configure AntiBot*. Type "on" to activate and "off" to deactivate.`, m, rcanal)
    }
}
handler.help = ['antibot *<on/off>*']
handler.tags = ['group']
handler.command = ['antibot']
handler.use = ['on/off']
handler.group = true
handler.admin = true

export default handler
