import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!global.db.data.chats[m.chat].nsfw) return conn.reply(m.chat, `🐯 The group does not support content *Nsfw.*\n\n> To activate it an *Administrator* must use the command */nsfw on*`, m, rcanal)
if (!args[0]) return conn.reply(m.chat, `🐯 Enter the link of the Xnxx video*`, m, rcanal)

let user = global.db.data.users[m.sender]
await m.react('🕓')
try {
let { title, dl_url } = await Starlights.xnxxdl(args[0])
await conn.sendFile(m.chat, dl_url, title + '.mp4', `*» Title* : ${title}`, m, false, { asDocument: user.useDocument })
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.tags = ['nsfw', 'downloader']
handler.help = ['xnxxdl *<url>*']
handler.command = ['xnxxdl']
//handler.limit = 200
handler.group = true 
handler.register = true 
export default handler
