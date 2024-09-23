import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) return m.reply(`🐯 Enter your serial number next to the command.`)
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) return m.reply('🐯 Incorrect serial number')
  user.registered = false
  m.reply(`🐯 Record deleted.`)
}
handler.help = ['unreg'] 
handler.tags = ['rg']

handler.command = ['unreg'] 
handler.register = true

export default handler
