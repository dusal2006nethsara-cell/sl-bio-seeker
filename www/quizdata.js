/* =====================================================================
   QUIZ QUESTION BANK — A/L Biology syllabus, Unit 1 - 10
   Shared by quizzes.html (chapter quiz) සහ exam.html (exam simulation).
   =====================================================================
   අලුත් ප්‍රශ්නයක් එකතු කරන්න ඕන chapter එකේ questions array එකට
   මේ විදියට object එකක් එකතු කරන්න (කොමා දාන්න අමතක කරන්න එපා):

   {
     q: "ප්‍රශ්නය මෙතන",
     opts: ["උත්තර 1", "උත්තර 2", "උත්තර 3", "උත්තර 4"],
     correct: 0,   // හරි උත්තරයේ index එක (0 = පළමු එක, 1 = දෙවෙනි එක ආදී)
     explain: "උත්තරය හරි වෙන්නෙ ඇයි කියලා පොඩි විස්තරයක්",
     video: "https://youtube.com/watch?v=XXXXXXXXX"   // (අත්‍යවශ්‍ය නෑ) — මේ ප්‍රශ්නෙට අදාළ video link එක.
                                                        // link එකක් නැත්නම් channel එකේ home page එකටම යනවා.
   }

   Chapter එකකට questions කීයක් හරි දාන්න පුළුවන් — array එකේ ඕන තරම් දාන්න.
   ===================================================================== */

var CHANNEL_URL = 'https://youtube.com/@alacademyseeker?si=mVuXJQLKd8rySnll';

var chapters = [
  {
    id: 'u1', num: 1, title: 'ජීව විද්‍යාව හැඳින්වීම',
    questions: [
      {
        q: "ජීවීන්ගේ ලක්ෂණ පිළිබඳ නිවැරදි ප්‍රකාශය තෝරන්න?",
        opts: ["විකසනය යනු ජීවියකුගේ ජිවිත කාලය තුළ සිදු වන වෙනස්වීම් ය.", "පරිණාමය යනු ප්‍රවේණික විකරණවලට අනුකූලව ජීවියකු තම ජීවිත කාලය තුළ වෙනස් වීමයි", "පරිවෘත්තීය යනු ජීවියකු තුළ සිදුවන ශක්තිය වැය වන සියලු ම රසායනික ක්‍රියාවන්ගේ සමස්තයයි", "උද්දීප්‍යතාව සහ සමායෝජනය යන දෙකම ජීවීන්ගේ චලනය සඳහා අවශ්‍ය ය", "වර්ධනය යනු ජීවියකුගේ වියළි ස්කන්ධයේ වැඩි වීමයි"],
        correct: 3,
        explain: "Biology කියන්නෙ ජීවීන් සහ ජීවී ක්‍රියාවලීන් ගැන අධ්‍යයනය කරන විද්‍යාව හලො.",
        video: "https://youtu.be/mg4qfEWT8rI?si=ebNlJJiUZtuSaKHc"
      },
      {
        q: "ජීවීන් වර්ගීකරණය කිරීමේ විද්‍යාව හඳුන්වන්නේ කුමන නමින්ද?",
        opts: ["Physiology", "Taxonomy", "Ecology", "Genetics", "Anatomy"],
        correct: 1,
        explain: " හලෝ Taxonomy කියන්නෙ ජීවීන් classify කරලා නම් කරන විද්‍යාව.",
        video: "https://youtube.com/watch?v=REPLACE_ME_2"
      }
    ]
  },
  {
    id: 'u2', num: 2, title: 'ජීවයේ රසායනික සහ සෛලීය පදනම',
    questions: [
      {
        q: "01. සෛලයක න්‍යෂ්ටිය පිළිබඳ පහත සඳහන් ප්‍රකාශ අතුරෙන් නිවැරදි වන්නේ කුමක්ද?",
        opts: ["න්‍යෂ්ටි ආවරණයේ පිටත ආස්තරණය කරන ප්‍රෝටීන සූත්‍රිකා වලින් න්‍යෂ්ටි තලාව තැනී ඇත.", "න්‍යෂ්ටි ආවරණයේ ඇතුළත සහ පිටත පටල වෙන් වී ඇත්තේ $20-40~\mu\text{m}$ ක් වූ අවකාශයකිනි.", "ද්‍රව්‍ය ඇතුළු වීම සහ පිටවීම යාමනය කිරීම සඳහා සිදුරු සංකීර්ණයක් න්‍යෂ්ටි ආවරණයේ ඇත.", "න්‍යෂ්ටිකාව න්‍යෂ්ටි තලාව තුළ ගිලී ඇත", "විභාජනය නොවන සෛල තුළ ක්‍රොමැටින් ඇත්තේ තදින් දඟර ගැසුනු ගොනුවක් ලෙසය."],
        correct: 1,
        explain: "න්‍යෂ්ටියේ DNA තියෙන නිසා, සෛලයේ activities control කරන්නෙ ඒකෙන් හලෝ .",
        video: "https://youtu.be/Zmy9616hqGg?si=L0PocNGYigxhu_QU"
      },
      {
        q: "එන්සයිම පිළිබඳ නිවැරදි ප්‍රකාශය තෝරන්න.?",
        opts: ["එන්සයිම අණුවේ ඇති සෑම ඇමයිනෝ අම්ලයක් ම සක්‍රිය ස්ථානයේ හැඩය පවත්වා ගැනීමට දායක වේ", "යාමක අණු එන්සයිම වල යාමක ස්ථාන වලට සහසංයුජ ලෙස බැඳේ", "සමහර සහසාධක එන්සයිම් වලට ස්ථිර ලෙස බැඳේ.", "උපස්තර සාන්ද්‍රණය වැඩි වන තරමට එන්සයිමයක ප්‍රතික්‍රියාවේ වේගය ද වැඩි වේ..", "තරඟකාරී නොවන නිශේධක එන්සයිමයේ සක්‍රිය ස්ථානයට බැඳේ"],
        correct: 2,
        explain: "සහසාදක යනු ප්‍රෝටීනමය නොවන සංගටකයකි හලෝ.",
        video: "https://youtu.be/au9I672wMF0?si=DhgLbWqQkCOp4IxN"
      },
      {
        q: "ප්‍රභාපද්ධති පිළිබඳ පහත සඳහන් ප්‍රකාශ අතුරෙන් නිවැරදි වන්නේ කුමක්ද",
        opts: ["ආලෝකයේ ෆෝටෝන වර්ණක මත ගැටීම නිසා ප්‍රභාපද්ධති I හි සහ ප්‍රභාපද්ධති II හි ඉලෙක්ට්‍රෝන උද්දීපනය වේ", "ප්‍රභාපද්ධති I හි අධි ශක්ති මට්ටමක ඇති ඉලෙක්ට්‍රෝන ප්‍රභාපද්ධති II හි ඇති ප්‍රාථමික ඉලෙක්ට්‍රෝන ප්‍රතිග්‍රාහකය මගින් ප්‍රතිග්‍රහණය කරනු ලැබේ", " ප්‍රභාපද්ධති II හි ඇති උද්දීපනය වූ ඉලෙක්ට්‍රෝන $\text{NADP}^+$ ඔක්සිහරණය කරයි", "ජලය බිඳ හෙලීම නිසා නිදහස් වන ඉලෙක්ට්‍රෝන උද්දීපනය වූ ප්‍රභාපද්ධති I උදාසීන කරයි", "ක්ලෝරොෆිල් a අණුවක් සහ ක්ලෝරොෆිල් b අණුවක් සහිත සංවිධානය වූ ප්‍රෝටීන ප්‍රතික්‍රියා මධ්‍යස්ථාන සංකීර්ණයේ ඇත"],
        correct: 0,
        explain: "මේ පහල වීඩියෝ එකෙන් ඒක මරුවට කියල දෙනවා හලෝ බලනොකෝ  .",
        video: "https://youtu.be/ylJQ1Zed5oM?si=AzYMgNbxaBYnYGnk"
      }
    ]
  },
  {
    id: 'u3', num: 3, title: 'පරිණාමය සහ ජීවීන්ගේ විවිධත්වය',
    questions: [
      {
        q: "ජීවීන් වර්ගීකරණය කිරීමේදී වයිරස කිසිම රාජධානියකට ඇතුළත් කර නොමැත්තේ ඒවා",
        opts: ["නිරීක්ෂණය කළ හැක්කේ ඉලෙක්ට්‍රෝන අන්වීක්ෂයක් භාවිතයෙන් පමණක් බැවිනි", "ප්‍රෝටීන සංශ්ලේෂණ යන්ත්‍රණයක් නොදරන බැවිනි", "ධාරක සෛල තුළදී පමණක් පරිවෘත්තීය ක්‍රියා දක්වන බැවිනි", "ප්‍රවේණික ද්‍රව්‍ය ලෙස RNA දරන බැවිනි", "සෛලීය සංවිධානයක් නොදක්වන බැවිනි"],
        correct: 4,
        explain: "වයිරස මහ අමුතු කස්ටියක්, වුන්ට සයිල සංවිදානයක් නෑ ඒ නිසා ක්‍රිතීමයි. හලෝ ",
        video: "https://youtube.com/watch?v=REPLACE_ME_6"
      },
      {
        q: "එකම විශේශයේ ජීවීන් අතර පවතින විවිධත්වයට කියන්නේ කුමක්ද?",
        opts: ["විශේශ විව්දත්වය", "ජාන විවිදත්වය", "පරිසර විවිදත්වය ", "වාසස්තාන විවිදත්වය", "ගහන විවිදත්වය"],
        correct: 1,
        explain: "ජාන විවිදත්වය  කියන්නෙ එකම විශේශයක ජීවීන් අතර ජාන වෙනස්කම් හලෝ .",
        video: "https://youtu.be/tT0j30WaYMY?si=r_LygV9X1qTrS_3u"
      }
    ]
  },
  {
    id: 'u4', num: 4, title: 'ශාක රූපාකාරය හා කායික විද්‍යාව',
    questions: [
      {
        q: "ද්විලිංගික ජන්මාණු ශාකයක් සහ ප්‍රමුඛ බීජාණු ශාකයක් සහිත සමබීජාණුක භෞමික ශාකයක් අයත් වන වංශය බොහෝ විට",
        opts: ["ඇන්තොෆයිටා විය හැකිය", "බ්‍රයෝෆයිටා විය හැකිය", "ටෙරොෆයිටා විය හැකිය", "නිටොෆයිටා විය හැකිය", "කොනිෆෙරොෆයිටා විය හැකිය"],
        correct: 2,
        explain: "මීවන ශාකය අයිති වංශය හලෝ  .",
        video: "https://youtube.com/watch?v=REPLACE_ME_8"
      },
      {
        q: "ශාකයක පොත්තේ දැකිය හැකි පටක කිහිපයක් වන්නේ?",
        opts: ["ද්විතීයික ප්ලෝයම්, ද්විතීයික ශෛලම සහ සනාල කැම්බියමයි.", "ප්‍රාථමික ශෛලම, ප්‍රාථමික ප්ලෝයම සහ වල්ක කැම්බියමයි", "ද්විතීයික ශෛලම, ද්විතීයික ප්ලෝයම සහ වල්ක කැම්බියමයි.", "ප්‍රාථමික ප්ලෝයම, ද්විතීයික ප්ලෝයම සහ වල්ක කැම්බියමයි", "ප්‍රාථමික ශෛලම, ද්විතීයික ප්ලෝයම සහ සනාල කැම්බියමයි"],
        correct: 3,
        explain: "සනාල කැම්බියමට පිටතින් ඇති සියලුම කොටස මේකට අයිතියි හලෝ .",
        video: "https://youtube.com/watch?v=REPLACE_ME_9"
      }
    ]
  },
  {
    id: 'u5', num: 5, title: 'සත්ව රූපාකාරය හා කායික විද්‍යාව',
    questions: [
      {
        q: "මිනිස් සිරුරේ ඔක්සිජන් ප්‍රවාහනය කරන ප්‍රධාන ප්‍රෝටීනය කුමක්ද?",
        opts: ["ඉන්සියුලින්", "හිමොග්ලොබින්", "කොලැජන්", "කෙරටීන්", "මයෝසින්"],
        correct: 1,
        explain: "Haemoglobin රතු රුධිර සෛල තුල ඔක්සිජන් පරිවහනය   කරනවා යාලු .",
        video: "https://youtube.com/watch?v=REPLACE_ME_10"
      },
      {
        q: "ආහාර ජීර්ණය ආරම්භ වෙන්නේ කොහෙන්ද?",
        opts: ["ආමාශය", "මුඛය", "කුඩා අන්ත්‍රය", "විශාල අන්ත්‍රය", "අග්න්‍යාශය"],
        correct: 1,
        explain: "මුඛයේදී amylase enzyme එකෙන් ජීරනය  ආරම්භ වෙනවා. හොදේ ",
        video: "https://youtube.com/watch?v=REPLACE_ME_11"
      }
    ]
  },
  {
    id: 'u6', num: 6, title: 'ප්‍රවේණි විද්‍යාව (Genetics)',
    questions: [
      {
        q: "විශ්ම යුග්මක උස ශාකයක ප්‍රවේනිදර්ශය  කුමක්ද (T = tall dominant)?",
        opts: ["TT", "Tt", "tt", "TTt", "Tttt"],
        correct: 1,
        explain: "විශ්මයුග්මක කියන්නෙ ඇලීල දෙක වෙනස් වීම — Tt .",
        video: "https://youtube.com/watch?v=REPLACE_ME_12"
      },
      {
        q: "බහුකාර්‍යතාවයට උදාහරන මොනාවාද ?",
        opts: ["ටර්නර්", "ක්ලයින්ෆෙල්ටර්", "සිස්ටික් ෆයිබෝසිස්", "ඩිමෙන්ශියා", "හීනෝන්මාදය "],
        correct: 2,
        explain: "සිස්ටික් ෆයිබෝසිස් ලෙඩේ මහ අමුතුයි හලෝ මේකෙ රෝග ලක්ශන විවිදයි හලෝ.",
        video: "https://youtube.com/watch?v=REPLACE_ME_13"
      },
      {
        q: "ඌනනය මගින් ලැබෙන දුහිතෘ සයිල ගණන කීයද?",
        opts: ["2", "3", "4", "1", "8"],
        correct: 2,
        explain: "ඌනනය මගින් ප්‍රවේනිකව වෙනස් සයිල 4ක් ලැබෙනවා.",
        video: "https://youtube.com/watch?v=REPLACE_ME_14"
      }
    ]
  },
  {
    id: 'u7', num: 7, title: 'අණුක ප්‍රවේණි විද්‍යාව සහ ප්‍රතිසංයෝජිත DNA තාක්ෂණය',
    questions: [
      {
        q: "DNA එකේ නයිට්‍රජනීය බශ්ම  4 මොනවද?",
        opts: ["A, T, G, C", "A, U, G, C", "A, T, G, U", "A, T, C, U", "A, T, G, C, U"],
        correct: 0,
        explain: "DNA එකේ Adenine, Thymine, Guanine, Cytosine — RNA එකේ Thymine වෙනුවට Uracil හොදේ .",
        video: "https://youtube.com/watch?v=REPLACE_ME_15"
      },
      {
        q: "DNA දාම කපන්න   use කරන enzyme එක කුමක්ද?",
        opts: ["DNA පොලිමරේස්", "සීමා එන්ඩොනියුක්ලියේස් ", "ලයිගේස්", "නියුක්ලියේස්  ", "ප්‍රයිමේස් "],
        correct: 1,
        explain: "Restriction enzymes DNA එක specific sequence වලදී cut කරනවා — recombinant DNA technology එකේ key tool එක.",
        video: "https://youtube.com/watch?v=REPLACE_ME_16"
      }
    ]
  },
  {
    id: 'u8', num: 8, title: 'පාරිසරික ජීව විද්‍යාව',
    questions: [
      {
        q: "පරිසර පද්දතියේ  ආහාර දාමයේ මුල්ම මට්ට්ම  වන්නේ කවුද?",
        opts: ["ශාක බක්ශකයෙක්", "මාංශ බක්ශකයෙක්", "හරිත ශාක ", "Decomposers", "Omnivores"],
        correct: 2,
        explain: "Green plants photosynthesis හරහා ආහාර ජාලයේ energy මූලාශ්‍රය සපයනවා.",
        video: "https://youtube.com/watch?v=REPLACE_ME_17"
      },
      {
        q: "Ecosystem එකක ද්‍රව්‍ය recycle කරන organisms මොනවද?",
        opts: ["Producers", "Primary consumers", "Decomposers", "Secondary consumers", "Tertiary consumers"],
        correct: 2,
        explain: "Decomposers (bacteria, fungi) මළ ජීවීන් decompose කරලා nutrients නැවත පරිසරයට එකතු කරනවා.",
        video: "https://youtube.com/watch?v=REPLACE_ME_18"
      }
    ]
  },
  {
    id: 'u9', num: 9, title: 'ක්ෂුද්‍රජීව විද්‍යාව',
    questions: [
      {
        q: "බැක්ටීරියා සෛලයක න්‍යෂ්ටියක් තියෙනවද?",
        opts: ["ඔව්, membrane bound නියුක්ලියස් එකක් තියෙනවා", "නෑ, DNA එක cytoplasm එකේ නිදහසේ තියෙනවා", "ඇතැම් බැක්ටීරියා වලට විතරයි", "නියුක්ලියෝලස් එකක් විතරයි තියෙන්නෙ", "Mitochondria එකේ DNA තියෙන නිසා"],
        correct: 1,
        explain: "Bacteria prokaryotes නිසා membrane-bound nucleus එකක් නෑ, DNA එක nucleoid region එකේ තියෙනවා.",
        video: "https://youtube.com/watch?v=REPLACE_ME_19"
      },
      {
        q: "Virus එකක් සෛලයක් ලෙස සලකන්නේ නැත්තේ ඇයි?",
        opts: ["ඒවා ජීවත් නොවන නිසා", "ස්වාධීනව reproduce වෙන්න බැරි නිසා", "ඒවාට DNA නැති නිසා", "ඒවා ඉතාම කුඩා නිසා", "ඒවාට cell wall නැති නිසා"],
        correct: 1,
        explain: "Virus එකකට host cell එකක් නැතුව replicate වෙන්න බැහැ — ඒක නිසා ඒවා living/non-living දෙකේම properties පෙන්නනවා.",
        video: "https://youtube.com/watch?v=REPLACE_ME_20"
      }
    ]
  },
  {
    id: 'u10', num: 10, title: 'ව්‍යවහාරික ජීව විද්‍යාව',
    questions: [
      {
        q: "Fermentation process එකෙන් industrial level එකේදී සාමාන්‍යයෙන් හදන්නේ මොනවද?",
        opts: ["Alcohol සහ organic acids", "Plastic", "Metal alloys", "Glass", "Ceramics"],
        correct: 0,
        explain: "Yeast වගේ microorganisms fermentation හරහා alcohol, vinegar වගේ ද්‍රව්‍ය industrial scale එකේ produce කරනවා.",
        video: "https://youtube.com/watch?v=REPLACE_ME_21"
      },
      {
        q: "Tissue culture technique එකේ ප්‍රධාන අරමුණ කුමක්ද?",
        opts: ["ශාක රෝග පැතිරවීම", "identical plants විශාල ප්‍රමාණයක් ඉක්මනින් ලබා ගැනීම", "ශාක වර්ණය වෙනස් කිරීම", "පස සාරවත් කිරීම", "ශාක උස වැඩි කිරීම"],
        correct: 1,
        explain: "Tissue culture වලින් disease-free, genetically identical plants mass-produce කරගන්න පුළුවන්.",
        video: "https://youtube.com/watch?v=REPLACE_ME_22"
      }
    ]
  }
];
