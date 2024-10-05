import Starlights from "@StarlightsTeam/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].nsfw) return conn.reply(m.chat, `🐯 The group does not support content *Nsfw.*\n\n> To activate it an *Administrator* must use the command */nsfw on*`, m, rcachannel)
if (!text) return m.reply('🐯 Enter the name of the image you are looking for.')
await m.react('🕓')
try {
let { dl_url } = await Starlights.rule34(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*» Result* : ${text}`, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['rule34 *<search>*']
handler.tags = ['nsfw']
handler.command = ['rule34', 'r34']
handler.register = true 
//handler.limit = 20
handler.group = true 
export default handler
