import Starlights from '@StarlightsTeam/Scraper'
import fetch from 'node-fetch' 
let limit = 100

let handler = async (m, { conn: star, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!args[0].match(/youtu/gi)) return star.reply(m.chat, '🐯 Enter the YouTube video link along with the command.\n\n`Example:`\n' + `> *${usedPrefix + command}* https://youtu.be/QSvaCSt8ixs`, m, rcanal)
await m.react('🕓')
try {
let { title, size, quality, thumbnail, dl_url } = await Starlights.ytmp3(args[0])

let img = await (await fetch(`${thumbnail}`)).buffer()
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `The file weighs more than ${limit} MB, Download was cancelled.`, m, rcanal).then(_ => m.react('✖️'))
	let txt = '`乂  Y O U T U B E  -  M P 3`\n\n'
       txt += `	✩   *title* : ${title}\n`
       txt += `	✩   *Quality* : ${quality}\n`
       txt += `	✩   *Size* : ${size}\n\n`
       txt += `> *- MSELA-CHUI-V3🐯↻ Audio is being sent, please wait a moment, I'm slow. . .*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await star.sendMessage(m.chat, { audio: { url: dl_url }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['ytmp3 *<link yt>*']
handler.tags = ['downloader']
handler.command = ['ytmp3', 'yta', 'fgmp3']
//handler.limit = 1
handler.register = true 

export default handler
