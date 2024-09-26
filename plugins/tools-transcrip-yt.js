import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '🐯 *Enter the url of the YouTube song*', m, rcanal)
await m.react('🕓')
try {
let app = await fetch(`https://apis-starlights-team.koyeb.app/starlight/transcribir-youtube?url=${text}`, { headers: { 'Content-Type': 'application/json' }})
let res = await app.json()
if (!res.result) throw m.reply('🚫 ///Error/// 🚫')
await conn.reply(m.chat, res.result, m, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['transcripyt *<url>*']
handler.tags = ['tools']
handler.command = /^(transcripyt)$/i
export default handler
