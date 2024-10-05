let handler = async(m, { conn }) => {
let revoke = await conn.groupRevokeInvite(m.chat)
await conn.reply(m.chat, `🐯 The group link was successfully restored.\n*-* New Link: ${'https://chat.whatsapp.com/' + revoke}`, m)}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = ['revoke', 'resetlink', 'anularlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
