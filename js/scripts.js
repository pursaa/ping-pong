//Business logic
debugger;
// var input = function(num){
  var sum = 0;
  var input = function(num){
  for (var i = 1; i <= input; i++){
    sum += i;
  }
}
  console.log(input);
  alert(input);
  // if ((num) === 2){
  //   return true;
  // }else{
  //   return false;
  // }

//user interface logic
$(document).ready(function(){
$("form#inPut").submit(function(event){
  event.preventDefault();
  var num = parseInt($("#inNumber").val());
  var result = input(num);

  $("#outPut").text(result);
  //
  // $("#outPut").show();


  });
});
