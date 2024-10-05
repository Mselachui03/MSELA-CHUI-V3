import Starlights from "@StarlightsTeam/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('🐯 Enter the name of the image you are looking for.\n\n`Example:`\n' + `> *${usedPrefix + command}* MSELA-CHUI-V3 Icons`)
await m.react('🕓')
try {
let { dl_url } = await Starlights.pinterest(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*» Result* : ${text}`, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['pinterest *<search>*']
handler.tags = ['img']
handler.command = ['pinterest','img']
handler.register = true 
//handler.limit = 1
export default handler
