// Create Date
var countDate = new Date('Apr 23, 2021 00:00:00').getTime();

function calculateDate(){
    // Get current date
    var currentDate = new Date().getTime();

    //Get the difference in miliseconds between the new date and the current one
    var gap = countDate - currentDate;

    // Calculate time slots in miliseconds
    var seconds = 1000;
    var minutes = seconds*60;
    var hours = minutes*60;
    var days = hours*24;

    var d = Math.floor(gap / days);
    var h = Math.floor((gap % days) / hours);
    var m = Math.floor((gap % hours) / minutes);
    var s = Math.floor((gap % minutes) / seconds);

    // Change the date in the page
    document.getElementById("js-days").innerText = d;
    document.getElementById("js-hours").innerText = h;
    document.getElementById("js-minutes").innerText = m;
    document.getElementById("js-seconds").innerText = s;
}


// For every second, it will update the date    
setInterval(function(){calculateDate()}, 1000);



class Modal{
    constructor(){
        this.modal = document.querySelector(".my-modal");
    }

    close(){
        this.modal.style.display = "none";
    }

    open(){
        this.modal.style.display = "block";
    }
}

var modal = new Modal();

const openBtn = document.querySelector(".js-open-modal");
const closeBtn = document.querySelector(".js-close-modal");

openBtn.addEventListener('click', function(event){
    modal.open();
})

closeBtn.addEventListener('click', function(event){
    modal.close();
})


