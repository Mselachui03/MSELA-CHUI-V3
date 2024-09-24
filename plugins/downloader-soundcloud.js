import fetch from 'node-fetch';
import axios from 'axios';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `🐯 Enter the name of the song *Soundcloud.*`, m, rcanal)

await m.react('🕒');
try {
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/soundcloud-search?text=${encodeURIComponent(text)}`);
let json = await api.json();
let { url } = json[0];

let api2 = await fetch(`https://apis-starlights-team.koyeb.app/starlight/soundcloud?url=${url}`);
let json2 = await api2.json();
        
let { link: dl_url, quality, image } = json2;

let audio = await getBuffer(dl_url);

let txt = `*\`- S O U N C L O U D - M U S I C -\`*\n\n`;
    txt += `	✩  *Title* : ${json[0].title}\n`;
    txt += `	✩  *Quality* : ${quality}\n`;
    txt += `	✩  *Url* : ${url}\n\n`;
    txt += `> 🐯 *${textbot}*`

await conn.sendFile(m.chat, image, 'thumbnail.jpg', txt, m, null, rcanal);
await conn.sendMessage(m.chat, { audio: audio, fileName: `${json[0].title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })

await m.react('✅');
} catch {
await m.react('✖️');
}}

handler.help = ['soundcloud *<búsqueda>*']
handler.tags = ['downloader']
handler.command = ['soundcloud', 'sound']

export default handler

const getBuffer = async (url, options) => {
try {
const res = await axios({
method: 'get',
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1,
},
...options,
responseType: 'arraybuffer',
});
return res.data;
} catch (e) {
console.log(`Error : ${e}`);
}
};

/*
// Install the node-ID3 🙃
// use math because some audios are not sent
// The second URL If you download the song data for that you have to enter the music that you want to download you enter and copies the link and fight it in the second URL :) 
// The search engine still has no permissions to go directly to the song and obtain the link directly to the song, so some audios are not sent
Import axios from 'axios'
Import fs from 'FS'
Import Nodeid3 from 'Node-ID3'

Let Handler = Async (M, {Conn, Text, USEDPREFIX, Command}) => {
if (!
Await m.react ('🕓')
Try {
let {data: results} = await axios.get (`https://apis-starlights-team.koyeb.app/starlight/soundcloud-search?text=$ {text}`, {Headers: {'content-type' : 'Application/Json'}})
let randoms = results [math.floor (math.random () * results.length)]
let {data: sm} = await axios.get (`https://apis-starlights-team.koyeb.app/starlight/soundcloud?url=$ {randoms.url}`, {Headers: {'content-type' : 'Application/Json'}})
let mpeg = await axios.get (sm.Audio, {responsibly: 'arraybuffer'})
let img = await axios.get (randoms.image, {responsibly: 'arraybuffer'})
let mp3 = `$ {sm.title} .mp3``
fs.writefilesync (mp3, buffer.from (mpeg.data))
let tags = {
Title: Sm.title,
Artist: Sm.Creator, 
Image: buffer.from (img.data) 
}
nodeid3.write (Tags, MP3)
let txt = `*\` - s o u n c l o u d - m u s i c - \ `*\ n \ n`
txt += `🍘 • * name: * $ {randoms.title} \ n`
txt += `🍘 • * artist: * $ {randoms.artist} \ n`
Txt += `🍘 • * Duration: * $ {randoms.Duration} \ n`
txt += `🍘 • * reproductions: * $ {randoms.repro} \ n`
Txt += `🍘 • * Link: * $ {randoms.url} \ n`
Txt += `🐯 Powered by MSELA-CHUI-V3`
Await Conn.sendfile (M.Chat, Randoms.image, 'Thumb.jpg', Txt, M)
Await Conn.sendmessage (M.Chat, {Audio: Fs.readfilesync (MP3), Fillename: `$ {Sm.title} .mp3`, Mimetype: 'Audio/mpeg'}, {quoted: m})
FS.unlinksync (MP3)
Await m.react ('✅')
} Catch {
Await m.react ('✖️')
}}
Handler.help = ['Soundcloud *<OBR> *']
Handler.tags = ['Downloader']
Handler.command = ['Soundcloud', 'Sound']
Handler.register = True
//handler.limit = 3
Export Default Handler*/
