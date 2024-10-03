
let handler = async (m, { conn, command, text }) => {
if (!text) return m.reply(`*Enter the @ or the name of the person you want to know if you can ${command.replace('how', '')}*`)
try {
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
m.reply(`🤤👅🥵 *𝐀𝐂𝐀𝐁𝐀𝐒 𝐅𝐎𝐋𝐋𝐀𝐑𝐓𝐄𝐋@!*🥵👅🤤

*𝙏𝙚 𝙖𝙘𝙖𝙗𝙚𝙨 𝙛𝙤𝙡𝙡𝙖𝙧 𝙥𝙚𝙧𝙚𝙫𝙞𝙤𝙪𝙨 𝙖𝙥𝙥𝙤𝙞𝙣𝙩𝙢𝙚𝙣𝙩 𝙛𝙤𝙧 𝙥𝙧𝙚𝙫𝙞𝙤𝙪𝙨 𝙖𝙥𝙥𝙤𝙞𝙣𝙩𝙢𝙚𝙣𝙩 𝙖𝙥𝙥𝙤𝙞�* *${text}* ⁩ *𝙖 𝟰 𝙥𝙖𝙩𝙖𝙨 𝙢𝙞𝙚𝙣𝙩𝙧𝙚𝙨 𝙘𝙖𝙪𝙨𝙚 𝙪𝙣 𝙢𝙖𝙡𝙙𝙞𝙩𝙖𝙣𝙩 𝙥𝙚𝙧𝙧𝙖𝙞𝙣𝙜 𝙜𝙚𝙖𝙧𝙞𝙣𝙜 𝙘𝙖𝙪𝙨𝙚 𝙪𝙣 𝙨𝙪𝙛𝙛𝙚𝙧𝙞𝙣𝙜 𝙥𝙚𝙧𝙧𝙖𝙞𝙣𝙜 𝙛𝙤𝙧 𝙮𝙤𝙪. "𝐀𝐚𝐚𝐡𝐡 𝐚𝐧𝐝 𝐨𝐮𝐫 𝐟𝐨𝐫 𝐨𝐮𝐫 𝐛𝐲.." And it is important to remember that we are a team that strives to achieve success. 𝙘𝙪𝙚𝙧𝙥𝙚 𝙢𝙖𝙡𝙡𝙙𝙞𝙩𝙖 𝙯𝙤𝙧𝙧𝙖!*

*${text}*
🤤🥵 *¡𝐘𝐀 𝐓𝐄 𝐇𝐀𝐍 𝐅𝐎𝐋𝐋𝐀𝐃𝐎!* 🥵🤤`, null, { mentions: [user] })
} catch (err) {
}}
handler.help = ['follar']
handler.tags = ['fun']
handler.command = /^(Follar|violar)/i

handler.register = true
export default handler
