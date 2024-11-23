import { createHash } from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`🐯 You are already registered.\n\n*¿Want to register again??*\n\nUse this command to delete your record.\n*${usedPrefix}unreg* <Serial number>`)
  if (!Reg.test(text)) return m.reply(`🐯 Incorrect format.\n\nUsing the command: *${usedPrefix + command} name.age*\nExample : *${usedPrefix + command} ${name2}.18*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply('🐯 Name cannot be empty.')
  if (!age) return m.reply('🐯 Age cannot be empty.')
  if (name.length >= 100) return m.reply('🐯 The name is too long.' )
  age = parseInt(age)
  if (age > 100) return m.reply('👴🏻 Wow grandpa wants to play bot.')
  if (age < 5) return m.reply('🚼  there is a baby grandfather jsjsj. ')
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let img = await (await fetch(`https://files.catbox.moe/gzln4x.jpg`)).buffer()
  let txt = ` –  *R E G I S T R O  -  U S E R*\n\n`
      txt += `┌  ✩  *Name* : ${name}\n`
      txt += `│  ✩  *Age* : ${age} years\n`
      txt += `│  ✩  *Serial number*\n`
      txt += `└  ✩  ${sn}`
await conn.sendAi(m.chat, botname, textbot, txt, img, img, canal, m)
await m.react('✅')
}
handler.help = ['reg'].map(v => v + ' *<name.age>*')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler
