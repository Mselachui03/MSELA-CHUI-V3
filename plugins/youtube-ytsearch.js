import Starlights from "@MSELA-CHUI-V3Team/Scraper"

let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) return conn.reply(m.chat, '🐯 Enter the title of a YouTube video or song.\n\n`Example:`\n' + `> *${usedPrefix + command}* Gemini Aaliyah - If Only`, m, rcanal)
await m.react('🕓')
    try {
    let results = await Starlights.ytsearch(text)
    if (!results || !results.length) return conn.reply(m.chat, `No results found.`, m, rcanal)
    let img = await (await fetch(`${results[0].thumbnail}`)).buffer()
    let txt = '`乂  Y O U T U B E  -  S E A R C H`'
    results.forEach((video, index) => {
        txt += `\n\n`
        txt += `	✩  *Dream* : ${index + 1}\n`
        txt += `	✩  *title* : ${video.title}\n`
        txt += `	✩  *Duration* : ${video.duration}\n`
        txt += `	✩  *Published* : ${video.published}\n`
        txt += `	✩  *Author* : ${video.author}\n`
        txt += `	✩  *Url* : ${video.url}`
    })
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['ytsearch *<search>*']
handler.tags = ['search']
handler.command = ['ytsearch', 'yts']
handler.register = true 
export default handler
