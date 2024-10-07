import fetch from "node-fetch"

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let lang, text
    if (args.length >= 2) {
        lang = args[0] ? args[0] : "id", text = args.slice(1).join(" ")
    } else if (m.quoted && m.quoted.text) {
        lang = args[0] ? args[0] : "id", text = m.quoted.text
    } else return conn.reply(m.chat, `*🐯 Example: ${usedPrefix + command} is Hello World*`, m, rcanal)
    try {
    const prompt = encodeURIComponent(text)
        let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + lang + "&dt=t&q=" + prompt)
        let res = await reis.json()
        let lister = Object.keys(await langList())
        let supp = `Error: Language *${lang}* no admitted`
        if (!lister.includes(lang)) return m.reply('The language you entered is not *valid*, please try a *valid* language\n\n❄️ List of languages ❄️\n*https://cloud.google.com/translate/docs/languages*')
await m.react('🕓')
        let Detect = (res[2].toUpperCase() ? res[2].toUpperCase() : "US")
        let ToLang = (lang.toUpperCase())
        let caption = `*» Resultado* : ${res[0][0][0]}`
        await conn.reply(m.chat, caption, m, rcanal)
        await m.react('✅')
    } catch (e) {
        await m.react('✖️')
    }
}
handler.help = ['trad *<len> <text>>*']
handler.tags = ['tools']
handler.command = /^(translate|tr|trt)$/i
handler.star = 1
handler.register = true 
export default handler

async function langList() {
    let data = await fetch("https://translate.google.com/translate_a/l?client=webapp&sl=auto&tl=en&v=1.0&hl=en&pv=1&tk=&source=bh&ssel=0&tsel=0&kc=1&tk=626515.626515&q=")
        .then((response) => response.json())
    return data.tl;
}
