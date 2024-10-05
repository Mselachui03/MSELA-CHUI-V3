let cooldowns = {}

let handler = async (m, { conn, text, command, usedPrefix }) => {
  let users = global.db.data.users
  let senderId = m.sender
  let senderName = conn.getName(senderId)
  
  let tiempoEspera = 5 * 60
  if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    m.reply(`🐯 You have already committed a Crime recently, please wait *⏱ ${tiempoRestante}* to commit your next crime and avoid getting caught.`)
    return
  }
  
  cooldowns[m.sender] = Date.now()
  
  let senderLimit = users[senderId].limit || 0

  let randomUserId = Object.keys(users)[Math.floor(Math.random() * Object.keys(users).length)]

  while (randomUserId === senderId) {
    randomUserId = Object.keys(users)[Math.floor(Math.random() * Object.keys(users).length)]
  }

  let randomUserLimit = users[randomUserId].limit || 0

  let minAmount = 15
  let maxAmount = 50

  let amountTaken = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount

  let randomOption = Math.floor(Math.random() * 3)

  switch (randomOption) {
  case 0:
  users[senderId].limit += amountTaken
  users[randomUserId].limit -= amountTaken
  conn.sendMessage(m.chat, {
        text: `🐯¡You managed to commit your crime successfully! You just stole. *${amountTaken} ⭐ Stars* a @${randomUserId.split("@")[0]}\n\nThey add up *+${amountTaken} ⭐ Stars* a ${senderName}.`,
  contextInfo: { 
  mentionedJid: [randomUserId],
  }
  }, { quoted: m })
  break

  case 1:
  let amountSubtracted = Math.min(Math.floor(Math.random() * (senderLimit - minAmount + 1)) + minAmount, maxAmount)
  users[senderId].limit -= amountSubtracted
  conn.reply(m.chat, `🐯 You were not careful and got caught while committing your crime, *-${amountSubtracted} ⭐ Stars* were subtracted from ${senderName}.`, m)
break

  case 2:
  let smallAmountTaken = Math.min(Math.floor(Math.random() * (randomUserLimit / 2 - minAmount + 1)) + minAmount, maxAmount)
  users[senderId].limit += smallAmountTaken
  users[randomUserId].limit -= smallAmountTaken
  conn.sendMessage(m.chat, {
  text: `🐯 You managed to commit your crime successfully, but you were discovered and only managed to take *${smallAmountTaken} ⭐ Stars* from @${randomUserId.split("@")[0]}\n\n*+${smallAmountTaken} ⭐ Stars* are added to ${
  mentionedJid: [randomUserId],
  }
  }, { quoted: m })
  break
  }
  
  global.db.write()
}
handler.tags = ['rpg']
handler.help = ['crimen']
handler.command = ['crimen', 'crime']
handler.register = true
handler.group = true

export default handler

function segundosAHMS(segundos) {
  let horas = Math.floor(segundos / 3600)
  let minutos = Math.floor((segundos % 3600) / 60)
  let segundosRestantes = segundos % 60
  return `${minutos} minutos y ${segundosRestantes} segundos`
}
