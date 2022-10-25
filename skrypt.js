document.write("Program javascript<br>")

function funkcja(){
    var z = prompt('hello moto')
    document.querySelector("h1").innerHTML += "<p>"  + z + "</p>"
}
var x="Javascript";
var y="to jezyk";
document.write("<br>"+x+" "+y+"<br>")


var nazwisko="Paprocki";
var imie="Aleks";
var wiek="16";
var klasa="2";
document.write("<p>Uczen "+imie+" "+nazwisko+" chodzi do klasy "+klasa+" i ma "+wiek+" lat</p>")
var m=1;
var n=22;
document.write(m+ "+" +n+"="+(m+n))

var a = 10
var b = 10
var c = 8
var d= '8'

if(a == b){
    document.write("<br>Liczby są równe <br>")
}else{
    document.write("<br>Liczby nie są równe <br>")
}


if(a === b){
    document.write("<br>Liczby są równe <br>")
}else{
    document.write("<br>Liczby nie są równe <br> ")
}
