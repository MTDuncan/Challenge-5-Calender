$(function () {
  // Display the current day at the top of the calendar
  var today = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(today);

  var startHour = 9;
var endHour = 17;
for (var hour = startHour; hour <= endHour; hour++) {
  // Create a new time block element
  var timeBlockEl = $("<div>").attr("id", "hour-" + hour).addClass("row time-block");

  // Create the hour label element
  var hourLabelEl = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(dayjs().hour(hour).minute(0).format("hA"));

  // Create the description textarea element
  var descriptionEl = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", 3);

  // Load any saved events for this time block from local storage
  var savedEvent = localStorage.getItem("hour-" + hour);
  if (savedEvent) {
    descriptionEl.val(savedEvent);
  }

  // Create the save button element
  var saveBtnEl = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").html('<i class="fas fa-save" aria-hidden="true"></i>');

  // Add the elements to the time block element
  timeBlockEl.append(hourLabelEl, descriptionEl, saveBtnEl);

  // Add the time block element to the container
  $(".container-lg").append(timeBlockEl);
}


  // Color-code the time blocks based on whether they are in the past, present, or future
  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id").split("-")[1]);
    var currentHour = dayjs().hour();
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Save the event text to local storage when the save button is clicked
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val().trim();
    localStorage.setItem(hour, eventText);
  });
});
