
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D, YYYY'));

  $(document).ready(function () {
    $(".saveBtn").on("click", function () {
      // obtain description values in JQuery
      var context = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time,context);
    })
    

    function timeTracker() {
      //get the time now
      var timeNow = moment().hour();

      // loop time blocks
      $(".time-block").each(function () {
          var block = parseInt($(this).attr("id").split("hour")[1]);


          if (block < timeNow) {
              $(this).removeClass("future");
              $(this).removeClass("present");
              $(this).addClass("past");
          }
          else if (block === timeNow) {
              $(this).removeClass("past");
              $(this).removeClass("future");
              $(this).addClass("present");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");

          }
      })
  }

  // Get item stored from local storage 
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  timeTracker();
})