const free = 50000
const prem = 100000
const cooldowns = {}

let handler = async (m, { conn, isPrems }) => {
  let user = global.db.data.users[m.sender]
  const tiempoEspera = 24 * 60 * 60
  if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    const tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    conn.reply(m.chat, `🐯 You have already placed your free order for today.\nRemember that you can only place it once every 24 hours.\n\n*Next Amount* : +${isPrems ? prem : free} 💫 XP\n*In* : ⏱ ${timeRemaining}`, m, rcanal) 
      return 
  }

  global.db.data.users[m.sender].exp += isPrems ? prem : free
  conn.reply(m.chat, `🐯 Congratulations 🎉, you claimed *+${isPrems ? prem : free} 💫 XP*.`, m, rcanal)

  cooldowns[m.sender] = Date.now()
}

handler.help = ['claim']
handler.tags = ['rpg']
handler.command = ['daily', 'claim']
handler.register = true

export default handler

function segundosAHMS(segundos) {
  const horas = Math.floor(segundos / 3600)
  const minutos = Math.floor((segundos % 3600) / 60)
  const segundosRestantes = segundos % 60
  return `${horas} hours, ${minutos} minutes y ${segundosRestantes} seconds`;
}
