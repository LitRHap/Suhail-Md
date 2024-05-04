const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="alatliterap@gmail.com"
global.location="Jakarta,Indonesia."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Bangkok";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Hnay4XB9Kvx1FCqlZR19mi";
global.website=process.env.GURL || "doujindesu.tv" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "6285174396991" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "6285174396991";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_26_05_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDk4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY3LFxuICAgICAgICA5MyxcbiAgICAgICAgNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgMjIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc2LFxuICAgICAgICA3MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzUsXG4gICAgICAgIDQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDczLFxuICAgICAgICA1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjExLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMxLFxuICAgICAgICA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDgyLFxuICAgICAgICAxNSxcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc3LFxuICAgICAgICA5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndxZVByZ0xlTk83cnQ1RUxSZ1Btc3JISEtYeG9PbTNtUlNybExIWkphc009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4Mzg5MDU5MTkxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjNDNjhBQzA3QTczN0UwQkY2QkNFMTlCNjU1NjU2ODRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE0ODM5OTYzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhVTjk0WDFfVEhxWlFIWlZZbG1HNGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODZhZTI3MzAtM2VkZC00NTg1LThlMjAtMDdlYThlMmQ2NDcwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDE4MSxcbiAgICAgIDIyMSxcbiAgICAgIDE5NSxcbiAgICAgIDIwMyxcbiAgICAgIDEwOSxcbiAgICAgIDkyLFxuICAgICAgMTQyLFxuICAgICAgMTY5LFxuICAgICAgNTcsXG4gICAgICAxNzAsXG4gICAgICAxNTAsXG4gICAgICAxMjIsXG4gICAgICAyNixcbiAgICAgIDY5LFxuICAgICAgMTE3LFxuICAgICAgOTQsXG4gICAgICAxNjYsXG4gICAgICAxNDksXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICA2MSxcbiAgICAgIDIwMixcbiAgICAgIDM2LFxuICAgICAgMTg5LFxuICAgICAgMTc2LFxuICAgICAgMTY2LFxuICAgICAgNTAsXG4gICAgICA4NyxcbiAgICAgIDEyMixcbiAgICAgIDI0NyxcbiAgICAgIDY5LFxuICAgICAgMTg0LFxuICAgICAgMTQ4LFxuICAgICAgMjExLFxuICAgICAgNzUsXG4gICAgICAxNzksXG4gICAgICAxNDUsXG4gICAgICA2MSxcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKNUs4SjdKRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjI4Mzg5MDU5MTkxOToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkxpdFJIYXAgKEFJIEJPVClcIixcbiAgICBcImxpZFwiOiBcIjUyMzYxMTg4MTg5ODk6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGlkNGJ3RkVKWEQyYkVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlZGJ6WEdGMWFNYTJXZER1aU4zRzRBMmd6d3Z2TlZ6ZllQUlY4MHRyUkJ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdCN3Z4M1VRTDhQMUxiWExpNFh6TTlCK2luMm1yQUJlVlRobCtGYlBHdm9KTXQ3VGFVakJHNU5LVEFZcGZpK1JEdXFaRVN5QjM5b3pDck1odEx0NUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFvZjdIaUgxL296b1hob2Y3N2c4V213ZSs2TEF3Z05ORldSbGdJbU4xVmhIS0ZwSDQzNEZnSDZOR3lFRlEwbzYyRmhYRnJzUHJqRWFOT2w5UU9aZ0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjYyODM4OTA1OTE5MTk6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ4Mzk5NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHdnlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd2eS5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©LitRHap" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "LitRHap",
  ownername:process.env.OWNER_NAME|| "Lipp",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "LitRHap"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
