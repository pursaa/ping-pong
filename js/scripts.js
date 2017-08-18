var leapYear = function(num) {
  if (num % 15 === 0) {
  return "ping-pong";
  }
  if (num % 5 === 0) {
  return "pong";
  }
  else if (num % 3 === 0) {
  return "ping";
  }
  else {
    return num;
  }
};

// jQuery user interface logic here.
$(document).ready(function(){
  $("form#inPut").submit(function(event){
    event.preventDefault();
    $("#outPut").text("");

    var num = parseInt($("input#inNumber").val());
    var result = leapYear(num);

    $("#outPut").text(result);
  });
});
