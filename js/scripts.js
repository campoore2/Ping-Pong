// $(document).ready(function(){
//   $("#pinput").submit(function(event){
//     event.preventDefault();
//     var pingPong = function()
//     var index = 1, results=""
//     debugger;
//     if( index % 3 === 0){
//       return = "ping"
//     };
//     if( index % 5 === 0 ){
//       return = "pong"
//     };
//     if ( index % 15 === 0 ){
//       return = "pingpong"
//     }; var results = ("#results").append("<li>" + index +"</li>")
//
//     // pingPong = ("#results").append("<li>" + ("#pnum") + "</li>" )
// });
// })


// $(document).ready(function(){
//   $("#pinput").submit(function(event){
//     event.preventDefault();
//     debugger;
//     var pingpong = function(results){
//     var ("#pinput") = index
//     var index = 1;
//     while (index <= results)
//     if (index % 3 === 0){
//       results += "ping"
//     };
//     if (index % 5 === 0){
//       results += "pong"
//     };
//     return results
//     var results = ""
//     var results = ("#results").append("<li>" + index + "</li>")
//   }
//   });
//   })


var pingpong = function(res){
  var results = "";
  if(res % 3 )
  {return "ping"};
  if(res % 5 )
  {return "pong"};
  if(res % 15 )
  {return "pingpong"};
  return (results)

  $(document).ready(function(){
    $("#pinput").submit(function(event){
      event.preventDefault();
      var i = 1;
      while (i <= $("#pnum").val()){
        $("#results").text
      };
    });
  });
}
