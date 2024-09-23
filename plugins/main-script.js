import moment from 'moment-timezone'
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let res = await fetch('https://api.github.com/repos/Mselachui03/MSELA-CHUI-V3')
let json = await res.json()
try {
let txt = `*乂  S C R I P T  -  M A I N*\n\n`
    txt += `	✩   *Name* : ${json.name}\n`
    txt += `	✩   *Visitors* : ${json.watchers_count}\n`
    txt += `	✩   *weight* : ${(json.size / 1024).toFixed(2)} MB\n`
    txt += `	✩   *Updated* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
    txt += `	✩   *Url* : ${json.html_url}\n`
    txt += `	✩   *Forks* : ${json.forks_count}\n`
    txt += `	✩   *Stars* : ${json.stargazers_count}\n\n`
    txt += `> 🐯 *${textbot}*`
let img = await (await fetch(`https://files.catbox.moe/0zt0b2.jpg`)).buffer()

await conn.sendAi(m.chat, botname, textbot, txt, img, img, canal, m)
} catch {
await m.react('✖️')
}}
handler.help = ['script']
handler.tags = ['main']
handler.command = ['script', 'sc', 'repo']
handler.register = true 
export default handler
