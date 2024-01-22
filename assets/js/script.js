// assign a name to my variable
const timetoday = $('#time-today');
const currentDay = dayjs();
// function to display the right format  when we call it 
function displayTime() {
  const rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timetoday.text(rightNow);
}
// this function takes  compares the current hour with the blockhour and it will indetify if is present past or future 
function colorCodeTimeblocks() {
  const currentHour = currentDay.hour();

  $(".time-block").each(function () {
    const blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });
}

// event listener saves information when we click save button from the siblings (text area for the user) and also we will call local storage to show information previosly saved, so information doesn't get delete when we reload the page
$(function () {
  colorCodeTimeblocks();

  $(".saveBtn").on("click", function () {
    const blockHour = $(this).closest(".time-block").attr("id").split("-")[1];
    const userEvent = $(this).siblings(".description").val();

    localStorage.setItem("event-" + blockHour, userEvent);
  });

  loadEvents();
});



displayTime();
setInterval(displayTime, 1000);