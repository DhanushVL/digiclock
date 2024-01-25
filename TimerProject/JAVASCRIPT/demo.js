function updateTime() {
    let d = new Date();

    // 24-hour
    let hour24 = d.getHours();
    let min24 = d.getMinutes();
    let sec24 = d.getSeconds();
    let sea24 = (hour24 >= 12) ? "pm" : "am";

    // 12-hour 
    let hour12 = (hour24 > 12) ? hour24 - 12 : hour24;
    hour12 = (hour12 === 0) ? 12 : hour12;
    let sea12 = (hour24 >= 12) ? "pm" : "am";

    //24-hour
    document.getElementById("hour").textContent = padZero(hour24);
    document.getElementById("min").textContent = padZero(min24);
    document.getElementById("sec").textContent = padZero(sec24);
    document.getElementById("sea").textContent =  sea24;

    //12-hour
    document.getElementById("hour12").textContent = padZero(hour12);
    document.getElementById("min12").textContent = padZero(min24);
    document.getElementById("sec12").textContent = padZero(sec24);
    document.getElementById("sea12").textContent =  sea12;

    // Date
    document.getElementById("date").textContent =  d.getDate();
    document.getElementById("day").textContent =  getDayName(d.getDay());
    document.getElementById("month").textContent =  getMonthName(d.getMonth());
    document.getElementById("year").textContent =  d.getFullYear();
}

function padZero(value) {
    return (value < 10) ? '0' + value : value;
}

function getDayName(dayIndex) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
}

function getMonthName(monthIndex) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}

// Update time every second
setInterval(updateTime, 1000);

// Initial update
updateTime();