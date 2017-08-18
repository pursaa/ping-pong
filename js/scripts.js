//Business logic
var count = function(inputNumber){
  if (inputNumber === 2){
    return true;
  }
};
debugger;
//user interface logic
$(document).ready(function(){
$("#inPut").submit(function(event){
  event.peventDefault();
  var inputNumber = parseInt($("#inNumber").val());
  var outputNumbers = count(inputNumber);
  $("#outPut").text(outputNumbers);

  console.log(inputNumbers);

  });
});
