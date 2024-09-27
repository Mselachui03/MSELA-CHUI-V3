import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://files.catbox.moe/0zt0b2.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `*Hello!, I invite you to join the official del Bot groups to coexist with the community :D**

1- https://whatsapp.com/channel/0029VakhqAaLtOjBJOL9Wn1q
*✰* ${group}

*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

➠ Link canceled? come in here! 

Channel :
*✰* ${channel}

> 🐯 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['groups']
handler.tags = ['main']
handler.command = /^(groups)$/i
export default handler
