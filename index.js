const sec=document.getElementById("sec_hand");
const min=document.getElementById("min_hand");
const hrs=document.getElementById("hrs_hand");

function getTime(){
    const dt=new Date();
    const secs=dt.getSeconds();
    const mins=dt.getMinutes();
    const hrss=dt.getHours();
//  console.log(dt)
    const timeinv = 6;
    // since each second deg change by 6 units

    sec.style.transform = "rotate("+(secs*timeinv)+"deg)"
    min.style.transform = "rotate("+(mins*timeinv+secs/10)+"deg)"
    hrs.style.transform = "rotate("+(hrss*30+mins/2)+"deg)"

}


setInterval(getTime,100);