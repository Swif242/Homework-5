
$(document).ready(function () {
    var blocks = document.querySelectorAll(".row");
    var timeBlock = document.querySelectorAll(".timeblock");
    var submit = document.querySelectorAll(".saveBtn");
  
    var details = localStorage.getItem("details");
    var currentDay = moment().format("MMM-DD-YY");
    $("#currentDay").text(currentDay);

    // $(inputBox).on("click", function () {
    //     $(this).replaceWith("<input id=\"input\">");
    // });


    $(submit).on("click", function () {
        var time =$(this).attr("data-time")
        var inputBox = $("#" + time);
        var details = inputBox.val()
      
        localStorage.setItem(time, details)
    })

    // function timeCheck (){


    // if( timeBlock.text < moment()){
    //      blocks.addClass("past");
    // };
    // else if (timeBlock.text > moment()){
    //     blocks.addClass(".future");
    // }
    // else{
    //     blocks.addClass(".present");
    // }

    // };

//     console.log(timeCheck);
});
