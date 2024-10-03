

let buatall = 1
let cooldowns = {}

let handler = async (m, { conn, args, usedPrefix, command, DevMode }) => {
	let user = global.db.data.users[m.sender]
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 55)}`.trim()
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
		let who = m.fromMe ? conn.user.jid : m.sender
	    let username = conn.getName(who)
	    
	    let tiempoEspera = 15
	    
	    if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    conn.reply(m.chat, `🐯 You have already started a bet recently, please wait *⏱ ${tiempoRestante}* to bet again`, m, rcanal)
    return
  }
  
  cooldowns[m.sender] = Date.now()
	    
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].limit / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, '🐯 Enter the amount of ' + `*⭐ Stars*` + ' that you wish to contribute against' + ` *Msela-chui-v3*` + `\n\n` + '`Example:`\n' + `> *${usedPrefix + command}* 100`, m, rcanal)

        if (user.limit >= count * 1) {
            user.limit -= count * 1
            if (Aku > Kamu) {
                conn.reply(m.chat, '`🌵 Lets see what numbers they have!`\n\n'+ `➠ *Msela-chui-v3* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username}, *YOU LOST* ${formatNumber(count)} ⭐ Stars.`.trim(), m, rcanal)
} else if (Aku <
                user.limit += count * 2
                conn.reply(m.chat, '`🌵 Lets see what numbers they have!`\n\n'+ `➠ *Msela-chui-v3* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username}, *YOU WON* ${formatNumber(count * 2)} ⭐ Stars.`.trim(), m, rcanal)
} else {
                conn.reply(m.chat, '`🌵 Lets see what numbers they have!`\n\n'+ `➠ *Msela-chui-v3* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username} you get ${formatNumber(count * 1)} ⭐ Stars.`.trim(), m, rcanal)
		}
        } else conn.reply(m.chat, `You don't have *${formatNumber(count)} ⭐ Stars* to bet on!`.trim(), m, rcanal)
    
}
    
handler.help = ['bet *<quantity>*']
handler.tags = ['game']
handler.command = /^(bet|casino)$/i
handler.register = true

handler.fail = null

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function segundosAHMS(segundos) {
  let segundosRestantes = seconds % 60
  return `${segundosRestantes} seconds`
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
