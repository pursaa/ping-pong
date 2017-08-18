//Business logic
var count = function(num){

  if ((num) === 2){

    return true;
  }
};

//user interface logic
$(document).ready(function(){
$("form#inPut").submit(function(event){
  event.preventDefault();
  var num = parseInt($("#inNumber").val());
  var result = count(num);

  $("#outPut").text(result);
  //
  // $("#outPut").show();


  });
});
