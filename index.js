// Calculator Functions//

const display = document.getElementById("display");

function addtoDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error"
    }
}

function percent(){
    display.value = display.value/100;
}

function signtoAdd(){
    if (display.value >= 0){
        display.value += '-';
    }
}




