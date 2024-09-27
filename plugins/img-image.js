import Starlights from "@StarlightsTeam/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('🐯 Enter the name of the image you are looking for.\n\n`Example:`\n' + `> *${usedPrefix + command}* Ai Hoshino Icons`)
const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito','pussy', 'hentai', 'pene', 'coño', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cogiendo', 'cepesito', 'hot', 'buceta', 'xxx', 'rule', 'r u l e']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('Stop looking for that you fucking sick piece of shit, that's why you don't have a girlfriend.').then(_ => m.react('✖️'))
await m.react('🕓')
try {
let { dl_url } = await Starlights.GoogleImage(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*» Result* : ${text}`, m, null, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['image *<search>*']
handler.tags = ['img']
handler.command = ['img', 'img', 'image']
handler.register = true 
//handler.limit = 1
export default handler
