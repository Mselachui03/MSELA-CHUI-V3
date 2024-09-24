import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args || !args[0]) return conn.reply(m.chat, '🐯 Enter a TikTok video link next to the command.\n\n`Example:`\n' + `> *${usedPrefix + command}* https://vm.tiktok.com/ZMrFCX5jf/`, m, rcanal)
    if (!args[0].match(/tiktok/gi)) return conn.reply(m.chat, `Check that the link is from TikTok`, m, rcanal).then(_ => m.react('✖️'))
  await m.react('🕓')
try {
let { title, author, duration, views, likes, comment, share, published, downloads, dl_url } = await Starlights.tiktokdl(args[0])
let txt = '`乂  T I K T O K  -  D O W N L O A D`\n\n'
    txt += `	✩  *Title* : ${title}\n`
    txt += `	✩  *Author* : ${author}\n`
    txt += `	✩  *Duration* : ${duration} segundos\n`
    txt += `	✩  *Views* : ${views}\n`
    txt += `	✩  *Likes* : ${likes}\n`
    txt += `	✩  *Comments* : ${comment}\n`
    txt += `	✩  *shared* : ${share}\n`
    txt += `	✩  *Published* : ${published}\n`
    txt += `	✩  *Downloads* : ${downloads}\n\n`
    txt += `> 🐯 *${textbot}*`
await conn.sendFile(m.chat, dl_url, 'tiktok.mp4', txt, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['tiktok *<url tt>*']
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.register = true

export default handler
