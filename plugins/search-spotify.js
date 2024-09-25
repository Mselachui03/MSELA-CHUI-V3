import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!text) return conn.reply(m.chat, '🐯 Enter the title of a YouTube video or song.\n\n`Example:`\n' + `> *${usedPrefix + command}* Gemini Aaliyah - If Only`, m, rcanal)
  await m.react('🕓')
  try {
    let res = await Starlights.spotifySearch(text)
    let img = await (await fetch(`${res[0].thumbnail}`)).buffer()
    let txt = '`乂  S P O T I F Y  -  S E A R C H`'
    for (let i = 0; i < res.length; i++) {
      txt += `\n\n`
      txt += `  *» Dream* : ${i + 1}\n`
      txt += `  *» title* : ${res[i].title}\n`
      txt += `  *» Artist* : ${res[i].artist}\n`
      txt += `  *» Url* : ${res[i].url}`
    }
    
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['spotifysearch *<search>*']
handler.tags = ['search']
handler.command = ['spotifysearch']
handler.register = true

export default handler
