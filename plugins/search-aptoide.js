import Starlights from '@StarlightsTeam/Scraper'

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!text) return conn.reply(m.chat, '[ 🐯 ] Enter the name of the app you want to search for in *Aptoide* along with the command.\n\n`» Example :`\n' + `> *${usedPrefix + command}* WhatsApp`, m, rcanal)
await m.react('🕓')
  try {
    let res = await Starlights.aptoideSearch(text)
    let img = `https://telegra.ph/file/e7eae20d14bf755fc4ebb.jpg`
    let txt = `*乂  A P T O I D E  -  S E A R C H*`
    
    for (let i = 0; i < res.length; i++) {
      txt += `\n\n`
      txt += `  *» Dream* : ${res[i].nro}\n`
      txt += `  *» Name* : ${res[i].name}\n`
      txt += `  *» ID* : ${res[i].id}`
    }
    
    await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
    await m.react('✅')
  } catch {
    await m.react('✖️')
  }
}

handler.help = ['aptoidesearch *<search>*']
handler.tags = ['search']
handler.command = ['aptoidesearch']
handler.register = true

export default handler
