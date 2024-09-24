Import {Createhash} from Crypto '
Import fs from 'FS'
Import Fetch from 'Node-Fetch'

let reg = /\ |? (.*) ([. |]*?) ([0-9]*) $ /i
Let Handler = Async Function (M, {Conn, Text, USedPrefix, Command}) {
  let user = global.db.data.users [m.sender]
  Let Name2 = Conn.Getname (M.sender)
  if (user.registered === True) return m.repy (`🐯 you are already registered. \ n \ n*Do you want to register again? } areg* <serial number> `)
  if (! reg.test (text)) return m.reply (`🐯 incorrect format. Name2} .16*`)
  let [_, name, splitter, age] = text.match (reg)
  if (! name) return m.reply ('🐯 the name cannot be empty.')
  if (! Age) return m.reply ('🐯 age cannot be empty.')
  if (name.length> = 100) return m.reply ('🐯 the name is too long.')
  AGE = PARSET (AGE)
  if (AGE> 100) Return M.reply ('👴Wow the grandfather wants to play bot.')
  if (age <5) return m.reply ('🚼 there is a baby grandfather JSJSJ.')
  User.name = name.trim ()
  User.age = Age
  User.regime = + New Date
  User.registered = True
  let sn = createhash ('md5'). Update (m.sender) .digest ('hex')
  let img = await (await fetch (`https: // tinyurl.com/ynvdqh3x`)) .buffer ()
  let txt = ` - *r e g i s t r o - u s e r *\ n \ n`
      txt += `┌ ✩ * name *: $ {name} \ n`
      txt += `│ ✩ * age *: $ {age} years \ n`
      txt += `│ ✩ *serial number *\ n`
      txt += `└ ✩ $ {sn}`
Await Conn.Sandai (M.Chat, Botname, Textbot, Txt, IMG, IMG, Channel, M)
Await m.react ('✅')
}
handler.help = ['reg']. Map (v => v + ' *<name.ead> *')
Handler.tags = ['RG']

handler.command = ['verify', 'reg', 'register', 'register'] 

Export Default Handler
