

let handler = async (m, { args }) => {
   let user = global.db.data.users[m.sender]
   if (!args[0]) return m.reply('🐯 Enter the amount of *⭐ Stars* you wish to Withdraw.')
   if (args[0] == 'all') {
      let count = parseInt(user.bank)
      user.bank -= count * 1
      user.limit += count * 1
      await m.reply(`🐯 You removed *${count} ⭐ Stars* of the Bank.`)
      return !0
   }
   if (!Number(args[0])) return m.reply('🐯 The amount must be a Number.')
   let count = parseInt(args[0])
   if (!user.bank) return m.reply('You dont have *⭐ Stars* in the Bank.')
   if (user.bank < count) return m.reply(`You only have *${user.bank} ⭐ Stars* in the Bank.`)
   user.bank -= count * 1
   user.limit += count * 1
   await m.reply(`🐯 You removed *${count} ⭐ Stars* of the Bank.`)
}

handler.help = ['retirar']
handler.tags = ['rpg']
handler.command = ['withdraw', 'retirar', 'wd']
handler.register = true 
export default handler
