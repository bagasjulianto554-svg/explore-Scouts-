const morse = {
A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",
K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",
U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",
"0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....",
"6":"-....","7":"--...","8":"---..","9":"----."
};
document.getElementById("morseBtn").onclick=()=>{
 const text=document.getElementById("morseInput").value.toUpperCase();
 const result=[...text].map(ch=>ch===" "?"/":(morse[ch]||ch)).join(" ");
 document.getElementById("morseOutput").textContent=result||"Masukkan huruf atau kata terlebih dahulu.";
};
document.querySelector(".menu").onclick=()=>{const n=document.querySelector("nav");n.style.display=n.style.display==="flex"?"none":"flex"};

const questions=[
["Apa kepanjangan dari Pramuka?","Praja Muda Karana",["Praja Muda Karana","Praktik Muda Karya","Pemuda Rakyat Mandiri","Pramuka Muda Kencana"]],
["Berapa jumlah Dasa Darma?","10",["5","8","10","12"]],
["Alat untuk menentukan arah adalah…","Kompas",["Peluit","Kompas","Tongkat","Tenda"]],
["Sandi Morse menggunakan…","Titik dan garis",["Warna","Titik dan garis","Angka Romawi","Gerakan kaki"]],
["Salah satu nilai penting dalam Pramuka adalah…","Kemandirian",["Kemandirian","Kemalasan","Persaingan tidak sehat","Egoisme"]]
];
const quiz=document.getElementById("quiz");
questions.forEach((q,i)=>{
 const d=document.createElement("div"); d.className="quiz-card";
 d.innerHTML=`<h3>${i+1}. ${q[0]}</h3>`+q[2].map((o,j)=>`<label class="option"><input type="radio" name="q${i}" value="${o}"> ${o}</label>`).join("");
 quiz.appendChild(d);
});
document.getElementById("submitQuiz").onclick=()=>{
 let score=0;
 questions.forEach((q,i)=>{const a=document.querySelector(`input[name=q${i}]:checked`);if(a&&a.value===q[1])score++});
 const box=document.getElementById("score"); box.hidden=false;
 box.textContent=`Nilaimu ${score}/${questions.length} — ${score===5?"Luar biasa!":score>=3?"Bagus! Terus berlatih!":"Semangat! Pelajari materinya lagi lalu coba kembali."}`;
 box.scrollIntoView({behavior:"smooth",block:"center"});
};
