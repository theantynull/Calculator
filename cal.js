let but1 = document.getElementById("b1")
let but2 = document.getElementById("b2")
let but3 = document.getElementById("b3")
let but4 = document.getElementById("b4")
let but5 = document.getElementById("b5")
let but6 = document.getElementById("b6")
let but7 = document.getElementById("b7")
let but8 = document.getElementById("b8")
let but9 = document.getElementById("b9")
let but0 = document.getElementById("b0")
let butadd = document.getElementById("add")
let butsub = document.getElementById("sub")
let butmul = document.getElementById("mul")
let butdiv = document.getElementById("div")
let butdel = document.getElementById("remove")
let butac = document.getElementById("ac")
let butpc = document.getElementById("percent")
let butenter = document.getElementById("enter")
let text = document.querySelector("textarea")
let temp = '0';
let a ;
let b ;
let count = 1;


but1.addEventListener("click", function(){
    text.value += "1";
    temp += '1';
});
but2.addEventListener("click", function(){
    text.value += "2";
    temp += '2';
});
but3.addEventListener("click", function(){
    text.value += "3";
    temp += '3';
});
but4.addEventListener("click", function(){
    text.value += "4";
    temp += '4';
});
but5.addEventListener("click", function(){
    text.value += "5";
    temp += '5';
});
but6.addEventListener("click", function(){
    text.value += "6";
    temp += '6';
});
but7.addEventListener("click", function(){
    text.value += "7";
    temp += '7';
});
but8.addEventListener("click", function(){
    text.value += "8";
    temp += '8';
});
but9.addEventListener("click", function(){
    text.value += "9";
    temp += '9';
});
but0.addEventListener("click", function(){
    text.value += "0";
    temp += '0';
});

butadd.addEventListener("click", function(){

});


let fun;

butadd.addEventListener("click", function(){
    a = Number(temp)
    text.value += "+";
    temp = ""
    fun = 1
    
});
butsub.addEventListener("click", function(){
    a = Number(temp)
    text.value += "-";
    temp = ""
    fun = 2
    
});
butmul.addEventListener("click", function(){
    a = Number(temp)
    text.value += "x";
    temp = ""
    fun = 3

});
butdiv.addEventListener("click", function(){
    a = Number(temp)
    text.value += "/";
    temp = ""
    fun = 4
    
});

butpc.addEventListener("click", function(){
    a = Number(temp)
    text.value += "%";
    temp = ""
    fun = 5
});

butdel.addEventListener("click", function(){
   text.value = text.value.slice(0, -1);
   temp = temp.slice(0, -1);
});

butac.addEventListener("click", function(){
           text.value = "";
           temp = "";
           a = undefined;
           b = undefined;
           fun = undefined;
        });

butenter.addEventListener("click", function () {
    b = Number(temp)
    let c
    switch(fun){
        case 1:
            c = a + b;
            break;
        case 2:
            c = a - b
            break;
        case 3:
            c = a * b
            break;
        case 4:
            c = a / b
            break;
        case 5:
            c = ((a*0.01) * b)
            break;
    }
    
    text.value = c
    temp = String(c);

});

