//Business logic
var input = function(num) {
  if (num % 3 === 0);{
      return true;
    }
    else {
      return false;
    }
}
debugger;
//user interface logic
$(document).ready(function(){
$("form#inPut").submit(function(event){
  event.preventDefault();
  var num = parseInt($("input#inNumber").val());
  var result = input(num);

  $("#outPut").text(num);
  });
});
