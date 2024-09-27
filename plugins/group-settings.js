let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = {
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)return conn.reply(`🐯 Choose an option.\n\n*${usedPrefix + command}* open\n${usedPrefix + command}* close`, m, rcanal)
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *open/close*']
handler.tags = ['group']
handler.command = ['group', 'group'] 
handler.admin = true
handler.botAdmin = true

export default handler
