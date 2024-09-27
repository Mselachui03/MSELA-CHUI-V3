import Starlights from '@StarlightsTeam/Scraper';

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat,`🐯 Enter your Instagram username.\n\nExample:\n> *${usedPrefix + command}* Fernanfloo`, m);
await m.react('🕓');
try {
let { username, followers, following, posts, description, url, thumbnail } = await Starlights.igstalk(text);

let txt = '`乂  I N S T A G R A M -  S T A L K`\n\n';
    txt += `  ✩   User : ${username}\n`;
    txt += `  ✩   Followers : ${followers}\n`;
    txt += `  ✩   Following : ${following}\n`;
    txt += `  ✩   Publications : ${posts}\n`;
    txt += `  ✩   Bio : ${description}\n`;
    txt += `  ✩   Url : ${url}\n\n`;

conn.reply(m.chat, txt, m)
await m.react('✅');
} catch {
await m.react('✖️');
}
};

handler.help = ['igstalk <user>'];
handler.tags = ['tools'];
handler.command = ['igstalk', 'instagramstalk', 'instagram-stalk'];
handler.register = true;

export default handler;
