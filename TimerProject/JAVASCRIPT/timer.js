// function time(){
//     let head = document.getElementById("head");
//     let d1 = new Date();
//     let secs = d1.getSeconds().toString().padStart(2, '0');;
//     head.textContent = secs;
//     let head1 = document.getElementById("head1");
//     let min = d1.getMinutes().toString().padStart(2, '0');;
//     head1.textContent = min;

//     let head2 = document.getElementById("head2");
//     let hour = d1.getHours().toString().padStart(2, '0');;
//     head2.textContent = hour; 

//     let date = document.getElementById("date");
//     let dates = d1.getDate().toString().padStart(2, '0');;
//     date.textContent = dates

//     let month = document.getElementById("month");
//     let months = d1.getMonth().toString().padStart(2, '0');;
//     month.textContent = months

//     let year = document.getElementById("year");
//     let years = d1.getFullYear().toString().padStart(2, '0');;
//     year.textContent = years
// }
// setInterval(time,1000)


// function railtime(){

//     let hrs = document.getElementById("hrs");
//     let hr = d1.getHours();
//     hrs.textContent = hr; 

//     let hours;
// let am_pm = am
// if(hour > 12){
//     hours = hour-12
//     am_pm = pm;
// }
// if (hour == 0){
//     hour = 12;
// }

    

    
// }
// setInterval(railtime,1000)












function time() {
    let d = new Date();

    let hour = d.getHours();
    let hour1 = document.getElementById("hour");

    let min = d.getMinutes();
    let min1 = document.getElementById("min");
    let min2 = (min < 10) ? '0' + min : min;
    min1.textContent = 'min : ' + min2;

    let sec = d.getSeconds();
    let sec1 = document.getElementById("sec");
    let sec2 = (sec < 10) ? '0' + sec : sec;
    sec1.textContent = 'sec : ' + sec2;

    let sea1 = (hour >= 12) ? "pm" : "am";
    if (hour > 12) {
        hour = hour - 12;
        sea1 = "pm";
    }
    if (hour == 0) {
        hour = 12;
    }
    let sea2 = document.getElementById("sea");

    if (hour === 1 && sea1 === "am") {
        sea1 = "pm";
        hour = 13;
    } else if (hour === 1 && sea1 === "pm") {
        sea1 = "am";
        hour = 1;
    }

    sea2.textContent = 'season : ' + sea1;
    hour1.textContent = 'hour : ' + ((hour < 10) ? '0' + hour : hour);
}

setInterval(time, 1000);

function time12() {
    let d = new Date();

    let hour12 = d.getHours() % 12 || 12;
    let hour12Elem = document.getElementById("hour12");
    hour12Elem.textContent = 'hour12 : ' + ((hour12 < 10) ? '0' + hour12 : hour12);

    let min12 = d.getMinutes();
    let min12Elem = document.getElementById("min12");
    let min12Formatted = (min12 < 10) ? '0' + min12 : min12;
    min12Elem.textContent = 'min12 : ' + min12Formatted;

    let sec12 = d.getSeconds();
    let sec12Elem = document.getElementById("sec12");
    let sec12Formatted = (sec12 < 10) ? '0' + sec12 : sec12;
    sec12Elem.textContent = 'sec12 : ' + sec12Formatted;

    let sea12 = (d.getHours() >= 12) ? "pm" : "am";
    let sea12Elem = document.getElementById("sea12");
    sea12Elem.textContent = 'season12 : ' + sea12;
}

setInterval(time12, 1000);

function time1() {
    let d2 = new Date();

    let date = d2.getDate();
    let date1 = document.getElementById("date");
    date1.textContent = 'date : ' + date;

    let day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let day1 = day[d2.getDay()];
    let day2 = document.getElementById("day");
    day2.textContent = 'day : ' + day1;

    let month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    let month1 = month[d2.getMonth()];
    let month3 = d2.getMonth() + 1;
    let month2 = document.getElementById("month");
    month2.textContent = `month : ${month1} (${month3})`;

    let year = d2.getFullYear();
    let year1 = document.getElementById("year");
    year1.textContent = 'year : ' + year;
}

setInterval(time1, 1000);

