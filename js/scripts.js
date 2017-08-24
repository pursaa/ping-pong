//business logic
var outPut = function(num) {

var resultArrays = [];
// resultArrays.forEach(function(resultArray){

for(var i = 1; i <= num; i++){

  if (i % 15 === 0) {
    // resultArrays.push("Ping-Pong");
    $("#list").append("<li>ping-pong</li>");
  }if (i % 5 === 0) {
    // resultArrays.push("Pong");
    $("#list").append("<li>pong</li>");
  }else if (i % 3 === 0) {
    // resultArrays.push("Ping");
    $("#list").append("<li>ping</li>");
  }else {
    // resultArrays.push(i);
     $("#list").append("<li>" + i + "</li>");

  }
  // $("#outPut").text(resultArrays);
}

// });
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
