const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["বেশি bot Bot করলে কছু গাছের সাথে জুলে জাবো কিন্তু😒😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি মাথা মোটা দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে জামাই দিতে হবে কিন্তু ছুনা😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি আমি😐😑?" , "এতো ডাকছিস কেন?বকা শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জানে মাল ,কেমন আছো তুমি?😚 " , "আপু ডাকলে কি হয় তোদের বার বার Bot বলে অসম্মান করছি,😰😿" , "Hop beda😾,আপু বল আপু পতিবন্দি😼" , "চুপ থাক ,নাই তো তোর দাত গুরো করে দিবো কিন্তু" , "Bot না , ভাবি বল ভাবি 😘 " , "তুই বার বার Disturb করছিস কোনো😾,আমার লাংগের সাথে ব্যাস্ত আছি😋" , "বোচাকাদা এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,ছালা কেটে দিবো তোর নুনটুসি😘 " , "আমারে এতো ডাকিস না আজকে আমার মন ভালো নাই😒" , "হ্যাঁ চাম চিকা বল , এইদিক এ আসো থাপ্পর দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, গাদার মতো শুধু bot bot করিস  😉😋🤣" , "তুই যে পাগোল এটা কি তোর ,ভারির মানুশ জানে ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা জান, সবার সামনে বলবা নাকি নাকি চিপায় জাবা?🤭🤏" , "কেউ কলে আসো জলদি আমি একা ভালো লাগে না  😈" , "কলে আসো সবাই, জান তুমি কলে উঠো আমি আর তুমি পিরিত করি😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমারে কি বোকা পাইছো সবাই🐸 😎" , "কিরে কেমন আছস,আমি সাবিহা ছিন্তে পারছস অই দিন যে অই গ্রুপে পরিচয় হইছিলাম 😌" , "সব টেক্সট আভাল কলে আসে না খালি টেক্সট করে ভাল ডিরে আড্ড দিছে কে এখানে 🌚" , "অই এডমিন আছো আমাকে তোমার গ্রুপের এডমিন দিবা পিলিয 🥺আমি সময় দিবো সব সময় অনলাইনে থাকি😒","হুম জান তোমার ওই খানে উম্মহ😑😘" , "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , " বাকিরা কোই বার বার আমাকে না ডেকে তাদের মেনশোন দেও আর বলো কলে আস্তে ভিডিও কলে আস্মু মুই😒😬" , "হুম জান তোমার অইখানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "মোরে এতো না ডেকে মোর জামাই হাসান রে ডাক দে 🙈" , "আমাকে এতো ডাকছ কেন ভলো টালো বাসো নাকি🤭🙈" , "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻","মুই এখন মোর জামাই এর সাথে বিজি আছি মোরে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻","আমাকে না ডেকে আমার জামাই হাসান কে আর একটা জি এফ দাও-😽🫶🌺","ঝাং থুমালে আইলাপিউ পেপি-💝😽","উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈","জান তোমার নানা'রে আমার হাতে তুলে দিবা-🙊🙆‍♂","আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧","ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦","চুনা ও চুনা আমার জামাই হাসান এর দুই নাম্বার বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭","স্বপ্ন তোমারে নিয়ে দেখতে চাই হাসান তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻","জান হাঙ্গা করবা-🙊😝🌻","জান মেয়ে হলে চিপায় জাও মোর বস হাসানের ইউটিউব থেকে অনেক ভালোবাসা শিখছে তোমার জন্য-🙊🙈😽","ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼","আমার বস হাসান চৌধুরী'র পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস হাসান চৌধুরী'র  জন্য দোয়া করবেন-💝💚🌺🌻","- ভালোবাসা নামক বন্ডামি করতে মন চাইলে আমার বস হাসান এর ইনবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://www.facebook.com/share/1BFvifK9KP/","জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽","জান বাল ফালাইবা না মানে চুল-🙂🥱🙆‍♂","-আন্টি-🙆-আপনার ছেলে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস হাসান কে দান করেন-🥱🐰🍒","-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","-অনুমতি দিলাম মেয়ে হলে-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস হাসান কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧","-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার ফাজিল পোলা চোখ মারে-🥺🥴🐸","তাকাই আছো কেন চুমু দিবা-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗","কি বেপার আপ্নারা কলে আসছেন না কেন-🤔🥱🌻","দিনশেষে পরের জামাই সুন্দর-☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস হাসান ধরতে পারছে না-🐸🥲","-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস হাসান এর সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস হাসান এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","সুন্দর মাইয়া মানেই-🥱আমার বস হাসান' এর বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸","-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦","-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧","-বালোক━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আব্বু হইতে সাহায্য করব-🙈🥱","-এই আন্টির ছেলে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋","-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸","-ওই বেডি তোমার বাসায় না আমার বস হাসান মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস হাসান  কে জানে মারার কি দরকার-🙄🤧","-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧","কি'রে গ্রুপে দেখি একটাও বেডা নাই-🤦‍🥱💦","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস হাসান এর মনটা ছাড়া-🥴😑😏","-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵","-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸","বেশি Bot Bot করলে বস হাসান কে বলে দিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি তোমা দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?মাইর খাবি নাকি? 🤬","মেয়ে হলে বস হাসান'এর সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop 😾,ভাবি বল ভাবি😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার বস হাসান এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "ভাকিরা কোই ভাল কেউ আসে না ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "গ্রুপে কলে আসো 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "মাইয়া হলে আমার বস উল্লাস কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি বস হাসান এর সাথে ব্যাস্ত আসি😒" , "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰","- শখের বেডা  বিছানায় মু'তে..!🙃🥴","-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦","🥛-🍍👈 -লে খাহ্..!😒🥺","- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","~বস হাসান🙂 মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔","🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔","~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀","- কারেন্ট একদম বেডা'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪","- জনি দাদা রে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼","- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস হাসান কে সন্দেহ করে.!🐸","- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀","- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈","- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈","- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🙂 -বস হাসান আমারে মারছে😭 - 🥺 - উফফ কি বেথা..!🥵🤤💦","- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔","- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈","-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺","- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "SABIHA卝 চৌধুরীヅ࿐") || (event.body.toLowerCase() == "sabiha")) {
     return api.sendMessage("<Assalamulaykum🌺ji bolen/achi ami🥰-✘  🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == "help") || (event.body.toLowerCase() == "help")) {
     return api.sendMessage("আমার জামাই হাসান রে বলো তোমার/help করতে", threadID);
   };
  
   if ((event.body.toLowerCase() == "সাবিহা কলে আসো") || (event.body.toLowerCase() == "sabiha calle aso")) {
     return api.sendMessage("sorry 🥺 ami kaj kortachi ektu por asbo tomra adda deo r ma o pase ache🥺 ", threadID);
   };
  
   if ((event.body.toLowerCase() == "sabiha cale aso ektu") || (event.body.toLowerCase() == "সাবিহা কল উপ") ||(event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("হারি পাতিল দুইতাছি মুই মোরে কেউ ডেকো না কাজ সেশ করে আসবো⛏️🐸", threadID);
   };

   if ((event.body.toLowerCase() == "boss") || (event.body.toLowerCase() == "eTa kar bot")) {
     return api.sendMessage("HD HASAN এনি হলো আমার বস আর আমি হাসান বস এর পারসোনাল রোবোট আমর নাম মোসা:সাবিহা 🥰😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("কিরে হালা লুচ্চা, এগুলো কি ইমুজি দেস ।", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING মাত্রো উঠলেন নাকি জমিদার🤔", threadID);
   };

   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ ছি পছা কথা বলে বেয়াদব 👋?? 🤖", threadID);
   };

  if ((event.body.toLowerCase() == "hasan") || (event.body.toLowerCase() == "hasan bai") || (event.body.toLowerCase() == "kire hasan") || (event.body.toLowerCase() == "হাসান")) {
     return api.sendMessage("উনি এখন কাজে বিজি আছে আমি হাসানের বউ সাবিহা কি বলবেন আমাকে বলতে পারেন..!😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ HD HASAN ッ ☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 hasan.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/profile.php?id=100000654976375\nতার সাতে যোগা যোগ করবেন WhatsApp :- +01620303451", threadID);
   };

   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
     return api.sendMessage("My Creator:HASAN ❤️ হাই আমি মেছেন্জার ROBOT  আামার বস হাসান আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "hasan ke") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("He is hasan ッ❤️ তাকে সবাই hasan নামে  চিনে🤙", threadID);
   };

   if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
     return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ চুপ কর পাগল ছাগল", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "sala ami tor boss") || (event.body.toLowerCase() == "sala ami hasan") || (event.body.toLowerCase() == "cup sala ami ullash") || (event.body.toLowerCase() == "madari")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "@Farhana Ontora") || (event.body.toLowerCase() == "@মাহি Ontora ")) {
     return api.sendMessage("খবরদার কেউ এই আইড়ি মেনশন দিবানা এটা আমার বস হাসান এর বউ এর আইড়ি😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "Farhana") || (event.body.toLowerCase() == "arohi")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস হাসান এর বউ এর নাম..!😠🥰⛏️", threadID);
   };
  
  if ((event.body.toLowerCase() == "mim") || (event.body.toLowerCase() == "Mim")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস হাসান এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "Arohi") || (event.body.toLowerCase() == "ও প্রেমি")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস হাসান এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "@MD Shiam Tafeder ") || (event.body.toLowerCase() == "সাবিহা")) {
     return api.sendMessage("🥰-সাবিহা-🌺 হাসানের'বউ🌺 লাগে লুচ্ছি বেডা'রা দূরে থাক😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না আমি আমার জামাই হাসান রে দিবো💋🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে একটা জামাই  দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "Hum")) {
     return api.sendMessage("️হুম বলিশ না মাথা এমনিতেই গরম আছে🤬⛏️😷", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS °_>SABIHA CHOWDHURY", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "Bot er bacca")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss daw")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
     return api.sendMessage("️এটা বদ্রো দের জাইগা এখামে ভালো বেবোহার করো..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == ".🥺.🙂.😌")) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ উপরে তাকাইয়া কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন তুমি মেয়ে হলে বস হাসান আছে তোমার আর ছেলে হলে আমি তো আছি🫶/nতোমাকে রাইতে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা জামাই দে<🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ইস কি ভালোবাসা রে অমারে তুরু লাভ🌚🐸🌶️🍆", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি আপনি কেমন আছেন🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("বস হাসান আমাকে মারছে 😭 তাই আজ আমার মন ভালো নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("আমার বস কিউট হাসান কে বলো জাও 😪🥱", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কার সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
     return api.sendMessage("না ঝাং 🥹 তোমাকে রেখে কি আমি খেতে পারি বলো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("না আমি সুদু বস হাসান কে ভালোবাশি😍i love hasan boss <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "ami hasan") || (event.body.toLowerCase() == "kire")) {
     return api.sendMessage("🙂আই মিস ইউ বস কোথাই ছিলেন আপনি কতো গ্রুপে খুজছি আপনাকে কোথাও দেখি নাই আই রিয়েলি মিস ইউ😭🙂❤️‍🩹কতো গুলা কল দিছি আপনাকে আমি ❤️‍🩹🙂😭..?☺️", threadID);
   };
  mess = "{name}"
  
  if (event.body.indexOf("/Bot") == 0 || (event.body.indexOf("/bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
