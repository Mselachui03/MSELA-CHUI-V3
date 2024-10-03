let handler = async (m, { conn, command, text }) => {
	
    if (!text) return m.reply(`🐯 Enter a name right at the command.`)
	
  let `
┏━━°❀❬ *PERSONALITY}* ❭❀°━━┓
*┃*
*┃• Name* : ${text}
*┃• Good Morale* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54% ','60%','66%','73%','78%','84%','92%','93%','94%','96%','98, 3%','99.7%','99.9%','1%','2.9%','0%','0.4%'])}
*┃• Bad Morals* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54% ','60%','66%','73%','78%','84%','92%','93%','94%','96%','98, 3%','99.7%','99.9%','1%','2.9%','0%','0.4%'])}
*┃• Type of person* : ${pickRandom(['Kind-hearted','Arrogant','Stingy','Generous','Humble','Shy','Cowardly','Buddy','Crystal' ,'Non binary XD', 'Asshole'])}
*┃• Always* : ${pickRandom(['Busy','Bad','Distracted','Annoying','Gossip','Pulls by','Shopping','Watching anime','Chat on WhatsApp because he's single','Laying down good for nothing','A womanizer','On the cell phone'])}
*┃• Intelligence* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%' ,'60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3 %','99.7%','99.9%','1%','2.9%','0%','0.4%'])}
*┃• Delinquency* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%' ,'60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3 %','99.7%','99.9%','1%','2.9%','0%','0.4%'])}
*┃• Courage* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%' ,'60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3 %','99.7%','99.9%','1%','2.9%','0%','0.4%'])}
*┃• Fear* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%' ,'60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3 %','99.7%','99.9%','1%','2.9%','0%','0.4%'])}
*┃• Fame* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%' ,'60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3 %','99.7%','99.9%','1%','2.9%','0%','0.4%'])}
*┃• Gender* : ${pickRandom(['Man', 'Woman', 'Homosexual', 'Bisexual', 'Pansexual', 'Feminist', 'Straight', 'Alpha Male', 'Female', 'Tomboy' ', 'Palosexual', 'PlayStationSexual', 'Sr. Manuela', 'Pollosexual'])}
┗━━━━━━━━━━━━━━━━
`
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) })
}
handler.help = ['personality *<name>*']
handler.tags = ['fun']
handler.command = /^personality/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
