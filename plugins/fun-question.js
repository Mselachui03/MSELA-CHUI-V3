let handler = async (m, { command, text }) => m.reply(`
*⁉️ QUESTION ⁉️*
  
*ASK:* ${text}
*ANSWER:* ${['Yes, maybe yes',''Possibly','Probably not'','No','Imposible'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['question *<text>*']
handler.tags = ['fun']
handler.command = /^question|questions|apakah$/i
export default handler
