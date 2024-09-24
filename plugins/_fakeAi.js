import fetch from 'node-fetch';
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let pp = await conn.profilePictureUrl(m.sender, 'image')

    const anu = {
      "key": {
        "fromMe": false,
        "participant": "0@s.whatsapp.net",
        "remoteJid": "0@s.whatsapp.net"
      },
      "message": {
        "groupInviteMessage": {
          "groupJid": "120363318619346440@g.us",
          "inviteCode": "mememteeeekkeke",
          "groupName": "P",
          "caption": "Hello, I'm MSELA-CHUI-V3",
          "jpegThumbnail": await (await fetch(pp)).buffer()
        }
      }
    }
    
    conn.sendMessage(m.chat, { text: 'Hello,im MSELA-CHUI-V3, how can I help you?' }, { quoted: anu })
  } catch (error) {
    conn.sendMessage(m.chat, 'Hello,im MSELA-CHUI-V3, how can I help you?', 'conversation', { quoted: m })
  }
}

handler.customPrefix = /^(Ai)$/i
handler.command = new RegExp
export default handler
