


$(document).ready(function () {
    var today =    moment().format('MMMM Do YYYY, h:mm:ss a')
    $("#currentDay").append(today);
    // listen for save button clicks 
    $(".saveBtn").on("click", function () {
        // geat nearby values 
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save in localStorage
        localStorage.setItem(time, value);
    });

    function hourUpdate() {
        // get current number of hours
        var currentHour = moment().hours();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour-"))

            // check if we've moved past this time 
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else (blockHour > currentHour) ||
                (blockHour > currentHour); {
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-1 .description").val(localStorage.getItem("hour-1"))
    $("#hour-2 .description").val(localStorage.getItem("hour-2"))
    $("#hour-3 .description").val(localStorage.getItem("hour-3"))
    $("#hour-4 .description").val(localStorage.getItem("hour-4"))
    $("#hour-4.description").val(localStorage.getItem("hour-5"))
    
    
    hourUpdate();

});





