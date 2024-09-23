let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    await conn.reply(m.chat, `🐯 Now you are absent until you send a new message again, when they try to tag you the user will be notified of your absence with the reason.\n\n*${conn.getName(m.sender)}* This AFK, Reason *$ {text ? ': ' + text : ''}*`, m, rcanal)
}
handler.help = ['afk *<reason>*']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
