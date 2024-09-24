import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return conn.reply(m.chat, '🐯 Enter the TikTok username you want to search for.\n\n`Example:`\n' + `> *${usedPrefix + command}* yuuzu_u_`, m, rcanal)
await m.react('🕓')
  try {
    let data = await Starlights.tiktokuser(text)

    if (data && data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        let video = data[i]

        let txt = '`乂  T I K T O K  -  D O W N L O A D`\n\n'
            txt += `    ✩  *Dream* : ${video.nro}\n`
            txt += `    ✩  *Title* : ${video.title}\n`
            txt += `    ✩  *Author* : ${video.author}\n`
            txt += `    ✩  *Duration* : ${video.duration} segundos\n`
            txt += `    ✩  *Views* : ${video.views}\n`
            txt += `    ✩  *Likes* : ${video.likes}\n`
            txt += `    ✩  *Comments* : ${video.comments_count}\n`
            txt += `    ✩  *shared* : ${video.share_count}\n`
            txt += `    ✩  *Published* : ${video.published}\n`
            txt += `    ✩  *Downloads* : ${video.download_count}\n\n`
            txt += `> 🐯 ${textbot}`

        await conn.sendFile(m.chat, video.dl_url, `video_${i + 1}.mp4`, txt, m, null, rcanal)
      }
      await m.react('✅')
    } else {
      await m.react('✖️')
    }
  } catch {
    await m.react('✖️')
  }
}
handler.tags = ['downloader']
handler.help = ['tiktokuser *<user>*']
handler.command = ['tiktokuser', 'tiktokus']
handler.register = true

export default handler
