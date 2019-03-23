let firstNum = 0;
let secondNum = 0;
let operation = "";
let ans = "";
$(document).ready(function(){
    $("#btn-one").click(function(){
      if ($("#display").html() == '0') {$("#display").empty();}
        $("#display").append("1");
    });
    $("#btn-two").click(function(){
      if ($("#display").html() == '0') {$("#display").empty();}
        $("#display").append("2");
    });
    $("#btn-three").click(function(){
      if ($("#display").html() == '0') {$("#display").empty();}
        $("#display").append("3");
    });
    $("#btn-four").click(function(){
      if ($("#display").html() == '0') {$("#display").empty();}
        $("#display").append("4");
    });
     $("#btn-five").click(function(){
       if ($("#display").html() == '0') {$("#display").empty();}
        $("#display").append("5");
    });
     $("#btn-six").click(function(){
       if ($("#display").html() == '0') {$("#display").empty();}
        $("#display").append("6");
    }); 
    $("#btn-seven").click(function(){
      if ($("#display").html() == '0') {$("#display").empty();}
        $("#display").append("7");
    });
     $("#btn-eight").click(function(){
       if ($("#display").html() == '0') {$("#display").empty();}
        $("#display").append("8");
    });
     $("#btn-nine").click(function(){
       if ($("#display").html() == '0') {$("#display").empty();}
        $("#display").append("9");
    });
    $("#btn-zero").click(function(){
      if ($("#display").html() == '0') {$("#display").empty();}
        $("#display").append("0");
    });  
    $("#btn-dec").click(function(){
       if ($("#display:contains(.)").length) {$("#display").append("");}else
       $("#display").append(".");
    });
  
    $("#btn-cancel").click(function(){
        $("#display").html('0');
        firstNum = 0;
        secondNum = 0;
    });
    $("#btn-add").click(function(){
        firstNum = Number($("#display").html());
        operation = "+";
        $("#display").html('0');
    }); 
    $("#btn-sub").click(function(){
        firstNum = Number($("#display").html());
        operation = "-";
        $("#display").html('0');
    });   
    $("#btn-mul").click(function(){
        firstNum = Number($("#display").html());
        operation = "*";
        $("#display").html('0');
    });   
    $("#btn-div").click(function(){
        firstNum = Number($("#display").html());
        operation = "/";
        $("#display").html('0');
    });   
    $("#btn-eql").click(function(){
        secondNum = Number($("#display").html());
        ans = eval(firstNum + operation + secondNum);
        if (isNaN(ans)) {$("#display").html("Not Valid");} else {$("#display").html(ans);}
    }); 
    $("#btn-del").click(function(){
      $('#display').text(function (_,txt) {
      return txt.slice(0, -1);
      });
      if ($("#display").html() == "") {$("#display").prepend("0");}
    });
    $("#btn-sign").click(function(){
       if ($("#display:contains(-)").length || $("#display:contains(0)").length)
            {$("#display").prepend("");}else
              {$("#display").prepend("-");}        
    });   
});