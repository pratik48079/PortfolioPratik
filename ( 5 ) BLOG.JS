var date = new Date();

// ------------------------------------------------<FIRST BLOG START>------------------------------------------------


setInterval(currenttime,1000);
function currenttime(){
    const b = new Date();
    document.getElementById("current-time").innerHTML = b.toLocaleTimeString();
}

document.getElementsByClassName("day").innerHTML=date.getDate();
document.getElementsByClassName("month").innerHTML=date.getMonth();
document.getElementsByClassName("year").innerHTML=date.getFullYear();

document.getElementById("hour").innerHTML=date.getHours();
document.getElementById("minut").innerHTML=date.getMinutes();
document.getElementById("seconds").innerHTML=date.getSeconds();



