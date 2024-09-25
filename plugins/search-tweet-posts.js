import axios from 'axios'

let handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '🐯 Enter the text of the post you want to search for.', m, rcanal)
await m.react('🕓')
try {
let json = await axios.get(`https://apis-starlights-team.koyeb.app/starlight/Twitter-Posts?text=${text}`, { headers: { 'Content-Type': 'application/json' }})
let result = json.data.result
if (!result || !result.length) return conn.reply(m.chat, `No results found.`, m, rcanal)
        
let txt = `*乂  T W I T T E R  -  S E A R C H*`
    result.forEach(({ user, post, profile, user_link }, index) => {
    txt += `\n\n`
    txt += `  *» Dream* : ${index + 1}\n`
    txt += `  *» User* : ${user}\n`
    txt += `  *» Publication* : ${post}\n`
    txt += `  *» Profile* : ${profile}\n`
    txt += `  *» Link* : ${user_link}`
    })
await conn.reply(m.chat, txt, m, rcanal)
await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['tweetposts *<search>*']
handler.tags = ['search']
handler.command = ['tweetposts']
handler.register = true 

export default handler
