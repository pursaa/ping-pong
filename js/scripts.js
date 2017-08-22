//business logic
var outPut = function(num) {

  var loop = [];
  for(var i = 1; i <= num; i++){
    loop.forEach(function(loop){

    });
    console.log(i);

    // if (i % 15 === 0) {
    //   result += "Ping-Pong";
    // }else if(i % 5 === 0) {
    //   result += "Pong";
    // }else if (i % 3 === 0) {
    //   reuslt+=("Ping");
    // }else {
    //   result += i;
  // }
  }
};

//user interface logic
$(document).ready(function(){
  $("#inPut").submit(function(event){
    event.preventDefault();
    $("#outPut").text("");

    var num = parseInt($("#inPutNumber").val());
    var result = outPut(num);
    $("#outPut").text(result);
  });
});
