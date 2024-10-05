import { tmpdir } from 'os'
import path from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs'

let handler = async (m, { conn, usedPrefix: _p, __dirname, args, text }) => {
    if (!text) return conn.reply(m.chat, `🐯 Enter the path and name of the file you want to delete.`, m, rcanal)
    
    const file = text.trim()
    if (!existsSync(file)) return conn.reply(m.chat, `🐯 File not found.`, m, rcanal)
    
    unlinkSync(file)
    conn.reply(m.chat, `🐯 The file *${file}* has been successfully removed.`, m, rcanal)
}
handler.tags = ['owner']
handler.help = ['deletefile']
handler.command = /^(deletefile|df)$/i
handler.rowner = true

export default handler
