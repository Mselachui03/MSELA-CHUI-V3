
import fg from 'api-dylux'
let handler = async (m, {conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
   if (!teks) throw `✳️ ${mssg.notext}`
   try {
 let res = await fg.lyrics(text);
 let mes = `🐯 *${res.title}*
🐯 *${res.artist}*

🐯 ${res.lyrics}`;
    conn.sendFile(m.chat, res.image, 'img.png', mes, m);
} catch (e) {
	m.react(error)
} 

}
handler.help = ['lyrics']
handler.tags = ['tools']
handler.command = ['letter', 'lyrics', 'letters'] 

export default handler
