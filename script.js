// کدهای تعاملی سایت بعداً اینجا اضافه می‌شوند
console.log('عربی هفتم - سایت با موفقیت بارگذاری شد! 🎉');
(function(){
var questions=[
{stage:1,level:'جمله ترکیبی',art:'👨‍👩‍👦',arabic:'أَیْنَ الطِّفْلُ الَّذي جَلَسَ بَیْنَ أُمِّهِ وَ أَبیهِ؟',text:'ترجمهٔ دقیق این جمله کدام است؟',options:['کودکی که بین مادر و پدرش نشسته کجاست؟','کودکی که کنار مادرش نشسته کجاست؟','کودکی که پشت پدرش نشسته کجاست؟','کودکی که روی مادرش نشسته کجاست؟'],answer:0,hint:'بَیْنَ = بین'},
{stage:1,level:'جمله ترکیبی',art:'🐦',arabic:'أَلْغُرابُ الَّذي فَوْقَ الشَّجَرَةِ، کَبیرٌ أَمْ صَغیرٌ؟',text:'ترجمهٔ درست کدام است؟',options:['کلاغی که بالای درخت است، بزرگ است یا کوچک؟','کلاغی که زیر درخت است، بزرگ است یا کوچک؟','کلاغی که روی زمین است، بزرگ است یا کوچک؟','کلاغی که پشت درخت است، بزرگ است یا کوچک؟'],answer:0,hint:'فَوْقَ = بالای'},
{stage:1,level:'جمله ترکیبی',art:'🚗',arabic:'أَیْنَ الْمِفتاحُ الْمَوْجودُ تَحْتَ مِقْعَدِ السَّیّارَةِ؟',text:'ترجمهٔ دقیق کدام است؟',options:['کلیدی که زیر صندلی ماشین است کجاست؟','کلیدی که روی صندلی ماشین است کجاست؟','کلیدی که پشت صندلی ماشین است کجاست؟','کلیدی که کنار صندلی ماشین است کجاست؟'],answer:0,hint:'تَحْتَ = زیر'},
{stage:1,level:'جمله ترکیبی',art:'🏫',arabic:'أَیْنَ الْمَکتَبَةُ الَّتي أَمامَ الْمَدرَسَةِ وَ خَلْفَ الْمَسجِدِ؟',text:'ترجمهٔ دقیق کدام است؟',options:['کتابخانه‌ای که روبه‌روی مدرسه و پشت مسجد است کجاست؟','کتابخانه‌ای که پشت مدرسه و روبه‌روی مسجد است کجاست؟','کتابخانه‌ای که کنار مدرسه و مسجد است کجاست؟','کتابخانه‌ای که داخل مدرسه و مسجد است کجاست؟'],answer:0,hint:'أَمامَ = روبه‌رو'},
{stage:2,level:'تحلیل عمیق',art:'🐟',arabic:'أَیْنَ السَّمَکَةُ ___ الْماءِ وَ تَحْتَ السَّفینَةِ؟',text:'کدام حرف اضافه؟',options:['فِی','عَلَی','أَمامَ','بَیْنَ'],answer:0,hint:'فِی = در'},
{stage:2,level:'تحلیل عمیق',art:'📚',arabic:'أَیْنَ الْکِتابُ ___ الْمِنضَدَةِ وَ جَنْبَ الْحاسوبِ؟',text:'کدام حرف اضافه؟',options:['عَلَی','تَحْتَ','خَلْفَ','فِی'],answer:0,hint:'عَلَی = روی'},
{stage:2,level:'تحلیل عمیق',art:'❌',arabic:'اختيارُ الْجُمْلَةِ الْخاطِئَةِ',text:'کدام جمله اشتباه است؟',options:['أَیْنَ الْقِطُّ تَحْتَ الْمِنضَدَةِ؟ (گربه زیر میز است)','أَیْنَ الْقِطُّ فَوْقَ الْمِنضَدَةِ؟ (گربه زیر میز است)','أَیْنَ الْقِطُّ جَنْبَ الْمِنضَدَةِ؟ (گربه کنار میز است)','أَیْنَ الْقِطُّ خَلْفَ الْمِنضَدَةِ؟ (گربه پشت میز است)'],answer:1,hint:'فَوْقَ=بالا نه زیر'},
{stage:2,level:'تحلیل عمیق',art:'🚫',arabic:'اختيارُ الْجُمْلَةِ الْخاطِئَةِ',text:'کدام جمله منطقی نیست؟',options:['أَیْنَ الْمِفتاحُ؟ عَلَی الْبابِ.','أَیْنَ الْمِفتاحُ؟ فِی الْحَقیبَةِ.','أَیْنَ الْمِفتاحُ؟ تَحْتَ السَّماءِ.','أَیْنَ الْمِفتاحُ؟ جَنْبَ الْکِتابِ.'],answer:2,hint:'زیر آسمان برای کلید منطقی نیست'},
{stage:3,level:'چالش نهایی',art:'🏆',arabic:'أَیْنَ الْوَلَدُ الَّذي أَمامَ الْبابِ وَ بَیْنَ الشَّجَرَتَیْنِ؟',text:'پسر در چه موقعیتی است؟',options:['روبه‌روی در و بین دو درخت','پشت در و بین دو درخت','روی در و زیر دو درخت','کنار در و پشت دو درخت'],answer:0,hint:'أَمامَ=روبه‌رو، بَیْنَ=بین'},
{stage:3,level:'چالش نهایی',art:'🌍',arabic:'مِنْ أَیْنَ أَنتَ يا وَلَدي؟ أَنا مِنْ قَریَةٍ صَغیرَةٍ قَریبَةٍ مِنْ شِرازَ.',text:'ترجمهٔ دقیق کدام است؟',options:['اهل کجایی پسرم؟ من از روستای کوچکی نزدیک شیرازم','کجایی پسرم؟ من در روستای کوچک نزدیک شیراز هستم','کجا می‌روی پسرم؟ من به روستای کوچک نزدیک شیراز می‌روم','از کجا آمدی پسرم؟ من از روستای کوچک نزدیک شیراز آمدم'],answer:0,hint:'مِنْ أَیْنَ = اهل کجا'},
{stage:3,level:'چالش نهایی',art:'👑',arabic:'أَيْنَ الْکِتابُ الَّذي کانَ عَلَی الْمِنضَدَةِ وَ أَمامَ النّافِذَةِ؟',text:'ترجمهٔ دقیق کدام است؟',options:['کتابی که روی میز و روبه‌روی پنجره بود کجاست؟','کتابی که زیر میز و کنار پنجره بود کجاست؟','کتابی که پشت میز و بالای پنجره بود کجاست؟','کتابی که روی میز و پشت پنجره بود کجاست؟'],answer:0,hint:'عَلَی=روی، أَمامَ=روبه‌رو'},
{stage:3,level:'چالش نهایی',art:'🎯',arabic:'أَیْنَ الْبِنْتُ الَّتي وَقَفَتْ بَیْنَ الْبابِ وَ النّافِذَةِ، وَ أَمامَ الْمِنضَدَةِ؟',text:'دختر در چه موقعیتی ایستاده؟',options:['بین در و پنجره، و روبه‌روی میز','بین در و میز، و روبه‌روی پنجره','پشت در و پنجره، و روی میز','کنار در و پنجره، و زیر میز'],answer:0,hint:'بَیْنَ=بین، أَمامَ=روبه‌رو'}
];
var state={index:0,score:0,seconds:420,timerId:null,locked:false};
function $(id){return document.getElementById(id);}
function faDigits(n){return String(n).replace(/[0-9]/g,function(d){return '۰۱۲۳۴۵۶۷۸۹'[d];});}
function updateStats(){
$('score').textContent=faDigits(state.score)+' / ۲۴';
$('counter').textContent=faDigits(state.index+1)+' / ۱۲';
$('qNumber').textContent='پرسش '+faDigits(state.index+1)+' از ۱۲';
$('progressText').textContent=faDigits(Math.round(state.index/12*100))+'٪';
$('progressBar').style.width=(state.index/12*100)+'%';
var stage=questions[state.index].stage;
$('stageCaption').textContent=stage===1?'مرحلهٔ اول: جمله‌های ترکیبی':stage===2?'مرحلهٔ دوم: تحلیل عمیق':'مرحلهٔ سوم: چالش نهایی';
[1,2,3].forEach(function(n){
var chip=$('stage'+n);
chip.classList.toggle('active',n===stage);
chip.classList.toggle('done',n<stage);
});
}
function renderQuestion(){
var q=questions[state.index];
state.locked=false;
updateStats();
$('levelBadge').textContent='مرحله '+faDigits(q.stage)+' · '+q.level;
$('arabicExample').textContent=q.arabic;
$('questionText').textContent=q.text;
$('hint').textContent=q.hint;
$('artBox').textContent=q.art;
$('feedback').className='feedback';
$('feedback').textContent='';
$('nextBtn').style.display='none';
$('nextBtn').textContent=state.index===questions.length-1?'دیدن نتیجه نهایی':'پرسش بعدی ←';
$('options').innerHTML='';
q.options.forEach(function(option,i){
var b=document.createElement('button');
b.type='button';
b.className='option';
var letter=document.createElement('span');
letter.className='option-letter';
letter.textContent=['الف-','ب-','ج-','د-'][i];
var label=document.createElement('span');
label.className='option-text';
label.textContent=option;
b.appendChild(letter);
b.appendChild(label);
b.addEventListener('click',function(){selectAnswer(i);});
$('options').appendChild(b);
});
}
function selectAnswer(selected){
if(state.locked)return;
state.locked=true;
var q=questions[state.index];
var ok=selected===q.answer;
var buttons=$('options').querySelectorAll('button');
for(var i=0;i<buttons.length;i++){
buttons[i].disabled=true;
if(i===selected)buttons[i].classList.add(ok?'chosen-correct':'chosen-wrong');
}
var feedback=$('feedback');
if(ok){
state.score+=2;
feedback.className='feedback good';
feedback.textContent='آفرین! پاسخ درستی انتخاب کردی. 🌟';
}else{
feedback.className='feedback bad';
feedback.textContent='اشکالی ندارد؛ پاسخ درست نمایش داده نمی‌شود. با تمرکز ادامه بده. 💪';
}
$('score').textContent=faDigits(state.score)+' / ۲۴';
$('nextBtn').style.display='inline-block';
$('hint').textContent=ok?'دو نمره به امتیازت اضافه شد.':'نگران نباش؛ یادگیری با تمرین بهتر می‌شود.';
}
function stopTimer(){if(state.timerId){clearInterval(state.timerId);state.timerId=null;}}
function renderTime(){
var m=Math.floor(state.seconds/60);
var s=state.seconds%60;
$('timer').textContent=faDigits((m<10?'0':'')+m+':'+(s<10?'0':'')+s);
$('timerBox').classList.toggle('warning',state.seconds<=60);
}
function startTimer(){
stopTimer();
renderTime();
state.timerId=setInterval(function(){
state.seconds--;
renderTime();
if(state.seconds<=0){stopTimer();finishGame(true);}
},1000);
}
function finishGame(timeUp){
stopTimer();
$('gamePanel').style.display='none';
$('finishPanel').style.display='block';
$('finalScore').textContent=faDigits(state.score);
var title,evalText,medal,detail;
if(state.score>=22){title='فوق‌العاده بود!';evalText='🏆 درخشان · تسلط عالی';medal='🏆';detail='آفرین! تو یک استاد نقشه‌ها هستی!';}
else if(state.score>=18){title='آفرین، بسیار خوب!';evalText='🥇 خیلی خوب';medal='🥇';detail='پیشرفتت عالی است.';}
else if(state.score>=14){title='خوب پیش رفتی!';evalText='🌟 خوب · رو به پیشرفت';medal='🌟';detail='تمرین بیشتر کمکت می‌کند.';}
else if(state.score>=8){title='تلاشت ارزشمند است!';evalText='🌱 نیازمند تمرین';medal='🌱';detail='درس دهم را مرور کن و دوباره بازی کن.';}
else{title='هر تلاش، یک قدم به جلوست!';evalText='💪 نیاز به مرور';medal='💪';detail='از مرحلهٔ اول شروع کن.';}
$('finishTitle').textContent=title;
$('evaluation').textContent=evalText;
$('medal').textContent=medal;
$('finishDetails').textContent=detail+(timeUp?' زمان به پایان رسید.':'');
}
function startGame(){
state.index=0;
state.score=0;
state.seconds=420;
state.locked=false;
$('startPanel').style.display='none';
$('rules').style.display='none';
$('finishPanel').style.display='none';
$('gamePanel').style.display='block';
renderQuestion();
startTimer();
}
$('startBtn').addEventListener('click',startGame);
$('nextBtn').addEventListener('click',function(){
if(state.index>=questions.length-1){finishGame(false);return;}
state.index++;
renderQuestion();
});
$('restartBtn').addEventListener('click',function(){
stopTimer