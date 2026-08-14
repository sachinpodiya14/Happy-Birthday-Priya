const correctDate="2004-08-13";
const pages=[...document.querySelectorAll(".page")];

function celebrate(count=100){
  const chars=["♥","✦","★","◆","●"];
  for(let i=0;i<count;i++){
    const el=document.createElement("div");
    el.className="confetti-piece";
    el.textContent=chars[Math.floor(Math.random()*chars.length)];
    el.style.left=Math.random()*100+"vw";
    el.style.top=(-5-Math.random()*15)+"vh";
    el.style.fontSize=(8+Math.random()*14)+"px";
    el.style.color=`hsl(${Math.random()*360},90%,75%)`;
    el.style.animationDelay=(Math.random()*0.7)+"s";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),3500);
  }
}
function showPage(id){pages.forEach(p=>p.classList.toggle("active",p.id===id));celebrate(90)}

document.getElementById("loginBtn").onclick=()=>{
  const input=document.getElementById("birthday"),error=document.getElementById("loginError");
  if(input.value===correctDate){celebrate(180);setTimeout(()=>showPage("welcomePage"),350)}
  else{error.textContent="Hmm... that's not the birthday. Try again, Priya. 💗";celebrate(25)}
};

document.querySelectorAll(".next").forEach(btn=>btn.onclick=()=>{
  celebrate(100);setTimeout(()=>showPage(btn.dataset.next),220);
});

const wishes=[
"May the thing you secretly wished for find its way to you. ✨",
"May this year bring you something even better than you imagined. 💖",
"May every new chapter make you happier than the last. 🌷",
"May you always have people around you who make you feel loved. 🌟"
];

document.getElementById("wishBtn").onclick=()=>{
  document.getElementById("wishText").textContent=wishes[Math.floor(Math.random()*wishes.length)];
  document.querySelector(".text-next").classList.remove("hidden");celebrate(180);
};

document.getElementById("finalBtn").onclick=()=>{
  celebrate(500);
  document.getElementById("finalMessage").textContent="🎉 HAPPY BIRTHDAY, PRIYA! 🎉 May your smile stay this bright forever. 💖";
};

for(let i=1;i<=6;i++){
  const slot=document.querySelectorAll(".photo-slot")[i-1],img=new Image();
  img.src=`assets/memories/photo${i}.jpg`;
  img.onload=()=>{slot.classList.add("has-photo");slot.prepend(img)};
}