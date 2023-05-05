// todo english and bangle version

const BangleQuestion = [
	{
		number: 1,
		question: 'ফ্রান্সের রাজধানী কোনটি?',
		options: ['রোম', 'প্যারিস', 'বার্লিন', 'মাদ্রিদ'],
		answer: 'প্যারিস',
	},
	{
		number: 2,
		question: 'পৃথিবীর সবচেয়ে বড় দেশ হল কোনটি?',
		options: ['কানাডা', 'চীন', 'রাশিয়া', 'মার্কিন যুক্তরাষ্ট্র'],
		answer: 'রাশিয়া',
	},
	{
		number: 3,
		question: 'পৃথিবীর সবচেয়ে ছোট মহাসাগর কোনটি?',
		options: [
			'আর্কটিক মহাসাগর',
			'ভারতীয় মহাসাগর',
			'প্রশান্ত মহাসাগর',
			'দক্ষিণ মহাসাগর',
		],
		answer: 'আর্কটিক মহাসাগর',
	},
	{
		number: 4,
		question: 'সূর্য একটি গ্রহ যা সবচেয়ে কাছে অবস্থিত?',
		options: ['ভেনাস', 'মার্কিউরি', 'মঙ্গল', 'বৃহস্পতি'],
		answer: 'মার্কিউরি',
	},
	{
		number: 5,
		question: 'অস্ট্রেলিয়ার রাজধানী কোনটি?',
		options: ['মেলবার্ন', 'সিডনি', 'ক্যানবেরা', 'ব্রিসবেন'],
		answer: 'ক্যানবেরা',
	},
	{
		number: 6,
		question: 'পৃথিবীর সবচেয়ে বড় প্রাণী কোনটি?',
		options: ['হাতি', 'জিরাফ', 'ব্লু ওয়েল', 'হিপোপোটামাস'],
		answer: 'ব্লু ওয়েল',
	},
	{
		number: 7,
		question: 'জাপানের মুদ্রা কি?',
		options: ['ইউরো', 'ডলার', 'পাউন্ড', 'ইয়েন'],
		answer: 'ইয়েন',
	},
	{
		number: 8,
		question: "'টু কিল এ মকিংবার্ড' নামক উপন্যাসটি কে লেখেছেন?",
		options: ['হার্পার লি', 'জে.কে. রোলিং', 'স্টিফেন কিং', 'জর্জ অরওয়েল'],
		answer: 'হার্পার লি',
	},
	{
		number: 9,
		question: 'পৃথিবীর সবচেয়ে লম্বা প্রাণী কোনটি?',
		options: ['জিরাফ', 'হাতি', 'হিপোপাটামাস', 'রাইনো'],
		answer: 'জিরাফ',
	},
	{
		number: 10,
		question: "কোন প্রখ্যাপক ছবিটি 'মোনা লিসা' চিত্রিত করেছেন?",
		options: [
			'ভিনসেন্ট ভ্যান গোগ',
			'পাবলো পিকাসো',
			'লিওনার্দো দা ভিঞ্চি',
			'ক্লোড মনে',
		],
		answer: 'লিওনার্দো দা ভিঞ্চি',
	},
	{
		number: 11,
		question: 'স্বর্ণের রাসায়নিক প্রতীক কী?',
		options: ['Ag', 'Au', 'Cu', 'Fe'],
		answer: 'Au',
	},
	{
		number: 12,
		question: 'মার্কিন যুক্তরাষ্ট্রের বর্তমান রাষ্ট্রপতি কে?',
		options: [
			'জো বাইডেন',
			'ডোনাল্ড ট্রাম্প',
			'বারাক ওবামা',
			'জর্জ ডাবলিউ. বুশ',
		],
		answer: 'জো বাইডেন',
	},
	{
		number: 13,
		question: 'পৃথিবীর সবচেয়ে বড় মরুভূমি কোনটি?',
		options: [
			'সাহারা মরুভূমি',
			'আরবিয়ান মরুভূমি',
			'গোবি মরুভূমি',
			'অ্যান্টার্কটিক মরুভূমি',
		],
		answer: 'অ্যান্টার্কটিক মরুভূমি',
	},
	{
		number: 14,
		question: 'সাবধানতার সাথে কোন পরিবহন চলানো উচিত না?',
		options: ['জাহাজ', 'হেলিকপ্টার', 'বাস', 'বাইক'],
		answer: 'বাইক',
	},
	{
		number: 15,
		question: 'দৈনিক কণ্ঠের সম্পাদক কে?',
		options: [
			'আবদুল কদের সরকার',
			'নজরুল ইসলাম',
			'ইয়ার আবদুল্লাহ',
			'ইফতেখার চৌধুরী',
		],
		answer: 'আবদুল কদের সরকার',
	},
	{
		number: 16,
		question: 'বাংলাদেশের জাতীয় সঙ্গীত কী?',
		options: [
			'স্বাধীনতা তুমি',
			'আমার সোনার বাংলা',
			'পুরনো বাগানের সুর',
			'শেষ করে আমি',
		],
		answer: 'আমার সোনার বাংলা',
	},
	{
		number: 17,
		question: 'ইউরোপের সবচেয়ে দীর্ঘ নদী কোনটি?',
		options: ['ভোল্গা', 'ডনাউ', 'এলবা', 'সিন'],
		answer: 'ভোল্গা',
	},
	{
		number: 18,
		question: 'পৃথিবীর উপর মাটির স্থানাংক কত?',
		options: [
			'23.5 ডিগ্রি উত্তর',
			'0 ডিগ্রি',
			'23.5 ডিগ্রি দক্ষিণ',
			'45 ডিগ্রি দক্ষিণ',
		],
		answer: '23.5 ডিগ্রি উত্তর',
	},
	{
		number: 19,
		question: 'মহাকাশে সবচেয়ে দূরবর্তী গ্যালাক্সি কোনটি?',
		options: [
			'পিনওয়ি গ্যালাক্সি',
			'আন্দ্রোমেডা গ্যালাক্সি',
			'উড়নচন্ডী গ্যালাক্সি',
			'সোমবার গ্যালাক্সি',
		],
		answer: 'সোমবার গ্যালাক্সি',
	},
	{
		number: 20,
		question: 'বাংলাদেশের স্বাধীনতা দিবস কত মার্চ?',
		options: ['25 মার্চ', '26 মার্চ', '27 মার্চ', '28 মার্চ'],
		answer: '26 মার্চ',
	},
	{
		number: 21,
		question:
			'কোন সাধুর জন্ম ও বিদায় তারিখ বিশ্ব ধর্ম দিবস হিসাবে পালন করা হয়?',
		options: [
			'বুদ্ধ ৮ অক্টোবর',
			'শঙ্কর ১২ জানুয়ারি',
			'ক্রিশ্চিয়ন ২৫ ডিসেম্বর',
			'ইসলাম ১৫ জুলাই',
		],
		answer: 'বুদ্ধ ৮ অক্টোবর',
	},
	{
		number: 22,
		question: "সিনেমা জগতে 'ওস্কার' পুরষ্কার কোন দেশ প্রদান করে?",
		options: ['আমেরিকা', 'ফরান্স', 'ইংল্যান্ড', 'ফ্রান্স'],
		answer: 'আমেরিকা',
	},
	{
		number: 23,
		question:
			'গণপ্রজাতন্ত্রী বাংলাদেশের সংবিধানে কতটি মৌলিক অধিকার উল্লেখ করা আছে?',
		options: ['৯ টি', '১০ টি', '১১ টি', '১২ টি'],
		answer: '১১ টি',
	},
	{
		number: 24,
		question: 'পৃথিবী কোন দিকে ঘুরে?',
		options: ['পূর্ব', 'পশ্চিম', 'উত্তর', 'দক্ষিণ'],
		answer: 'পূর্ব',
	},
	{
		number: 25,
		question: 'পৃথিবীর গুরুত্বপূর্ণ বায়ুমণ্ডল কোনটি?',
		options: ['সমুদ্র হাওয়াই', 'ওজন', 'আদ্রণালিন', 'হাইড্রোজেন'],
		answer: 'হাইড্রোজেন',
	},
	{
		number: 26,
		question: 'বিশ্বের প্রথম স্কুলটি কোথায় স্থাপিত করা হয়?',
		options: ['আমেরিকা', 'ইংল্যান্ড', 'গ্রীস', 'রোম'],
		answer: 'গ্রীস',
	},
	{
		number: 27,
		question: 'বিশ্বের সবচেয়ে বড় স্ফটিক লঙ্ঘন জীবাণু কোনটি?',
		options: [
			'ইউরোপিয়ান এডার',
			'কমন কোলফিশার',
			'অ্যালাস্কান মালমুত',
			'বড় প্যান্ডা',
		],
		answer: 'ইউরোপিয়ান এডার',
	},
	{
		number: 28,
		question:
			'ইংরেজি দক্ষিণ আফ্রিকার অধীনতা থেকে মুক্তি পেয়ে তৈরি হয়েছিল কোন দেশ?',
		options: ['আফগানিস্তান', 'বাংলাদেশ', 'ইন্ডোনেশিয়া', 'সৌদি আরব'],
		answer: 'বাংলাদেশ',
	},
	{
		number: 29,
		question:
			'মধ্যযুগের সময় একজন ব্যক্তি যার কাজ থেকে আধীন হতে পারে, সেই ব্যক্তি কি ছিলেন?',
		options: [
			'কাস্ট বন্ধু',
			'আধুনিক চিকিৎসক',
			'ব্যবসা কর্মকর্তা',
			'অভিনেতা',
		],
		answer: 'কাস্ট বন্ধু',
	},
	{
		number: 30,
		question:
			'রবীন্দ্রনাথ ঠাকুর প্রথম সন্ধ্যাঘর কবি হিসেবে পরিচিত ছিলেন, কিন্তু তার আরেকটি প্রথম ছিল কি?',
		options: ['নাট্যকার', 'শিক্ষক', 'চিত্রশিল্পী', 'সংগীতকার'],
		answer: 'শিক্ষক',
	},
	{
		number: 31,
		question:
			'প্রথম বিশ্বযুদ্ধের প্রারম্ভ হওয়ার কারণ হিটলারের কি সিদ্ধান্ত ছিল?',
		options: [
			'হাইক করা',
			'পাসপোর্ট না থাকা',
			'ফ্রান্সের যন্ত্রপাতি আক্রমণ',
			'জার্মানির ভূমিহীনতা প্রশ্ন',
		],
		answer: 'ফ্রান্সের যন্ত্রপাতি আক্রমণ',
	},
	{
		number: 32,
		question: 'বিশ্ব মানবাধিকার দিবস কখন পালন করা হয়?',
		options: ['১ মে', '৩০ এপ্রিল', '৮ মার্চ', '১০ ডিসেম্বর'],
		answer: '১০ ডিসেম্বর',
	},
	{
		number: 33,
		question: 'বর্তমানে বিশ্বের সবচেয়ে বড় জনসংখ্যার দেশ কোনটি?',
		options: ['চীন', 'রাশিয়া', 'ভারত', 'মার্কিন যুক্তরাষ্ট্র'],
		answer: 'চীন',
	},
	{
		number: 34,
		question: 'মহাবিশ্বের উৎপত্তি কখন ঘটে?',
		options: [
			'১২ বিলিয়ন বছর আগে',
			'১৩.৮ বিলিয়ন বছর আগে',
			'১৫ বিলিয়ন বছর আগে',
			'২০ বিলিয়ন বছর আগে',
		],
		answer: '১৩.৮ বিলিয়ন বছর আগে',
	},
	{
		number: 35,
		question: 'ভারতের প্রথম রাষ্ট্রপতি কে ছিলেন?',
		options: [
			'রাজেন্দ্র প্রসাদ',
			'ডঃ সার্বপল্লি রাধাকৃষ্ণন',
			'প্রফুল্ল চন্দ্র সেন',
			'ডঃ রাজেন্দ্র প্রসাদ',
		],
		answer: 'ডঃ রাজেন্দ্র প্রসাদ',
	},
	{
		number: 36,
		question: 'গোটা বিশ্বযুদ্ধে আমেরিকার প্রথম উপস্থাপক কে ছিলেন?',
		options: [
			'ফ্রেডারিক অলেকসান্ডার',
			'হেনরি কিসিং',
			'ওয়াল্টার হিকেল',
			'জন ফর্ড',
		],
		answer: 'জন ফর্ড',
	},
	{
		number: 37,
		question: 'ইতালির ফ্লোরেন্সেজন্মগ্রহণ করেছিলেন কোন প্রখ্যাত শিল্পী?',
		options: [
			'ভিনসেন্ট ভ্যান গগ',
			'লিওনার্দো দা ভিঞ্চি',
			'মাইকেল এঞ্জেলো',
			'স্যান্ট রেমো',
		],
		answer: 'লিওনার্ডো দা ভিঞ্চি',
	},
	{
		number: 38,
		question:
			'একজন ব্যক্তি যেন বিশ্বের সবচেয়ে বৃহৎ লিঙ্গ বিশেষজ্ঞ হিসেবে পরিচিত ছিলেন, তাঁর নাম কি?',
		options: [
			'অ্যালফ্রেড কিনসি',
			'সিগমুন্ড ফ্রয়েড',
			'জন হারি',
			'ডকটর বেনজামিন স্পক',
		],
		answer: 'সিগমুন্ড ফ্রয়েড',
	},
	{
		number: 40,
		question:
			'প্রথম বিশ্বযুদ্ধের জন্য জাপানের যুক্তরাষ্ট্রে হামলা করা হয়েছিল কিসের কারণে?',
		options: ['পেট্রোল', 'আইরন ওয়ার্ক', 'সিরামিক', 'আভ্যন্তরীণ মেশিন'],
		answer: 'পেট্রোল',
	},
	{
		number: 41,
		question:
			'বিশ্ব যুদ্ধ ২-এর পর কোন দেশ উন্নয়নশীল দেশ হিসেবে চিহ্নিত হয়?',
		options: ['ফ্রান্স', 'গার্মানি', 'যুক্তরাষ্ট্র', 'জাপান'],
		answer: 'জাপান',
	},
	{
		number: 42,
		question:
			'রোমাঞ্চকর সিনেমা নির্মাতা ভিসেন্টে মিনেল্লির কোন ছবিটি অস্কার পেয়েছিল?',
		options: [
			'দ্য গডফাদার',
			'থ্যাট ওল্ড ম্যান',
			'দ্য আলিংস',
			'ইটালিয়ান জব',
		],
		answer: 'থ্যাট ওল্ড ম্যান',
	},
	{
		number: 43,
		question: 'একটি ওষুধকে প্রথম গবেষণা করেছিলেন কে এবং সেটি কী ছিল?',
		options: [
			'এডওয়ার্ড জেনার, স্ট্রেপটোমাইসিন',
			'এম আই টি ফ্লেমিং, পেনিসিলিন',
			'এমিলি গ্রেচাম, নাইট্রোজেন',
			'জানেট গ্রেচাম, বৈটামিন সি',
		],
		answer: 'এম আই টি ফ্লেমিং, পেনিসিলিন',
	},
	{
		number: 44,
		question: 'হাতরানির যুদ্ধে কোন বাংলাদেশি সেনানী জীবন গেঁজে দিয়েছিলেন?',
		options: [
			'বির উত্তম হানা',
			'মতিউর রহমান',
			'আব্দুল কাদির সিদ্দিকি',
			'শহীদ সুদিপ',
		],
		answer: 'বির উত্তম হানা',
	},
	{
		number: 45,
		question: 'পৃথিবীর সর্বোচ্চ পর্বত শৃঙ্গ কোনটি?',
		options: ['হিমালয়', 'আলপস', 'কিলিমঞ্জারো', 'দেওয়ালা'],
		answer: 'মাউন্ট এভারেস্ট',
	},
	{
		number: 38,
		question: 'হাইড্রোজেন পানির উপাদান কোনটি?',
		options: ['H2O', 'CO2', 'NaCl', 'HCl'],
		answer: 'H2O',
	},
	{
		number: 39,
		question: 'সরঞ্জাম বিদ্যুৎতত্ত্বে, একটি ক্ষুদ্রতম পরিবাহী কোনটি?',
		options: ['তার', 'প্রবাহী পাইপ', 'কেবল', 'ফ্যান'],
		answer: 'তার',
	},
	{
		number: 40,
		question: 'একটি দ্রবণের pH এর মান কত হলে সেটি নিউট্রাল হয়?',
		options: ['7.5', '6.0', '8.0', '7.0'],
		answer: '7.0',
	},
	{
		number: 41,
		question: 'অ্যামোনিয়া কোন ধাতুর সাথে একত্রিত হয়?',
		options: ['চাঁদি', 'লোহা', 'স্বর্ণ', 'পাত্র'],
		answer: 'লোহা',
	},
	{
		number: 42,
		question:
			'একটি গ্যাসের সম্পূর্ণ পরিবাহী শক্তি কোন লক্ষণ অনুসারে নির্ণয় করা হয়?',
		options: [
			'গাড়ির ঘনত্ব',
			'গাসের তাপমাত্রা',
			'গাসের দাব',
			'গাসের বৈদ্যুতিন চাপ',
		],
		answer: 'গাসের তাপমাত্রা',
	},
	{
		number: 43,
		question: 'উপাদানগুলি যা অণুগুলি থেকে গঠিত, তাকে কি ধরনের উপাদান বলে?',
		options: [
			'মৌলধাতু',
			'জনসাধারণ উপাদান ',
			'নিউক্লিক অ্যাসিড',
			'মেটালইক উপাদান',
		],
		answer: 'মৌলধাতু',
	},
	{
		number: 44,
		question: 'একটি সমান্তরাল পায়ের উপর দীর্ঘতম বিন্দু হল?',
		options: [
			'শূন্যবিন্দু',
			'উচ্চতম বিন্দু',
			'নিম্নতম বিন্দু',
			'উভয়টি নয়',
		],
		answer: 'নিম্নতম',
	},
	{
		number: 45,
		question: 'নিম্নের কোনটি উচ্চ তাপমাত্রায় ঘটে?',
		options: ['জলের ফুটকা', 'ডায়মন্ড', 'লবণ', 'আয়রন'],
		answer: 'ডায়মন্ড',
	},
	{
		number: 46,
		question: 'নিম্নের কোনটি দুর্বল এসিড?',
		options: [
			'হাইড্রোক্লোরিক এসিড',
			'সালিসিলিক এসিড',
			'সালফুরিক এসিড',
			'নাইট্রিক এসিড',
		],
		answer: 'সালিসিলিক এসিড',
	},
	{
		number: 47,
		question: 'বিশুদ্ধ জলের প h এর মান কত?',
		options: ['7', '8', '9', '10'],
		answer: '7',
	},
	{
		number: 48,
		question: 'যে উৎস থেকে হাইড্রোজেন উৎপাদন হয়?',
		options: ['বায়ু', 'গ্রীষ্মমন্থন', 'পানি', 'পেট্রলিয়াম'],
		answer: 'পানি',
	},
	{
		number: 49,
		question: 'অক্সিজেন নিঃশ্বাস দেওয়া হলে কোন গ্যাস উৎপন্ন হয়?',
		options: [
			'কার্বন ডাইঅক্সাইড',
			'সালফার ডাইঅক্সাইড',
			'নাইট্রোজেন অক্সাইড',
			'ওজন',
		],
		answer: 'কার্বন ডাইঅক্সাইড',
	},
	{
		number: 50,
		question: 'জৈব উপাদানের প্রধান উৎস কোনটি?',
		options: ['ফসফরাস', 'জিংক', 'ইউরেট্রা', 'আয়রন'],
		answer: 'ইউরেট্রা',
	},
	{
		number: 51,
		question: 'একটি পরমাণুর প্রোটন সংখ্যা কত?',
		options: [
			'ইলেকট্রন সংখ্যার সমান',
			'ইলেকট্রন সংখ্যার চারগুন',
			'ইলেকট্রন সংখযার সমান',
			'ইলেকট্রন সংখ্যার দ্বিগুণ',
		],
		answer: 'ইলেকট্রন সংখ্যার সমান',
	},
];
