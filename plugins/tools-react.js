let { proto } = (await import('@whiskeysockets/baileys')).default

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
  if (!args[0]) return conn.reply(m.chat, `🐯 Reply to a message and place the emoji next to the command.`, m, rcanal)
  let q = m.quoted ? await m.getQuotedObj() : m
 conn.sendMessage(m.chat, { react: { text: args[0], key: q.key }}, { quoted: q })
}
handler.help = ['react *<emoji>*']
handler.tags = ['tools']
handler.command = ['react', 'react', 'reaction'] 
handler.register = true 

export default handler
