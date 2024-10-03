let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) return m.reply(`🐯 Tag a person.`)
if (command == 'gay2') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *IS 🏳️‍🌈* *${(500).getRandom()}%* *GAY*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'lesbian') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *IS 🏳️‍🌈* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'straw') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *IS 😏💦* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'wanker') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *IS 😏💦* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'think') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MORE INFORMATION IN YOUR PRIVATE 🔥🥵 XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'out') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MORE INFORMATION IN YOUR PRIVATE 🔥🥵 XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}   
if (command == 'miss') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'lacks') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}     
if (command == 'flat') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🐁 EAT CHEESE 🧀*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'prostitute') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅, WHO WANTS YOUR SERVICES? XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'prostitute') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅, WHO WANTS YOUR SERVICES? XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}         
}
handler.help = ['gay2', 'lesbiana', 'straw', 'wanker', 'think', 'out', 'miss', 'lacks', 'flat', 'prostitute', 'prostitute'].map((v) => v + " *@user*")
handler.tags = ['fun']
handler.command = /^gay2|lesbiana|straw|wanker|think|out|miss|lacks|flat|prostitute|prostitute/i
export default handler
