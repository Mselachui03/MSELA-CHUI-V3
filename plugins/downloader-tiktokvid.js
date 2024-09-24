import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  if (!text) return conn.reply(m.chat, '🐯 Enter some text next to the command.\n\n`Example:`\n' + `> *${usedPrefix + command}* MSELA-CHUI-V3 Edit`, m, rcanal)
  await m.react('🕓')
  try {
    let { title, author, duration, views, likes, comments_count, share_count, download_count, published, dl_url } = await Starlights.tiktokvid(text)

      let txt = '`乂  T I K T O K  -  D O W N L O A D`\n\n'
          txt += `    ✩  *Title* : ${title}\n`
          txt += `    ✩  *Author* : ${author}\n`
          txt += `    ✩  *Duration* : ${duration} segundos\n`
          txt += `    ✩  *Views* : ${views}\n`
          txt += `    ✩  *Likes* : ${likes}\n`
          txt += `    ✩  *Comments* : ${comments_count}\n`
          txt += `    ✩  *shared* : ${share_count}\n`
          txt += `    ✩  *Published* : ${published}\n`
          txt += `    ✩  *Downloads* : ${download_count}\n\n`
          txt += `> 🐯 ${textbot}`

      await conn.sendFile(m.chat, dl_url, `thumbnail.mp4`, txt, m)
      await m.react('✅')

  } catch {
    await m.react('✖️')
  }
}
handler.help = ['tiktokvid *<search>*']
handler.tags = ['downloader']
handler.command = ['ttvid', 'tiktokvid']
handler.register = true

export default handler
