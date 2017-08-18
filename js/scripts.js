var leapYear = function(num) {
  if (num % 3 === 0) {
  return true;
  } else {
    return false;
  }
};

// jQuery user interface logic here.
$(document).ready(function(){
  $("form#inPut").submit(function(event){
    event.preventDefault();
    var num = parseInt($("input#inNumber").val());
    var result = leapYear(num);

    $("#outPut").text(result);
  });
});
