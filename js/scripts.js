var outPut = function(num) {
  if (num % 15 === 0) {
  return "Ping-Pong";
  }
  if (num % 5 === 0) {
  return "Pong";
  }
  else if (num % 3 === 0) {
  return "Ping";
  }
  else {
    return num;
  }
};

// jQuery user interface logic here.
$(document).ready(function(){
  $("#inPut").submit(function(event){
    event.preventDefault();
    $("#outPut").text("");

    var num = parseInt($("#inPutNumber").val());
    var result = outPut(num);
    $("#outPut").text(result);
  });
});
