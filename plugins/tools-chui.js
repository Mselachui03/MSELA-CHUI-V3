let handler = (m, { usedPrefix, command, text }) => {
    if (!text) return m.reply(`Example:\n${usedPrefix + command} 2003 01 25`)

    const date = new Date(text)
    if (date == '*Invalid date, try the following format YYYY MM DD* Example: *2005 07 07* ') throw date
    const d = new Date()
    const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
    const zodiac = getZodiac(birth[1], birth[2])
    const ageD = new Date(d - date)
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
    const cekusia = bulan === birth[1] && tanggal === birth[2] ? `${age} - Happy Birthday 🥳` : age

    const teks = `
Birthdate: : ${birth.join('-')}
Next birthday : ${birthday.join('-')}
Age : ${cekusia}
Signo zodical : ${zodiac}
`.trim()
    m.reply(teks)
}
handler.help = ['chui *2002 01 25*']
handler.tags = ['tools']
//handler.limit = 1
handler.register = true 
handler.command = /^chui[kc]$/i

export default handler

const zodiak = [
    ["Capricorn", new Date(1970, 0, 1)],
    ["Aquarium", new Date(1970, 0, 20)],
    ["Fish", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Taurus", new Date(1970, 3, 21)],
    ["Twins", new Date(1970, 4, 21)],
    ["Cancer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Leo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Scorpion", new Date(1970, 9, 23)],
    ["Sagitario", new Date(1970, 10, 22)],
    ["Capricornio", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}
