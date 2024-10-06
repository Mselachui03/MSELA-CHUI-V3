import Starlights from '@StarlightsTeam/Scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat,`*🐯 Enter your request*\n*🪼 Example of use:* ${usedPrefix + command} how to make a paper star`, m, rcanal)
await m.react('💬')
try {
let { msg } = await Starlights.openAi(text)
await conn.reply(m.chat, msg, m, rcanal)
} catch {
try {
let { result } = await Starlights.ChatGpt(text)
await conn.reply(m.chat, result, m, rcanal)
} catch {
try {
let { result } = await Starlights.ChatGptV2(text)
await conn.reply(m.chat, result, m, rcanal)
} catch {
try {
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/chatgpt?text=${text}`)
let json = await api.json()

if (json.result) {
await conn.reply(m.chat, json.result, m, rcanal)
} else {
await m.react('✖️')
}
} catch {
await m.react('✖️')
}}}}}

handler.help = ['ai *<petition>*']
handler.tags = ['tools']
handler.command = /^(chui|ai|ia|chatgpt|gpt)$/i
handler.register = true

export default handler
