let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) return m.reply(`Tag or mention someone`)
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) return m.reply(`Add the number of days the user will be *Premium*`)
    if (isNaN(txt)) return m.reply(`Only numbers!\n\*Example*\n${usedPrefix + command} @${m.sender.split`@`[0]} 7`)
    global.prems.push(`${who.split`@`[0]}`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
user.premium = true
    m.reply(`*» Name* : ${user.name}\n*» Time* :${txt} Days`)
}
handler.help = ['addprem *@user*']
handler.tags = ['owner']
handler.command = /^(addprem|addpremium)$/i

handler.group = true
handler.rowner = true

export default handler
