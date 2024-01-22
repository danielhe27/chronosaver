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

displayTime();
setInterval(displayTime, 1000);