  $(document).ready(function(){
  var finalRes = "";
  var num = "";
  var check = -1;
  $(".btn").click(function() {
    if($("#res2").text() == "Digit Limit Met!")
      $("#res2").html("");
     $('#res1').css('font-size', '15px');
 if($('#res1').text().length > 17 || $('#res2').text().length > 21){
      num = "";
      finalRes = "";
      $('#res1').html(0);
      $('#res2').html("Digit Limit Met!");
    }
});
  $( "#dot" ).click(function() {
   if(check == 1 && finalRes == ""){
      check = -1;
      num="";
    }
  if(num === "" || finalRes === "" || operatorChecker(finalRes.slice(-1))){
  num = "0.";
  }
  else if(!(num.includes(".")))
  num += ".";
  $("#res1").html(num);
  });
$( "#c" ).click(function() {
  finalRes = ""; 
  num = "";
  $("#res2").html(finalRes);
  $("#res1").html(num);
});
$( "#ce" ).click(function() {
  num = "";
  $("#res1").html(0);
});
  $( "#multi" ).click(function() {
  if(num.charAt(num.length-1) === ".")
  num = num.substr(0, num.length - 1);
  finalRes += num;
  num = "";
  if(finalRes != ""){
  finalRes = replaceOperator(finalRes);
  finalRes += "*";
  $("#res2").html(finalRes);
  $("#res1").html("");
  }
  });
  $( "#minus" ).click(function() {
  finalRes += num;
  num = "";
    if(finalRes != ""){
  finalRes = replaceOperator(finalRes,"-");
  finalRes += "-";
  $("#res2").html(finalRes);
  $("#res1").html("");
    }
  });
  $( "#plus" ).click(function() {
  finalRes += num;
  num = "";
  if(finalRes != ""){
  finalRes = replaceOperator(finalRes);
  finalRes += "+";
  $("#res2").html(finalRes);
  $("#res1").html("");
    }
  });
  $( "#divide" ).click(function() {
  finalRes += num;
  num = "";
  if(finalRes != ""){
  finalRes = replaceOperator(finalRes);
  finalRes += "/";
  $("#res2").html(finalRes);
  $("#res1").html("");
  }
  });
  $( "#one" ).click(function() {
   if(check == 1 && finalRes == ""){
      check = -1;
      num="";
    }
  num += "1";
  $("#res1").html(num);
  });
  $( "#two" ).click(function() {
 if(check == 1 && finalRes == ""){
      check = -1;
      num="";
    }  
  num += "2";
  $("#res1").html(num);
  });
  $( "#three" ).click(function() {
   if(check == 1 && finalRes == ""){
      check = -1;
      num="";
    }
  num += "3";
  $("#res1").html(num);
  });
  $( "#four" ).click(function() {
  if(check == 1 && finalRes == ""){
      check = -1;
      num="";
    }
  num += "4";
  $("#res1").html(num);
  });
  $( "#five" ).click(function() {
   if(check == 1 && finalRes == ""){
      check = -1;
      num="";
    }
  num += "5";
  $("#res1").html(num);
  });
  $( "#six" ).click(function() {
   if(check == 1 && finalRes == ""){
      check = -1;
      num="";
    }
  num += "6";
  $("#res1").html(num);
  });
  $( "#seven" ).click(function() {
   if(check == 1 && finalRes == ""){
      check = -1;
      num="";
    }
  num += "7";
  $("#res1").html(num);
  });
  $( "#eight" ).click(function() {
   if(check == 1 && finalRes == ""){
      check = -1;
      num="";
    }
  num += "8";
  $("#res1").html(num);
  });
  $( "#nine" ).click(function() {
   if(check == 1 && finalRes == ""){
      check = -1;
      num="";
    }
  num += "9";
  $("#res1").html(num);
  });
  $( "#zero" ).click(function() {
   if(check == 1 && finalRes == ""){
      check = -1;
      num="";
    }
  num += "0";
  $("#res1").html(num);
  });
  $( "#eql" ).click(function() {
    if(num === "")
  finalRes = replaceOperator(finalRes);
if(operatorChecker(finalRes.charAt(0))){
finalRes = finalRes.substr(1);
  }
  finalRes += num;
  finalRes = eval(finalRes);
  num = eval(finalRes);
  num = num.toString();
  $("#res2").html("");
  $("#res1").html(finalRes);
  var sectionWidth = $("#result").width();
  var spanWidth = $("#res1").width();
/* var originalFontSize = 15;
var newFontSize = (sectionWidth/spanWidth) * originalFontSize;*/
/* $("#res1").css("font-size", spanWidth/10);  */
  
finalRes = "";
check = 1;
  });
  });

  function operatorChecker(x){
  var arrOp=['*','/','+','-'];
  if(arrOp.indexOf(x) != -1)
  return true;
  else return false;
  }
  function replaceOperator(str){
  if(operatorChecker(str.slice(-1))){
  return str.substr(0, str.length - 1);
  }
  else return str;
  }
function findOp(str){
  var arrOp=['*','/','+','-'];
  for(var i = 0; i < arrOp.length; i++){
    if(str.indexOf(i) != -1)
      return true;
  }
  return false;
}