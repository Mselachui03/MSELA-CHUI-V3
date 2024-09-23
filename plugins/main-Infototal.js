let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `*» Total Functions* : ${totalf}`,m)
}

handler.help = ['totalfunctions']
handler.tags = ['main']
handler.command = ['totalfunctions']
handler.register = true
export default handler 
