import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs'
import { en, es, id, ar, pt } from './lib/idiomas/total-idiomas.js'

//cambia los números que sean propietarios 
global.owner = [
  ['50242725900', '🍷⃪ོ᷼𝕷𝒖𝒛𝒂𝒊𝒄𝒌ৎ୭ֶָׄ⁩⁩', true],
  ['50237849547', '🍷⃪ོ᷼𝕷𝒖𝒛𝒂𝒊𝒄𝒌ৎ୭ֶָׄ⁩⁩'],
  ['524131291234', '🍷⃪ོ᷼𝕷𝒖𝒛𝒂𝒊𝒄𝒌ৎ୭ֶָׄ⁩⁩'],
  ['524131653720', '🍷⃪ོ᷼𝕷𝒖𝒛𝒂𝒊𝒄𝒌ৎ୭ֶָׄ⁩⁩'],
  ['50242097439']

] 
global.suittag = ['50242725900'] 
global.mods = ['50237849547'] 
global.prems = [] 

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  violetics: 'https://violetics.pw'
},
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://violetics.pw': 'beta'
}

// _______________ IDIOMA : LENGUAJE _______________
//Agrega el Idioma que quieres que tenga DorratBot-MD
//Add the language you want DorratBot-MD to have
//  es = Español       //  id = Bahasa Indonesia
//  en = English       //  pt = Português 
//  ar = عرب  

global.lenguajeGB = es //Idioma de †𝐃⃟𝕺𝐑⃯𝐑𝐇⃯𝚵𝐓᪣𝕭⃯𝚹⃯𝐓⃤, Ejemplo: es | en | pt ....

/* ______________________________________________ */
global.creadorname = '       ✶━━━◆𝑭𝑨𝑴𝑰𝑳𝑰𝑨◆━━━✶
          𔔁𝐃𝐑𝐀𝐆𝐎♡𝐃𝐎𝐑𝐈፝֟𝐓𝐎𝐒 
     ❑✮𝑻𝑬 𝑫𝑨 𝑳𝑨 𝑩𝑰𝑬𝑵𝑽𝑬𝑵𝑰𝑫𝑨✮❑

*﮿👌🏻ᴘᴜᴇᴅᴇs-ᴀᴘᴏʀᴛᴀʀ.ve🤓*
_﮿🎼Pᴇʟɪs🍿•Mᴜ́sɪᴄᴀ (En Doc)•_
_﮿🎮Cʜᴀᴛ🗣 •Jᴜᴇɢᴏs•_
_﮿📚Aᴘᴋs📱•Pᴅғs•_
_﮿🌅Sᴇʀɪᴇs👯‍♀️•Fᴏɴᴅᴏs•_
_﮿🎭ᴀɴɪᴍᴇ🎎 •Mᴇᴍᴇs•_
_﮿📲Vɪᴅᴇᴏs-ᴘᴀʀᴀ-ᴇsᴛᴀᴅᴏs•_

*﮿ᴍᴏᴛɪᴠᴏ-ᴅᴇ-ʙᴀɴ🚯.ve🚯*
_﮿ᴇɴʟᴀᴄᴇs •ᴘᴏʀɴᴏ•_
_﮿ᴄᴀᴅᴇɴᴀs •ᴄᴘ•_
_﮿ɢᴏʀᴇ •ᴠɪʀᴜs•_
_﮿ᴇsᴄʀɪʙɪʀ ᴀʟ ᴘᴠ•_
_﮿ᴄʀɪᴛɪᴄᴀʀ ᴀᴘᴏʀᴛᴇs•_
_﮿🅾️-ᴄᴏɴᴛᴀᴅᴏʀ-ᴇɴ•_

*﮿JUEVES-NO-CHAT-SOLO-APORTES🤹🏻‍♀️.ve*
ᥫ᭡⁩⁩▸💎 ۪۫ᴀ۪۫ᴅ۪۫ᴍ۪۫ɪ۪۫ɴ۪۫ɪ۪۫s۪۫ᴛ۪۫ʀ۪۫ᴀ۪۫ᴄ۪۫ɪ۪۫ᴏ۪́۫ɴ۪۫ 💎◂ᥫ᭡⁩⁩
              ▔▔▔▔▔▔▔▔▔▔
𓆩ֶ፝֟𓆪⁩~𝑫𝑶𝑹𝑰𝑻𝑶𝑺~𓆩ֶ፝֟𓆪⁩
♡〫⋆▸🍒͡︎͜➛ᴇʟᴅᴀ
♡〫⋆▸🦋͡︎͜➛ʟᴜᴢ
♡〫⋆▸🍺͡︎͜➛ᴅᴀɴɴᴀ 
♡〫⋆▸🌺͡︎͜➛ᴛᴏ́xɪᴄᴀ
♡〫⋆▸♦️͜͡︎➛ᴀᴅʀʏᴀɴᴀ
☻⋆▹🐉͜͡︎➛ᴅʀᴀɢᴏ
☻⋆▹🎼͡︎͜➛ɢᴇʀᴀʟᴅ
☻⋆▹ᵒ♞͡︎͜➛ᴄʜᴀʀʀᴏ ɴᴇɢʀᴏ
﮿𒄬╭⬖─⬗─⬖─⬗─⬖─⬗╮𒄬
_*﮿ɢʀᴜᴘᴏ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ*_
~﮿https://chat.whatsapp.com/IFSAWEb22cT8hGAoNam0s2

_*﮿💎ᴛᴇᴀᴍ ᴅᴏʀɪᴛᴏs💎*_

_*﮿ɢʀᴜᴘᴏ ᴅᴇ ᴛᴇʟᴇɢʀᴀᴍ*_🆕
~﮿https://t.me/+5d0SOA2AS9RjNjIx~
﮿𒄬╰⬖─⬗─⬖─⬗─⬖─⬗╯𒄬🍷⃪ོ᷼𝕷𝒖𝒛𝒂𝒊𝒄𝒌ৎ୭ֶָׄ⁩⁩'
global.creatorname = creadorname
global.library = 'BAILEYS-MD'
global.vs = '1.3.0'
global.version = vs
//------------- Sticker WM -----------
global.packname = '(☞ﾟ∀ﾟ)☞'
global.author = '🍷⃪ོ᷼𝕷𝒖𝒛𝒂𝒊𝒄𝒌ৎ୭ֶָׄ⁩⁩'
global.wm = '🍷⃪ོ᷼𝕷𝒖𝒛𝒂𝒊𝒄𝒌ৎ୭ֶָׄ⁩⁩'
global.igfg = '🍷⃪ོ᷼𝕷𝒖𝒛𝒂𝒊𝒄𝒌ৎ୭ֶָׄ⁩⁩'
global.wait = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*'
//-------------------
global.md = 'https://chat.whatsapp.com/LlAbJM659dOBVJnxOIMl9h'
global.dorramd = md

/* _____________________________________________ */

global.ag = '━━━━━━━ ❎ 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 | 𝚆𝙰𝚁𝙽𝙸𝙽𝙶 ❎ ━━━━━━━━━'
global.advertencia = ag
global.fg = '☆━━━━ ⚠️ 𝙵𝙰𝙻𝙻𝙾 | 𝙵𝙰𝙻𝙻 ⚠️ ━━━☆'
global.fallo = fg
global.mg = '══ ❎ 𝙻𝙾 𝚄𝚂𝙾 𝙼𝙰𝙻 ❎ ══'
global.mal = mg
global.dorre = '🍷⃪ོ᷼𝕷𝒖𝒛𝒂𝒊𝒄𝒌ৎ୭ֶָׄ⁩⁩'
global.DORRA = dorre

/* Imagenes___________________ */
global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./galeria/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./galeria/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./galeria/menudorrat3.jpg')

global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkeysapi = ['85faf717d0545d14074659ad']
                
/* ⊱__________________.⋅ RPG ⋅.________ ⊰ */

global.flaaa = [

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
 
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'

global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'

global.botdate = `⫹⫺ Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./Menu2.jpg')
                               }
                              }
                             }

/* _____________________________________ */

global.multiplier = 999 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("se actualizo 'configuracion.js'"))
  import(`${file}?update=${Date.now()}`)
})
