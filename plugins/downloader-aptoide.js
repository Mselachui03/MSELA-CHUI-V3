import Starlights from "@StarlightsTeam/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `*• Enter the name of the app you want to download.*\n\nExample:\n*${usedPrefix + command}* WhatsApp`, m, rcanal)
await m.react('🕓')
try {
let { name, packname, update, size, thumbnail, dl_url } = await Starlights.aptoide(text)
if (size.includes('GB') || size.replace(' MB', '') > 300) { return await m.reply('The file weighs more than 300 MB, the download was cancelled.')}
let txt = `*乂  A P T O I D E  -  D O W N L O A D*\n\n`
    txt += `	✩   *Name* : ${name}\n`
    txt += `	✩   *Package* : ${packname}\n`
    txt += `	✩   *Update* : ${update}\n`
    txt += `	✩   *Weight* :  ${size}\n\n`
    txt += `*- ↻ The file is being sent, please wait a moment, I'm slow. . .*`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m, null, rcanal)
await conn.sendMessage(m.chat, {document: { url: dl_url }, mimetype: 'application/vnd.android.package-archive', fileName: name + '.apk', caption: null }, {quoted: m})
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['aptoide *<search>*']
handler.tags = ['downloader']
handler.command = ['aptoide', 'apk']
handler.register = true 
//handler.limit = 5
export default handler
