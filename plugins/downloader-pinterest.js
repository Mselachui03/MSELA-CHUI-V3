import Starlights from '@StarlightsTeam/Scraper';

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat,`🐯 Enter a Pinterest link\n\nExample:\n> *${usedPrefix + command}* https://ar.pinterest.com/pin/588142032613788991/`, m);
await m.react('🕓');
try {
let { dl_url, quality, size, duration, url } = await Starlights.pinterestdl(args[0]);

let txt = '`乂  P I N T E R E S T  -  D L`\n\n'
txt += `  ✩   *Quality* : ${quality}\n`;
txt += `  ✩   *Size* : ${size}\n`;
txt += `  ✩   *Duration* : ${duration}\n`;
txt += `  ✩   *Url* : ${url}\n\n`
txt += `> 🐯 *${textbot}*`


await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: txt, mimetype: 'video/mp4', fileName:  `pinterest.mp4`}, {quoted: m })
await m.react('✅');
} catch {
await m.react('✖️');
}
};

handler.help = ['pinterestdl *<url pin>*'];
handler.tags = ['downloader'];
handler.command = ['pinterestdl', 'pindl'];
handler.register = true;

export default handler;
