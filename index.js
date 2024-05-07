'use strict';
window.onload=function(){
    document.getElementById('topp').style.display='none';
    var sbtn = document.getElementById('sbtn');
    document.querySelector("#cup").onclick=()=> document.getElementById('topp').style.display='block';
    document.querySelector("#cone").onclick=()=> document.getElementById('topp').style.display='none';
    sbtn.onclick=subBtn;

}
function subBtn(){
    var total=2.25;
    let ns = document.getElementById('ns').value;
    if(ns>1){
        let extraScoops=ns-1;
        let addCost= (1.25)*extraScoops;
        alert(addCost);
        total+=addCost;
    }
   document.getElementById("bp").innerHTML="Base Price:  $"+total;
   document.getElementById("tax").innerHTML="Tax:  $"+0.00;
   document.getElementById('td').innerHTML="Total Due:  $"+total;

}
