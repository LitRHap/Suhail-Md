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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_54_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODksXG4gICAgICAgIDY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgODIsXG4gICAgICAgIDU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyLFxuICAgICAgICA2NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICA4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA2MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieUtDRjd3eElOa0RFU3lObkdmSEpZZjBuKzJIZGRzNU9mdEhTY2E3Tmgzdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2MjgyMzIxNzYxMjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNzI0RTJEMTIyOEY4QjBEODM1MkE1RTRFMzk3NjIzMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU0NzUyODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2MjgyMzIxNzYxMjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MDY4NjMxNTRDQzFGRUEzMTQ5M0Q4MkNGMTA4NzlGOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU0NzUyODdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ0pHLWtVQVBRbzZpdmRnTDN1cXZod1wiLFxuICBcInBob25lSWRcIjogXCJiODFiNDI4NC0xMDJiLTRkZGUtYmMwOS02NWZkYmFjNDJhYTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICA2MixcbiAgICAgIDE0OSxcbiAgICAgIDEyNixcbiAgICAgIDY1LFxuICAgICAgMTgwLFxuICAgICAgMTg0LFxuICAgICAgMTMzLFxuICAgICAgMTksXG4gICAgICA4MSxcbiAgICAgIDI0NCxcbiAgICAgIDU2LFxuICAgICAgMTUyLFxuICAgICAgMTQ4LFxuICAgICAgMTk5LFxuICAgICAgMTUzLFxuICAgICAgMTEzLFxuICAgICAgMTc3LFxuICAgICAgMTg4LFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMTcyLFxuICAgICAgMTE1LFxuICAgICAgMTMsXG4gICAgICAxNTYsXG4gICAgICAyNDYsXG4gICAgICAxNzEsXG4gICAgICAxNixcbiAgICAgIDIyNCxcbiAgICAgIDIyOCxcbiAgICAgIDYwLFxuICAgICAgMTI5LFxuICAgICAgODYsXG4gICAgICAyMDgsXG4gICAgICAxMyxcbiAgICAgIDEwNCxcbiAgICAgIDE1MixcbiAgICAgIDEwOSxcbiAgICAgIDEyNixcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRKSFFCQlEzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI2MjgyMzIxNzYxMjExOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBcmltYSBLb3BsaW5nXCIsXG4gICAgXCJsaWRcIjogXCIxNjU1MzcwNjU3Nzk0MDY6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLU0V1Y1VCRU0rbWdMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJWQVVqZjcxU2FzTHRBcmozWDB4SDVKQWFMZlZVUFlQcHJ5UFZxRXQ1aEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYmN6SkFENDd3NjBEbVVMN0tCSTgwNVhiZHl6T21jeVUxRURQdk1Jbnc3aWhBdVFZTjFEWDduUjhDRVFhdXE5Z0IzTGdyQ3pic1pVR2xnUlFickIyRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNnFLWXlaa3lINjMvTEU4c3U4NEpGMzRsSnlvYmVnUWJqYWVobmxuUy9ZTnNHY3JjRTRmQ0h1OEE2cUlvbHdRU1dBT0NIKzlodEM2RGxzTHRIL3FJQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjI4MjMyMTc2MTIxMTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU0NzUyODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFcHJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVwci5qc29uIjogIntcImtleURhdGFcIjpcIndvRXNmenhXUHB0MFZBRFV3a2FvSkE1RXZuc2RrRVdLLzFUbDZOcGR6aXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDE0MDczMzgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTU0NzUyODc1NTZcIn0iCn0="  // PUT your SESSION_ID 


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
