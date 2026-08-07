const fs = require('fs');
const path = 'locales/ar-SA.json';
const ar = JSON.parse(fs.readFileSync(path, 'utf8'));

ar.hubspotForm = {
  "headingPart1": "نود أن",
  "headingHighlight": "نسمع منك!",
  "headingPart2": "يرجى ملء النموذج وسنعود إليك في أقرب وقت ممكن.",
  "companyName": "اسم الشركة *",
  "companyWebsite": "موقع الشركة الإلكتروني",
  "companySize": "حجم الشركة",
  "companySizeOptions": {
    "1-10": "1-10 موظفين",
    "11-50": "11-50 موظفاً",
    "51-200": "51-200 موظف",
    "201-1000": "201-1000 موظف",
    "1000+": "أكثر من 1000 موظف"
  },
  "industry": "الصناعة",
  "pilotGoal": "الهدف الأساسي للتجربة",
  "pilotGoalOptions": {
    "replaceSms": "استبدال المصادقة الثنائية القائمة على SMS",
    "preventSimSwap": "منع احتيال تبديل شريحة SIM",
    "reducePhishing": "تقليل التصيد وسرقة الحسابات",
    "secureAi": "تأمين وكلاء الذكاء الاصطناعي",
    "cloudProvider": "مزود سحابة",
    "addLitecoin": "إضافة بنية تحتية لبلوكتشين Litecoin",
    "evaluateMweb": "تقييم أدوات خصوصية MWEB"
  },
  "authMethod": "طريقة المصادقة الحالية",
  "authMethodOptions": {
    "passwordsOnly": "كلمات مرور فقط",
    "passwordsSms": "كلمات مرور + OTP عبر SMS",
    "passwordsEmail": "كلمات مرور + OTP عبر البريد الإلكتروني",
    "totp": "تطبيق مصادقة (TOTP)",
    "passkeys": "مفاتيح المرور / WebAuthn",
    "other": "أخرى"
  },
  "otpVolume": "حجم OTP الشهري المقدر",
  "verifications": "عدد عمليات التحقق الشهرية المقدرة",
  "apiCalls": "عدد طلبات API البلوكتشين الشهرية المقدرة",
  "fraudLabel": "هل تعرضت للاحتيال في آخر 12 شهرًا؟",
  "yes": "نعم",
  "no": "لا",
  "backendLanguage": "لغة البرمجة الخلفية الأساسية",
  "backendLanguageOptions": {
    "nodejs": "Node.js",
    "python": "Python",
    "go": "Go",
    "java": "Java",
    "php": "PHP",
    "ruby": "Ruby",
    "csharp": "C# / .NET",
    "other": "أخرى"
  },
  "deployment": "تفضيل النشر",
  "deploymentOptions": {
    "saas": "سحابة Kakr (SaaS)",
    "onPrem": "استضافة ذاتية (On-Prem)",
    "hybrid": "هجين"
  },
  "useCase": "وصف حالة الاستخدام",
  "leadName": "اسم المسؤول التقني *",
  "leadEmail": "البريد الإلكتروني للمسؤول التقني *",
  "securityEmail": "البريد الإلكتروني لجهة اتصال الأمان",
  "phone": "رقم الهاتف",
  "searchCountry": "ابحث عن دولة...",
  "submit": "إرسال",
  "done": "تم",
  "successTitle": "شكراً لك!",
  "successMessage": "لقد استلمنا رسالتك. سنتواصل معك خلال يوم عمل واحد.",
  "errorRequired": "يرجى ملء جميع الحقول المطلوبة (*).",
  "errorGeneric": "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
  "errorFailed": "فشل الإرسال. يرجى المحاولة مرة أخرى."
};

fs.writeFileSync(path, JSON.stringify(ar, null, 2), 'utf8');
console.log('Arabic locale updated successfully');
