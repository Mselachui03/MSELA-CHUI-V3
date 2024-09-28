let handler = async (m, { conn, usedPrefix, command}) => {
await conn.reply(m.chat,`Our Father, who art in Heaven, hallowed be your name, your Kingdom come, your will be done on earth as it is in heaven. and forgive us our debts as we forgive our debtors, and lead us not into temptation, but deliver us from evil.`, style)
}
handler.customPrefix = /^(Fototeta|fototeta)$/i
handler.command =  /^(Fototeta|fototeta)$/i
export default handler
