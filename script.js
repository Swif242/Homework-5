
$(document).ready(function () {
    var submit = document.querySelectorAll(".saveBtn");
    var textBox = document.querySelectorAll("description");
    textBox.textContent = localStorage.getItem("data-time");
    var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
    // current date variable
    var currentDay = moment().format("MMM-DD-YY");
    // current time variable -1 hr
    var currentTime = moment().format('H') - 1;


    // setting current day to the jumbotron
    $("#currentDay").text(currentDay);



    //  code block to store data when pushing submit button
    $(submit).on("click", function () {
        var time = $(this).attr("data-time")
        var inputBox = $("#" + time);
        var details = inputBox.val();

        localStorage.setItem(time, details);

    });



    // function containing a for loop to grab from hours array and match up to the hour ID's
    // to get from local storage

    function latestInfo() {
        for (i = 0; i < hours.length; i++) {
            console.log(localStorage.getItem(hours[i]))
            $("#" + hours[i]).text(localStorage.getItem(hours[i]));
            //
            if (parseInt(hours[i]) === currentTime) {
                //    added classes based on if statement boolean
                $(".hour").addClass("present");
            }
            else if (parseInt(hours[i]) < currentTime) {
                $(".hour").addClass("past");
            }
            else {
                $(".hour").addClass("future");
            }
        };

    };

    latestInfo();


    // testing idea of using military time to avoid issue with comparing am/pm
    // 
    console.log(currentTime);
    console.log(parseInt("20") === currentTime);




});
