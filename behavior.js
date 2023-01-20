
function writeKey(a){
    document.querySelector("#screen").value+=a;
}
function equal(){
 document.querySelector("#screen").value=eval
 (document.querySelector("#screen").value);
}
function squareRoot(){
    document.querySelector("#screen").value=Math.
    sqrt(document.querySelector("#screen").value)
}
function square(){
    document.querySelector("#screen").value=
    (document.querySelector("#screen").value**2);
}
function clearScreen(){
  document.querySelector("#screen").value="";
}
function deleteKey(){
    const screen = document.querySelector("#screen");
   screen.value = screen.value.substr(0,screen.value.length-1);
}
setInterval(function(){
var now= new Date();
var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();

 document.querySelector("#watch").value=hour+":"+min+" "+sec;
},1000); 