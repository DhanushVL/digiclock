let selectedFormat = "24";

        function changeTimeFormat() {
            const formatDropdown = document.getElementById("timeFormat");
            selectedFormat = formatDropdown.value;

            const timeFormatTitle = document.getElementById("timeFormatTitle");
            timeFormatTitle.textContent = `${selectedFormat}-Hour`;
        }

        function updateTimer() {
            if (selectedFormat === "24") {
                // Update the 24-hour timer
                function time24() {
                    let d = new Date();

                    let hour24 = d.getHours();
                    let hour24Elem = document.getElementById("hour");
                    hour24Elem.textContent = (hour24 < 10) ? '0' + hour24 : hour24;

                    let min24 = d.getMinutes();
                    let min24Elem = document.getElementById("min");
                    let min24Formatted = (min24 < 10) ? '0' + min24 : min24;
                    min24Elem.textContent = min24Formatted;

                    let sec24 = d.getSeconds();
                    let sec24Elem = document.getElementById("sec");
                    let sec24Formatted = (sec24 < 10) ? '0' + sec24 : sec24;
                    sec24Elem.textContent = sec24Formatted;

                    let sea24 = (d.getHours() >= 12) ? "pm" : "am"; // 24-hour format doesn't have am/pm
                    let sea24Elem = document.getElementById("sea");
                    sea24Elem.textContent = sea24;
                }
                time24();
            } else if (selectedFormat === "12") {
                // Update the 12-hour timer
                function time12() {
                    let d = new Date();

                    let hour12 = d.getHours() % 12 || 12;
                    let hour12Elem = document.getElementById("hour");
                    hour12Elem.textContent = (hour12 < 10) ? '0' + hour12 : hour12;

                    let min12 = d.getMinutes();
                    let min12Elem = document.getElementById("min");
                    let min12Formatted = (min12 < 10) ? '0' + min12 : min12;
                    min12Elem.textContent = min12Formatted;

                    let sec12 = d.getSeconds();
                    let sec12Elem = document.getElementById("sec");
                    let sec12Formatted = (sec12 < 10) ? '0' + sec12 : sec12;
                    sec12Elem.textContent = sec12Formatted;

                    let sea12 = (d.getHours() >= 12) ? "pm" : "am";
                    let sea12Elem = document.getElementById("sea");
                    sea12Elem.textContent = sea12;
                }
                time12();
            }

            // Update date information
            function time1() {
                let d2 = new Date();

                let date = d2.getDate();
                let date1 = document.getElementById("date");
                date1.textContent = date;

                let day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
                let day1 = day[d2.getDay()];
                let day2 = document.getElementById("day");
                day2.textContent = day1;

                let month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
                let month1 = month[d2.getMonth()];
                let month3 = d2.getMonth() + 1;
                let month2 = document.getElementById("month");
                month2.textContent = `${month1} (${month3})`;

                let year = d2.getFullYear();
                let year1 = document.getElementById("year");
                year1.textContent = year;
            }
            time1();
        }

        setInterval(updateTimer, 1000);
        updateTimer(); // Initial update

