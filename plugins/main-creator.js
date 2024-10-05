let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;mselachui;;\nFN:mselachui⁩\nORG:Mselachui\nTITLE:\nitem1.TEL;waid=260774358600:260769355624\nitem1.X-ABLabel:mselachui\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:mselachui\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'MSELACHUI', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler

