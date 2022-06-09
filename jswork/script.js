//var getmonth = getMonth();
//var color = document.getElementById("day").style.color = "red";
const d = new Date();
let month = d.getMonth();

if (month == 0) {
    document.getElementById("day").style.color = "red";
    //alert('ddfknsb');
} else if (month == 1) {
    document.getElementById("day2").style.color = "red";
}else if (month == 2) {
    document.getElementById("day3").style.color = "red"; 
}else if (month == 3) {
    document.getElementById("day4").style.color = "red";
}else if (month == 4) {
    document.getElementById("day5").style.color = "red";
}else if (month == 5) {
    document.getElementById("day6").style.color = "red";
}else if (month == 6) {
    document.getElementById("day7").style.color = "red";
}else if (month == 7) {
    document.getElementById("day8").style.color = "red";
}else if (month == 8) {
    document.getElementById("day9").style.color = "red";
}else if (month == 9) {
    document.getElementById("day10").style.color = "red";
}else if (month == 10) {
    document.getElementById("day11").style.color = "red";
}else if (month == 11) {
    document.getElementById("day12").style.color = "red";
}

document.getElementById("d").innerHTML = d;  


const mon = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var none = 'none';
var block = 'block';

function myClick() {
    document.getElementById("click1").style.display = block;
    document.getElementById("click2").style.display = none;
    document.getElementById("click3").style.display = none;
  }
  function myClick1() {
    document.getElementById("click1").style.display = none;
    document.getElementById("click3").style.display = none;
    document.getElementById("click2").style.display = block;
  }
  function myClick2() {
    document.getElementById("click1").style.display = none;
    document.getElementById("click2").style.display = none;
    document.getElementById("click3").style.display = block;
  }