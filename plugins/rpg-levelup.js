import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
    let img = await (await fetch(`https://telegra.ph/file/b97148e2154508f63d909.jpg`)).buffer()
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        let txt = ` –  *L E V E L U P  -  U S E R*\n\n`
            txt += `┌  ✩  *Name* : ${name}\n`
            txt += `│  ✩  *Level* : ${user.level}\n`
            txt += `└  ✩  *XP* : ${user.exp - min}/${xp}\n\n`
            txt += `You are missing *${max - user.exp}* of *💫 XP* to level up`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
       let txt = ` –  *L E V E L U P  -  U S E R*\n\n`
           txt += `┌  ✩  *Name* : ${conn.getName(m.sender)}\n`
           txt += `│  ✩  *Level Anterior* : ${before}\n`
           txt += `└  ✩  *Current Level* : ${user.level}\n\n`
           txt += `🐯 The more you interact with *MSELA-CHUI-V3*, the higher your Level will be.
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
        }
    }
handler.help = ['levelup']
handler.tags = ['rpg']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 
handler.register = true 
export default handler
