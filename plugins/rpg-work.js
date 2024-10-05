let cooldowns = {}

let handler = async (m, { conn, isPrems }) => {
let user = global.db.data.users[m.sender]
  let tiempoEspera = 5 * 60
  if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    const tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    conn.reply(m.chat, `🐯 Wait ⏱ *${tiempoRestante}* to return to work.`, m, rcanal)
    return
  }
  let resultado = Math.floor(Math.random() * 5000)
  cooldowns[m.sender] = Date.now()
  await conn.reply(m.chat, `🐯 ${pickRandom(works)} *${toNum(resultado)}* ( *${resultado}* ) XP 💫.`, m, rcanal)
  user.exp += resultado
}

handler.help = ['work']
handler.tags = ['rpg']
handler.command = ['w','work', 'trabajar']
handler.register = true 
export default handler

function toNum(number) {
    if (number >= 1000 && number < 1000000) {
        return (number / 1000).toFixed(1) + 'k'
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M'
    } else if (number <= -1000 && number > -1000000) {
        return (number / 1000).toFixed(1) + 'k'
    } else if (number <= -1000000) {
        return (number / 1000000).toFixed(1) + 'M'
    } else {
        return number.toString()
    }
}

function segundosAHMS(segundos) {
  let minutos = Math.floor((segundos % 3600) / 60)
  let segundosRestantes = segundos % 60
  return `${minutos} minutos y ${segundosRestantes} segundos`
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

// Thanks to FG98
const works = [
   "You work as a cookie cutter and you win",
   "Works for a private military company, earning",
   "Organize a wine tasting event and you get,"
   "You clean the chimney and you find",
   "You develop games for a living and you win,"
   "You worked overtime in the office for",
   "You work as a bride kidnapper and you win,"
   "Someone came and performed a play. You got hit for watching,"
   "You bought and sold items and earned",
   "You work in your grandmother's restaurant as a cook and you earn,"
   "You work 10 minutes at a local Pizza Hut. You won,"
   "You work as a fortune cookie writer and you win,"
   "You go through your bag and decide to sell some useless items that you don't need. Turns out all that junk was worth it,"
   "You develop games for a living and you win,"
   "You work all day in the company for",
   "You designed a logo for a company for",
   "He worked as hard as he could at a printing company that was hiring and earned what he deserved!"
   "You work as a bush trimmer and you earn,"
   "You work as a voice actor for SpongeBob SquarePants and you managed to win,"
   "You were farming and you won",
   "You work as a sandcastle builder and you win,"
   "You work as a street artist and you earn,"
   "You did social work for a good cause! For your good cause you received",
   "You repaired a damaged T-60 tank in Afghanistan. The crew paid you,"
   "You work as an eel ecologist and you win,"
   "You work at Disneyland as a panda in costume and you win,"
   "You repair the arcade machines and you receive",
   "You did some odd jobs in the city and earned,"
   "You clean some toxic mold out of the vent and you win,"
   "You solved the mystery of the cholera outbreak and the government rewarded you with a sum of,"
   "You work as a zoologist and you win,"
   "You sold fish sandwiches and got",
   "You repair the arcade machines and you receive",
] 
