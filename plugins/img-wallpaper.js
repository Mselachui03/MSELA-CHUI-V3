import { googleImage, pinterest } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `🐯 Enter some text next to the command.\n\n*Example:*\n*${usedPrefix + command}* MSELA-CHUI-V3`, m, )
await m.react('🕓')
try {
let res = await (await googleImage('wallpaper' + text)).getRandom()
await conn.sendFile(m.chat, res, 'thumbnail.jpg', `*» Wallpaper* : ${text ? text.capitalize() : false}`, m, null, r)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['wallpaper *<search>*']
handler.tags = ['img']
handler.command = ['wallpaper', 'wallpapers', 'wp']
handler.register = true
//handler.limit = 1
export default handler
