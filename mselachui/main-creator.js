let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;mselachui;;\nFN:mselachui⁩\nORG:mselachui\nTITLE:\nitem1.TEL;waid=260774358600:260774358600\nitem1.X-ABLabel:mselachui\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:mselachui\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'MSELACHUI03', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
