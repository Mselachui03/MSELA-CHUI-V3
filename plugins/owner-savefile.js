import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) return m.reply(`🐯 Enter the Path and File name along with the command.`)
try {
if (!m.quoted.text) return m.reply(`🐯 Reply to message.`)
let path = `${text}`
await fs.writeFileSync(path, m.quoted.text)
m.reply(`🐯 Saved in *${path}*.`)
} catch {
await m.reply(`🐯 Reply to message.`)
}}
handler.command = ["savefile", "savejs", "savecmd"]
handler.tags = ['owner']
handler.help = ['savefile']
handler.rowner = true
export default handler
