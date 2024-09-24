
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  case 'welcome':
    case 'wel':
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     
     case 'autoread':
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break

    case 'document':
    case 'document':
    isUser = true
    user.useDocument = isEnable
    break
 
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      
      case 'nsfw':
      case 'modohorny':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

     case 'antiarabes':
     case 'anti-blacks':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }}
       chat.onlyLatinos = isEnable  
       break
    default:
      if (!/[01]/.test(command)) return m.reply(`
*🐯 Enter an option to enable or disable*

*≡ List of options*
*Type :* welcome
*Description :* Dis/Activate the *Welcome* and *Farewell* for Groups
*Type :* nsfw 
*Description :* Disable/Enable *NSFW* commands for Groups

*Type :* antiarabes 
*Description :* Disable/Enable *AntiArabs* for Groups

*Type :* antilink 
*Description :* Disable/Enable *AntiLink* for Groups

*Type :* autoread 
*Description :* Disable/Enable *AutoRead* for the Bot

*Type :* document 
*Description :* Dis/Enables *Download In Documents* for the User

*• Example:*
*- ${usedPrefix + command}* welcome
`.trim())
      throw false
  }
  m.reply(`The function *${type}* with *${isEnable ? 'asset' : 'deactivated'}* ${isAll ? 'pear is bot' : isUser ? '' : 'for this chat'}`)
}

handler.help = ['enable', 'disable']
handler.tags = ['able']
handler.command = /^(enable|disable|on|off|1|0)$/i

export default handler
