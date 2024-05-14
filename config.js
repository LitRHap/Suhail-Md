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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_24_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDMxLFxuICAgICAgICAyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICA3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2LFxuICAgICAgICAyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDcyLFxuICAgICAgICA0NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDg2LFxuICAgICAgICA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICA4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDg2LFxuICAgICAgICA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MixcbiAgICAgICAgODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIld2MGRtOGwvVVlsSjFQS1puT2EzSXo3WWxiUXFCanhia2F5d3RCZFhGZ3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNzAxOTI5Mzc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQTdFMkFFQTc1QzE3NjQ5QzY2M0Y4RDJCNDJENThDRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU2Nzg2OTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI3MDE5MjkzNzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVBNzEwNEI0OERFRkZCQTE4Qjk1OTA1RDU2NkU0NkEwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTY3ODY5MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWSWxhX2cyVVR6Q3pBc0xvaTV6dkd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzMjIxNGNkLTU2NzEtNDE1OC1iY2QwLWUwN2ZmZGM4NWJlOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxOTcsXG4gICAgICAxMTYsXG4gICAgICA2OSxcbiAgICAgIDI0NSxcbiAgICAgIDE0MixcbiAgICAgIDcxLFxuICAgICAgNzgsXG4gICAgICAyNTQsXG4gICAgICA1MCxcbiAgICAgIDE1OCxcbiAgICAgIDcxLFxuICAgICAgMixcbiAgICAgIDE1MixcbiAgICAgIDEzOSxcbiAgICAgIDQ2LFxuICAgICAgMTAxLFxuICAgICAgMTI5LFxuICAgICAgMTM3LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMTksXG4gICAgICAyMzYsXG4gICAgICA2NixcbiAgICAgIDEwNCxcbiAgICAgIDE0MixcbiAgICAgIDEsXG4gICAgICA0MCxcbiAgICAgIDQyLFxuICAgICAgNTcsXG4gICAgICAxNjAsXG4gICAgICAyMzYsXG4gICAgICAyMjgsXG4gICAgICAxNjEsXG4gICAgICAxMDAsXG4gICAgICAxMTcsXG4gICAgICAxMTksXG4gICAgICAxMzQsXG4gICAgICAxNDMsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1RTUkxBNlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjcwMTkyOTM3NTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTGl0UkhhcFwiLFxuICAgIFwibGlkXCI6IFwiMzU1NjcxNDQzMTMwNzE6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJU1l2Ym9GRU56YmpMSUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpXSWhVZ0RjOE5ibVV4NGJPd1NpT09UZ0gyRVJjNW5Pb2NLTHFka3ZtREk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieTc3bU1QQUN5N3Y1cUpVR2xFcENuTGN6NW5CMmtSMjFuNWszTWVSZEJsY1JPdnV5NWtXMEczV05ZR0VGUklDTkIxempaZTFQNmVlQkRLMFpGaUJOQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia1NtU3o1VGN1UjNzNU01SDZBbElYb2k4WUhXcGNEajNmemtKWXo3UGV3SzMvYzZFZWJSUGxnYnFLOENqcE42RGNlbURmNGttZktKUTZDQjZ2ME55aXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNzAxOTI5Mzc1OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU2Nzg2ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEa25cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURrbi5qc29uIjogIntcImtleURhdGFcIjpcIjlqdGFsU2RGTXFZa3A2Z2pCOXBGSElEUTc3TUdQeWo0MjhMcVJBbStqZ2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ2NDgxNDU5NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTU4NDExNjE3M1wifSIKfQ=="  // PUT your SESSION_ID 


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
