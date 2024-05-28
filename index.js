const sec=document.getElementById("sec_hand");
const min=document.getElementById("min_hand");
const hrs=document.getElementById("hrs_hand");
const scs=document.querySelector('.scs');
const mns=document.querySelector('.mns');
const hs=document.querySelector('.hs');
function getTime(){
    const dt=new Date();
    let secs=dt.getSeconds();
    let mins=dt.getMinutes();
    let hrss=dt.getHours();
//  console.log(dt)
    const timeinv = 6;
    const time = document.querySelector(".time");
    // since each second deg change by 6 units
    let dn="AM";
    if(hrss>12){
        dn="PM";
        hrss-=12;
    }
    if(secs<10){
        secs="0"+secs;
    }
    if(mins<10){
        mins="0"+mins;
    }
    if(hrss<10){
        hrss="0"+hrss;
    }
    time.textContent = hrss+":"+mins+":"+secs+" "+dn;
    sec.style.transform = "rotate("+(secs*timeinv)+"deg)"
    min.style.transform = "rotate("+(mins*timeinv+secs/10)+"deg)"
    hrs.style.transform = "rotate("+(hrss*30+mins/2)+"deg)"

}


setInterval(getTime,100);