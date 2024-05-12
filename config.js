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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_22_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgODYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDU3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDU5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVTVtSWN6MC8vb2V6c2VJNi8yYm1kdGg4VzJFaVlRbHBraGJWVldmV1h6Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI3MDE5MjkzNzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM5MTQ0NjczRUE2Mjg0NDE4MEE0NTdGOTVEOTc4MjhEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTQ5ODU2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjcwMTkyOTM3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzVGNTZEMzA3MUFBRjNEQjA5NjM4RTIzODMzOEQzQTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NDk4NTY5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1EMi04TnFJUWxpakhRUmVKRXBISkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTFjY2MxNmEtN2Y1NS00OTJkLWEyZGQtZmRkMDAxNzM0OTgzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM2LFxuICAgICAgMTEsXG4gICAgICAxOCxcbiAgICAgIDIwMCxcbiAgICAgIDgzLFxuICAgICAgMjM4LFxuICAgICAgOTIsXG4gICAgICA1NSxcbiAgICAgIDIzNCxcbiAgICAgIDU4LFxuICAgICAgMjIxLFxuICAgICAgMTE1LFxuICAgICAgMTY3LFxuICAgICAgMTk5LFxuICAgICAgMTM5LFxuICAgICAgMTgzLFxuICAgICAgMTM1LFxuICAgICAgNDgsXG4gICAgICAyMjMsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAyNTEsXG4gICAgICAyMSxcbiAgICAgIDg5LFxuICAgICAgMTA3LFxuICAgICAgNTYsXG4gICAgICAxNDYsXG4gICAgICAzLFxuICAgICAgMjQyLFxuICAgICAgMTkyLFxuICAgICAgNTcsXG4gICAgICAxNDgsXG4gICAgICAyNixcbiAgICAgIDY4LFxuICAgICAgMTExLFxuICAgICAgNDAsXG4gICAgICAxMjAsXG4gICAgICAxMzksXG4gICAgICAxNDUsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEUTNUUE1ZUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNzAxOTI5Mzc1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM1NTY3MTQ0MzEzMDcxOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTGl0UkhhcFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lUVWxKSUNFTUxjZ2JJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNmQyYUJnM01IbnhNMFVKWDZDMzNZMTJzR1k5ektQdDFodkNOdWdjcVB6TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzakx0d1E5YmFralF5U2VMdlRVRkcwWWJpS01OVDRRbzc5REFkQUtENGN5bUFsaTlWMjBLRTVVVGZUNUxMNHNreU1pZlJmTE5iMFdqWHlMa2wxaWdCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXdkhHd2Y0OFZ5RXBCSzhsTmlyTCt3SC9MTGo4SkkwNURjcnVBS0hiK2RkeXhQTzcxMG50V0s3MnFIRlVRSlg5YXN5YWhxYitjSnByZU81dTN0UThEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI3MDE5MjkzNzU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU0OTg1NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLc21cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtzbS5qc29uIjogIntcImtleURhdGFcIjpcIjN5bEZWNDhNdFh6K2pPcU1nN3lpK2JTdENjWkRmSGpXMmZzR3dQS3ZQNk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTc0OTU4MDg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTU0OTg1NjYyNTFcIn0iCn0="  // PUT your SESSION_ID 


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
