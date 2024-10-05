
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {
	
	if (!text) return m.reply(`🐯 Enter the Group link.`)
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) return m.reply('🐯 Invalid link.')
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`🐯 I successfully joined the Group *${res}${expired ? `* During *${expired}* days.` : ''}`)
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
    let pp = 'https://telegra.ph/file/4fa3f65b6698517cd8dcf.mp4'
   await conn.sendMessage(res, { video: { url: pp }, gifPlayback: true, caption: 'The best bot in all of WhatsApp has arrived.', mentions: [m.sender] }, { quoted: estilo })
}
handler.help = ['join *<link> <days>*']
handler.tags = ['owner']

handler.command = ['join', 'to enter'] 
handler.owner = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))
