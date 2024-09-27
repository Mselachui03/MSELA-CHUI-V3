let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
	text = text.split(`|`)
	if (!text || text.length == 1) return conn.reply(m.chat, `🐯 Enter the question and options.\n\n*Example:*\n*${usedPrefix + command}* Ai Hoshino es el mejor bot de WhatsApp?|si|no`, m, rcanal)
	if (text.length > 1 && text.length < 3) return m.reply(`Minimum *2* options.`)
	if (text.length > 13) return m.reply(`Maximum *12* options`)
	let array = []
	text.slice(1).forEach(function(i) { array.push(i) })
	await conn.sendPoll(m.chat, text[0], array)
}
handler.tags = ['group']
handler.help = ['survey *<question|options>*']
handler.command = ['survey', 'poll']
handler.group = true
handler.register = true 

export default handler
