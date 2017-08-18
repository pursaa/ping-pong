//user interface logic
$(document).ready(function(){
$("#input").submit(function(event){
  event.eventDefault
  var inputNumber = parseInt($("#number").val());
  var outputNumbers = count(inputNumber);
  $("#output").append(outputNumbers);
  console.log(inputNumber);

  });
});
