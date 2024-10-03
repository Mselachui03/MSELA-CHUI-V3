let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ LOVE METER ❤️❤️*
*The love of ${text} It's for you* *${Math.floor(Math.random() * 100)}%* *by one 100%*
*You should ask him/her to be your girlfriend/boyfriend ?*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love *@user*']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler
