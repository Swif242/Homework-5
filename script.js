
$(document).ready(function () {
    var blocks = document.querySelectorAll(".row");
    var timeBlock = document.querySelectorAll(".timeblock");
    var submit = document.querySelectorAll(".saveBtn");
    var textBox = document.querySelectorAll("description");
    textBox.textContent = localStorage.getItem("data-time");
    var hours = ["9am", "10am", "11am"];
    // current time function
    var currentDay = moment().format("MMM-DD-YY");
    $("#currentDay").text(currentDay);



    // calling function to retrieve data


    //  code block to store data
    $(submit).on("click", function () {
        var time = $(this).attr("data-time")
        var inputBox = $("#" + time);
        var details = inputBox.val()

        localStorage.setItem(time, details)

        //  attempt to retrieve stored data


    })

    function latestInfo() {
        for (i = 0; i < hours.length; i++) {
            console.log(localStorage.getItem(hours[i]))
            $("#" + hours[i]).text(localStorage.getItem(hours[i]));
        }
        //    textBox.textContent = 
        //    console.log(localStorage.getItem(details));

    }

    latestInfo();
    // function timeCheck (){


    // if( timeBlock.innertext < moment()){
    //      blocks.addClass("past");
    // };
    // else if (timeBlock.text > moment()){
    //     blocks.addClass(".future");
    // }
    // else{
    //     blocks.addClass(".present");
    // }

    // };




    //  different attempts to get stored data

    // $("9am").val(localStorage.getItem("9"));

    // $("textBox").val(localStorage.getItem("9"));
    // $("data-time").val(localStorage.getItem(latestInfo));
    // $("input10").val(localStorage.getItem("10"));
});
