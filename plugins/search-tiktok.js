import axios from 'axios'
import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  if (!text) return conn.reply(m.chat, `🐯 Enter the name of the video you want to search for on TikTok.\n\nExample:\n> *${usedPrefix + command}* MSELA-CHUI-V3 Edit`, m, rcanal)
  
  await m.react('🕓')
  let img = await (await axios.get('https://i.ibb.co/kyTcqt9/file.jpg', { responseType: 'arraybuffer' })).data

  try {
    let data = await Starlights.tiktokSearch(text)

    if (data && data.length > 0) {
      let txt = `*乂  T I K T O K  -  S E A R C H*`
      for (let i = 0; i < (50 <= data.length ? 50 : data.length); i++) {
        let video = data[i]
        txt += `\n\n`
        txt += `  *» Dream* : ${i + 1}\n`
        txt += `  *» Title* : ${video.title}\n`
        txt += `  *» Author* : ${video.author}\n`
        txt += `  *» Url* : ${video.url}`
      }
      await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
      await m.react('✅')
    } else {
      await conn.react('✖️')
    }
  } catch {
    await m.react('✖️')
  }
}
handler.tags = ['search']
handler.help = ['tiktoksearch *<search>*']
handler.command = ['tiktoksearch', 'tiktoks']
handler.register = true

export default handler
