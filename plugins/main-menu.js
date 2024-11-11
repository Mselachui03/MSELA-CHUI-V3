import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': 'INFO',
  'search': 'SEARCH',
  'game': 'GAME',
  'serbot': 'SUB BOTS',
  'rpg': 'RPG',
  'rg': 'REGISTRO',
  'sticker': 'STICKER',
  'img': 'IMAGE',
  'group': 'GROUPS',
//  'logo': 'MAKER',
  'nable': 'ON / OFF', 
  'premium': 'PREMIUM',
  'downloader': 'DOWNLOAD',
  'tools': 'TOOLS',
  'fun': 'FUN',
  'nsfw': 'NSFW', 
  'cmd': 'DATABASE',
  'owner': 'OWNER', 
  'audio': 'AUDIOS', 
  'advanced': 'ADVANCED',
}

const defaultMenu = {
  before: `
*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

“ Hello *%name* Am *MSELA-CHUI-V3*, %greeting ”

╭────═[ *I N F O  -  B O T* ]═─────⋆
│╭───────────────···
┴│✯ *🍬 Mode* : Public
✩│✯ *📚 Baileys* : Multi Device
✩│✯ *⏱ Time active* : %muptime
┬│✯ *👤 Users* : %totalreg
│╰────────────────···
╰───────────═┅═──────────
%readmore
╭────═[ *I N F O  -  U S E R* ]═─────⋆
│╭───────────────···
┴│✯ *🍭 Name* : %name
✩│✯ *⭐ Stars* : %limit
✩│✯ *📈 Level* : %level
┬│✯ *💫 XP* : %totalexp
│╰────────────────···
╰───────────═┅═──────────
%readmore
*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

\t\t\t*L I S T  -  M E N U*
`.trimStart(),
  header: '╭───═[ `MENU メ %category` ]═────⋆\n│╭───────────────···',
  body: '✩│%cmd %islimit %isPremium\n',
  footer: '│╰────────────────···\n╰───────────═┅═──────────\n',
  after: `> 🐯 MSELA-CHUI-V3`,
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : ``) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '◜🐯◞' : '')
                .replace(/%isPremium/g, menu.premium ? '◜🪪◞' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
      wasp: '@0',
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      version: _package.version,
      npmdesc: _package.description,
      npmmain: _package.main,
      author: _package.author.name,
      license: _package.license,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      greeting, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    let pp = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp2 = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp3 = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp4 = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp5 = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp6 = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp7 = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp8 = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp9 = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp10 = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp11 = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp12 = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp13 = 'https://d.uguu.se/KhOcSQmA.mp4'
    let pp14 = 'https://tinyurl.com/ymlqb6ml'
    let pp15 = 'https://tinyurl.com/ykv7g4zy'
    let img = await (await fetch(`https://files.catbox.moe/0zt0b2.jpg`)).buffer()
    await m.react('🐯')

    const musicClips = [
      'https://pomf2.lain.la/f/kaapfv1n.jpg',
      'https://pomf2.lain.la/f/kaapfv1n.jpg',
      'https://pomf2.lain.la/f/kaapfv1n.jpg',
      // Add more music URLs as needed
    ];

    // Select a random music clip
    const randomMusicClip = musicClips[Math.floor(Math.random() * musicClips.length)];

   // await conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12, pp13, pp14, pp15].getRandom() }, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, { quoted: estilo })
    await conn.sendFile(m.chat, img, 'thumbnail.jpg', text.trim(), m, null, rcanal)
    await conn.sendFile(m.chat, randomMusicClip, 'music.jpg', m)
   //await conn.sendAi(m.chat, botname, textbot, text.trim(), img, img, canal, estilo)

  } catch (e) {
    conn.reply(m.chat, '❎ Sorry, the menu has an error.', m)
    throw e
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú'] 
handler.register = true 
export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Well sleep 🌙'; break;
  case 1: hour = 'A nice midnight 💤'; break;
  case 2: hour = ' A nice morning 🦉'; break;
  case 3: hour = 'A nice morning ✨'; break;
  case 4: hour = 'A nice morning 💫'; break;
  case 5: hour = 'A nice morning 🌅'; break;
  case 6: hour = 'A nice morning 🌄'; break;
  case 7: hour = 'A nice morning 🌅'; break;
  case 8: hour = 'A nice Morning 💫'; break;
  case 9: hour = 'A nice morning ✨'; break;
  case 10: hour = 'A nice morning 🌞'; break;
  case 11: hour = 'A nice morning 🌨'; break;
  case 12: hour = 'A nice morning ❄'; break;
  case 13: hour = 'A nice morning 🌤'; break;
  case 14: hour = 'A nice afternoon 🌇'; break;
  case 15: hour = 'A nice afternoon 🥀'; break;
  case 16: hour = 'A nice afternoon 🌹'; break;
  case 17: hour = 'A nice afternoon 🌆'; break;
  case 18: hour = 'A nice night  🌙'; break;
  case 19: hour = 'A nice night 🌃'; break;
  case 20: hour = 'A nice night 🌌'; break;
  case 21: hour = 'A nice night 🌃'; break;
  case 22: hour = 'A nice night 🌙'; break;
  case 23: hour = 'A nice night 🌃'; break;
}
  var greeting = "I hope you have " + hour;