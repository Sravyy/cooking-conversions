//back-end
var kglb = function(value){
  return value * 2.20462;
};

var lbkg = function(value){
  return value * 0.453592;
}

var lcup = function(value){
  return value * 4.22675;
}

var lboz = function(value){
  return value * 16;
}

//front-end

$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    var input1 = parseInt($("input#kg-lb").val());
    var result=kglb(input1);
    $("#output").text(result);
  })
  $("#form2").submit(function(event){
    event.preventDefault();

    var input2 = parseInt($("input#lb-kg").val());
    var result= lbkg(input2);
    $("#output").text(result);
  })
  $("#form3").submit(function(event){
    event.preventDefault();

    var input3 = parseInt($("input#l-cup").val());
    var result=lcup(input3);
    $("#output").text(result);
  })
  $("#form4").submit(function(event){
    event.preventDefault();

    var input4 = parseInt($("input#lb-oz").val());
    var result=lboz(input4);
    $("#output").text(result);
  })
})
