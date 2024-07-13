const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="mathara,colombo.sri lanka "


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VadHtwWFCCoaogdKsh0B";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VadHtwWFCCoaogdKsh0B" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "22393592745" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";"22393592745";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22393592745";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_05_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyLFxuICAgICAgICA3NSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDMyLFxuICAgICAgICAyLFxuICAgICAgICAxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2LFxuICAgICAgICA4NSxcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk3LFxuICAgICAgICA5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5LFxuICAgICAgICA3MixcbiAgICAgICAgMTM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhMaW9ZNHV2SWNKNUhubjBLd3BmL0pCQ2o4Y2dFdjVwU21jcG1xbXZJbVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIzOTM1OTI3NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEzMTg3MTlEMTZFMDlGNkZENTAyRTgxNEQ4QUU5MDlEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDgzOTkxMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyMzkzNTkyNzQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MTMyNjlDRjVGMjYxQkM0NzA4QUY5N0MwM0U5QzI0MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4Mzk5MTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiemZHOTY5b0RSOXFBQjBNekxVNk82UVwiLFxuICBcInBob25lSWRcIjogXCJkNDVlZWYyMS03MWYxLTQ5NzgtOTM1NS1iMzAxYjQ3YzNjNTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAxODQsXG4gICAgICA4MCxcbiAgICAgIDE3MixcbiAgICAgIDU1LFxuICAgICAgNTEsXG4gICAgICAxODEsXG4gICAgICAyNixcbiAgICAgIDEzNixcbiAgICAgIDI1MCxcbiAgICAgIDE5NCxcbiAgICAgIDI0NSxcbiAgICAgIDE5LFxuICAgICAgMTI0LFxuICAgICAgNDcsXG4gICAgICAzMixcbiAgICAgIDE5NSxcbiAgICAgIDI1MixcbiAgICAgIDIyNyxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgMTAwLFxuICAgICAgNjYsXG4gICAgICAxNzMsXG4gICAgICA1NyxcbiAgICAgIDE3NCxcbiAgICAgIDcyLFxuICAgICAgNDAsXG4gICAgICAxNzcsXG4gICAgICAxNTYsXG4gICAgICAxMDIsXG4gICAgICAxMjQsXG4gICAgICAyMDUsXG4gICAgICA3NSxcbiAgICAgIDEwMyxcbiAgICAgIDQ2LFxuICAgICAgMjI5LFxuICAgICAgNjYsXG4gICAgICAzNCxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2eGpRMFE0ZDNIdEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZTYzdXRUY0Zlcy9tRFB2RGZObGtaUnhhWVZZbHdwZDdsWFNTc09UWWZBND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVYThVOFZSUHB2T3FyWDJ1ODBPQmZuT2J6UjVlMlZWVzFoUEgrT2ppSnFVL3BoK0U0dUlpZ09YS2Fxc0hsejdnWHR2MVU1ZEUvTjdyQTZ5eVFNL0NDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJic0F5Uk1qTnFzSnFIYkxLZ2NLbnJUREplbTBpVHpMMnNaakVvY1ZLY1NIV3VwSzJBd2dma1ZrYmlXUTVzeDJVd2pVNE9mMWY4QzhEbzl4eEg5bGhndz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMzkzNTkyNzQ1OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QuvCdkZnwnZGO8J2RkfCdkabwnZGgIPCdkLbihI7wnZGO8J2RmfCdkZnwnZGSXCIsXG4gICAgXCJsaWRcIjogXCIyNzg1NzYwMDgwNTY4NzE6MjZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjM5MzU5Mjc0NToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODM5OTA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEkyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQSTIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwNTZQWTdNM25tUGxkbG4ySDI3N3htTjhoM2JjajNteEFqZlNsL1lreEE4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3NDkwNDU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4MzY3NTEyOTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 CKUSHAN ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DARK SHAN ",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Gladyschalle",
  ownername:process.env.OWNER_NAME|| "GLADYS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
