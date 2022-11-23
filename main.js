var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

var typed = new Typed(".auto-type", {
    strings: ["Elizabeth Turay", "a Software Developer", "a Video Game Enthusiast", "a Creator"],
    typespeed: 700,
    backSpeed: 80,
    loop: true
})


function response(){
    var list = [
        "The star of riches is shining on you!",
        "Something you lost will turn up soon",
        "The one you love is closer than you think!",
        "Every artist was first an amateur",
        "Run!",
        "You skipped brushing your teeth this morning? Horrific!",
        "You will be hungry again in 10 minutes",
        "The fortune you seek is in another click",
        "I see money in your future... not in yours though",
        "If people are talking behind your back - then just fart",
    ];
    var number = Math.floor(Math.random()*10);
    document.getElementById("response").innerHTML = list[number]
}


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }


