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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_02_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxODcsXG4gICAgICAgIDQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMjM0LFxuICAgICAgICAzNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJoTXBRVU5LcEFuWWFyZlFiZzRGdXpvTkIzVTZFc1hwbmlOWHZKTEcrWnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4MjMyMTc2MTIxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTI5RkYwQ0VBMjQ5RUNFNUFBM0EyQjJDOUFCRDhGMkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NDc1NzQ3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4MjMyMTc2MTIxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjNDNTE4QzU2RDlFQjA2MDdCMjkwOTM4MkUwNTRBOUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NDc1NzUwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpvX3dHT2VKVFlxaGpTSWhwY09VYWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmMzZmU5NmUtYTBhZS00ZDYwLWJiMzAtMDlkMDNiYzg1NDM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MixcbiAgICAgIDEwMyxcbiAgICAgIDE2MixcbiAgICAgIDQ5LFxuICAgICAgMTI5LFxuICAgICAgODcsXG4gICAgICA4NyxcbiAgICAgIDEyNSxcbiAgICAgIDI5LFxuICAgICAgNjksXG4gICAgICA5LFxuICAgICAgNjgsXG4gICAgICAyNDQsXG4gICAgICAxMDYsXG4gICAgICAxMjYsXG4gICAgICAyNixcbiAgICAgIDE1MSxcbiAgICAgIDE2NSxcbiAgICAgIDYsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgMTc3LFxuICAgICAgMTI5LFxuICAgICAgODYsXG4gICAgICAzOSxcbiAgICAgIDEwOSxcbiAgICAgIDYzLFxuICAgICAgMjI4LFxuICAgICAgMTgyLFxuICAgICAgMTk1LFxuICAgICAgMjE2LFxuICAgICAgOTYsXG4gICAgICA5MCxcbiAgICAgIDExMyxcbiAgICAgIDk1LFxuICAgICAgNjAsXG4gICAgICAyMSxcbiAgICAgIDEzMSxcbiAgICAgIDE1LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0JYRlFWR1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjYyODIzMjE3NjEyMTE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFyaW1hIEtvcGxpbmdcIixcbiAgICBcImxpZFwiOiBcIjE2NTUzNzA2NTc3OTQwNjo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXRXVjVUJFSjJxZ0xJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYlZBVWpmNzFTYXNMdEFyajNYMHhINUpBYUxmVlVQWVBwcnlQVnFFdDVoQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5Y3JEQS9YdExVMmxNWVdnMXhPZlljWDNvSS9iQ3p3YmdMS29sMjFHcml4b0JzNUR5amxIRVBEYnM0QUhVNnlnb0NtVnZDV3lYeGFHT2xOTzdLMU9Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGR3ZaWHR2cU9XTmtTNjBCQ0g0dkhJeE9LUFcxdkM3V1k0MGg5enlteVJQSE1VNXYreWwvUGVsY3RsdWlYM3ROazZyZUpCLzdJN2pUSDh4UE9PT1pEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI2MjgyMzIxNzYxMjExOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTQ3NTc0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ1dVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnV1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicHN1cFRKTDNrL01HdXUyODNnaFlLdk5OMmlpcEthem1SR0JOV0dWMUxoaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTQwNzMzODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTQ3NTc0NjgwOFwifSIKfQ=="  // PUT your SESSION_ID 


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
