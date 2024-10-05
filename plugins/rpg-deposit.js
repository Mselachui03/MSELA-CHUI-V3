

let handler = async (m, { args }) => {
   let user = global.db.data.users[m.sender]
   if (!args[0]) return m.reply('🐯 Enter the amount of *⭐ Stars* you wish to Deposit.')
   if ((args[0]) < 1) return m.reply('🐯 Enter a valid amount of *⭐ Stars.')
   if (args[0] == 'all') {
      let count = parseInt(user.limit)
      user.limit -= count * 1
      user.bank += count * 1
      await m.reply(`Depositaste *${count} ⭐ Stars* to the Bank.`)
      return !0
   }
   if (!Number(args[0])) return m.reply('🐯 The amount must be a Number.')
   let count = parseInt(args[0])
   if (!user.limit) return m.reply('You have no *⭐ Stars* in your Wallet.')
   if (user.limit < count) return m.reply(`You only have *${user.limit} ⭐ Stars* in the Wallet.`)
   user.limit -= count * 1
   user.bank += count * 1
   await m.reply(`Depositaste *${count} ⭐ Stars* to the Bank.`)
}

handler.help = ['depositar']
handler.tags = ['rpg']
handler.command = ['deposit', 'depositar', 'dep', 'd']
handler.register = true 
export default handler 
