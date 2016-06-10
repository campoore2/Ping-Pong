$(document).ready(function(){
  $("#pinput").submit(function(event){
    event.preventDefault();
    list = []
    $('li.temp').remove();
    userInput = $("#pinput").val();
    pingpong(userInput);
    });
  });

  var list = []
  var pingpong = function(input){
    var number = parseInt(input);
    for (var i = 1; i<=number; i++){
      if(i % 15  === 0){
      list.push("pingpong");
    }if(i % 5 === 0 ){
      list.push("pong");
    }if(i % 3 === 0){
      list.push("ping");
    }else {
      list.push(i)
    }
    list.forEach()
        $("ul#results").append("<li>" + item +"</li>")
      };
    };
