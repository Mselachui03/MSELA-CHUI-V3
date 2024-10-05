let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let pp = 'https://telegra.ph/file/5ab1ca8bf65c1ddb36c20.mp4'
await conn.sendMessage(m.chat, { video: { url: pp }, gifPlayback: true, caption: '*Goodbye everyone, the Bot says goodbye! (≧ω≦)ゞ*', mentions: [m.sender] }, { quoted: estilo })
await conn.groupLeave(id)}
handler.help = ['salir']
handler.tags = ['owner']
handler.command = /^(salir|out|leavegc|leave|left)$/i
handler.group = true
handler.rowner = true

export default handler
