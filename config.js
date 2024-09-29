//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NYRTlFOTRVU2pQM0VmNzRIYmJVTmVwRi84R3FNOG5ZS29tQksyN3YzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjJ1bUFWNm1yR1VvckF1cHZUMnNvYVBoeFdrVUNIVzNUTGdEMzdaY2prRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UDkrNTN6VEtpL0pOenJXRHRzcUpGR3JPQ1ZnS0swekZUY0hZTi9vRlZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiRzFYbXlOL3l0em9KRmYvcjM1dDlpOCtYcnhESTZmTEVTY1J0N1RtandBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndEeXgxT09PNlVqenJjK3YxYlZKVFRFZmV6Y2hneWVWUkFyellUaExIWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZmTmFWUDhCd2l4NVpiNE9ZS2o0SU1FL2hYOHhRZW8yRHp3ZU8rK0NOeVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0k0SlJtUWVMSFZOd0RabGlvWHYyWmFsekg4MkQ2VVYzNFJOQytHSytYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFRITlhaOXpjTWw3emR4MkpyQ3pIdUJHMWRNUlVBRVVFbUJHczkvYXAxWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imsvemo5cldoZ3RjNWtUd3VsT01tREpTZGxpU3hMRytyUFJuaHhGcis5UndJdDZEYjlKWUZQcWV1cGVTbS8vd2FTclJIdjJYS2pqL1ZFN2NpWTRUN2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiJyZ2FsU3Z1THdLcGRXNFVqazZ5ZHp6ZktmTnF6L1BMd2RKeWxOdU15cnVBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0TzlTaDBxY1I4Q0tNZnhOVVRjVUpRIiwicGhvbmVJZCI6IjFlZDYzMzVkLTJhZDAtNDNkMy1iODdlLTFlNmI0NTJhZWJmZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWRWZiSWlYTjJTRHhIRXpXby8vb2RlSkh0OFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieURqRHRLbm91THhpRG8rRG13YU4vdTNKUGFjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpZNDVHNFJCIiwibWUiOnsiaWQiOiIyNTQxMTIxOTIxMTk6NTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ0FTRVlSSE9ERVMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xIbXhQQUJFTFgxNWJjR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZqdE5XVmwwUFk3TCt2T0dDc0t4dlNJaTUxaGFjOGdNemkxNmNkcWtuQmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNZM1NMdTFHNWIvREtYSWFqZC9oNlpHdVJWaDJ0Y3JVUnN6NHRkbnN2NmR5TFFpT3d1aFFEbCtOVUgxT0lUdWdFU1lWalJEQjN3SC9DK0tWNGpycUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3amdJODViaWEyZURIVmoyY2JHUnNMTm1MTGN1Y0xPb1AwN1ZaMGExd0I2V0IrRU9qUGs3UURCdCtPNEt1SmJCbjhkUTdhd3dRdjhRSjljNEUyVWNodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDExMjE5MjExOTo1NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiNDdUVmxaZEQyT3kvcnpoZ3JDc2IwaUl1ZFlXblBJRE00dGVuSGFwSndYIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3NjI1OTIyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9DNCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
