
import { canLevelUp, xpRange } from '../lib/levelling.js'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let bio = await conn.fetchStatus(who).catch(_ => 'undefined')
  let biot = bio.status?.toString() || 'Sin Info'
  let user = global.db.data.users[who]
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/gzln4x.jpg')
  let { exp, limit, name, registered, regTime, age, level } = global.db.data.users[who]
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let prem = global.prems.includes(who.split`@`[0])
  let sn = createHash('md5').update(who).digest('hex')
  let api = await axios.get(`https://deliriusapi-official.vercel.app/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
  let userNationalityData = api.data.result
  let userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'A stranger'
  let img = await (await fetch(`${pp}`)).buffer()
  let txt = ` –  *P R O F I L E  -  U S E R*\n\n`
      txt += `┌  ✩  *Name* : ${name}\n`
      txt += `│  ✩  *Age* : ${registered ? `${age} years` : '×'}\n`
      txt += `│  ✩  *Number* : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}\n`
      txt += `│  ✩  *Nationality* : ${userNationality}\n`
      txt += `│  ✩  *Link* : wa.me/${who.split`@`[0]}\n`
      txt += `│  ✩  *Limit* : ${limit}\n`
      txt += `│  ✩  *level* : ${level}\n`
      txt += `│  ✩  *XP* : Total ${exp} (${user.exp - min}/${xp})\n`
      txt += `│  ✩  *Premium* : ${prem ? 'Si' : 'No'}\n`
      txt += `└  ✩  *Registered* : ${registered ? 'Si': 'No'}`
  let mentionedJid = [who]
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
}
handler.help = ['profile', 'profile *@user*']
handler.tags = ['rg']
handler.command = /^(perfil|profile)$/i
handler.register = true

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function formatDate(n, locale = 'es-US') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function formatHour(n, locale = 'en-US') {
  let d = new Date(n)
  return d.toLocaleString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  })
}
