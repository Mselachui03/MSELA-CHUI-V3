import Starlights from '@StarlightsTeam/Scraper';

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat,`🐯 Enter your TikTok username.\n\nExample:\n> *${usedPrefix + command}* Fernanfloo`, m);

await m.react('🕓');
try {
let { username, nickname, bio, profile, followers, following, likes, videos, accountPrivate, verified, region, accountCreated } = await Starlights.tiktokStalk(text);

let txt = '`乂  T I K T O K  -  S T A L K`\n\n'
    txt += `  ✩   *User* : ${username}\n`;
    txt += `  ✩   *Nickname* : ${nickname}\n`;
    txt += `  ✩   *Bio* : ${bio || 'No disponible'}\n`;
    txt += `  ✩   *Followers* : ${followers}\n`;
    txt += `  ✩   *Following* : ${following}\n`;
    txt += `  ✩   *Likes* : ${likes}\n`;
    txt += `  ✩   *Videos* : ${videos}\n`;
    txt += `  ✩   *Private Account* : ${accountPrivate}\n`;
    txt += `  ✩   *Verified* : ${verified}\n`;
    txt += `  ✩   *Region* : ${region}\n`;
    txt += `  ✩   *Account Created* : ${accountCreated}\n\n`;


await conn.sendFile(m.chat, profile, 'thumbnail.jpg', txt, m, null, rcanal);
 await m.react('✅');
} catch {
await m.react('✖️');
}
};

handler.help = ['tiktokstalk <user>'];
handler.tags = ['tools'];
handler.command = ['tiktokstalk', 'stalktiktok', 'ttstalk'];
handler.register = true;

export default handler;
