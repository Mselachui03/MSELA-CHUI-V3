import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
const handler = async (m, {text, command, args, usedPrefix}) => {
  if (!text) return m.reply(`*• Enter a text*\n\n*Example:*\n*${usedPrefix + command}* hello bot`)
  try {
    const api = await fetch('https://api.simsimi.net/v2/?text=' + text + '&lc=es');
    const resSimi = await api.json();
    m.reply(resSimi.success);
  } catch {
    try {
      if (text.includes('Hello')) text = text.replace('Hello', 'Hello');
      if (text.includes('Hello')) text = text.replace('Hello', 'Hello');
      if (text.includes('HELLO')) text = text.replace('HELLO', 'HELLO');
      const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
      const resu = await reis.json();
      const nama = m.pushName || '1';
      const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
      const res = await api.json();
      const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
      const resu2 = await reis2.json();
      m.reply(resu2[0][0][0]);
    } catch {
      throw `*chui Bot🐯* | 「 *ERROR* 」\n\It didn't happen and *Error*`;
    }
  }
};
handler.help = ['simi']
handler.tags = ['fun'];
handler.command = /^((sim)?simi|chui|msela|bot)$/i;
export default handler;
