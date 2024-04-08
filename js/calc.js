let num1;
let num2;
let displaynum;
let displaynum2;
let hasDecimal = false;
let operate = false;
let state = 0;


function calculate() {
    if (operate == true) {
        switch (state) {
            case 1:
                document.getElementById("displaynum").innerHTML = (Number(displaynum) + Number(displaynum2));
                Clear()
                break;
            case 2:
                document.getElementById("displaynum").innerHTML = (Number(displaynum) - Number(displaynum2));
                Clear()
                break;
            case 3:
                document.getElementById("displaynum").innerHTML = (Number(displaynum) * Number(displaynum2));
                Clear()
                break;
            case 4:
                document.getElementById("displaynum").innerHTML = (Number(displaynum) / Number(displaynum2));
                Clear()
                break;
            default:
                document.getElementById("displaynum").innerHTML = "You broke it"
                break;
        }
    }
}



function Clear() {
    num1 = null;
    num2 = null;
    displaynum = null;
    displaynum2 = null;
    hasDecimal = false;
    operate = false;
}

function ClearAll() {
    num1 = null;
    num2 = null;
    displaynum = null;
    displaynum2 = null;
    hasDecimal = false;
    operate = false;
    document.getElementById("displaynum").innerHTML = "0";
}

function percentSign() {
    if (operate == false) {
        if (displaynum == null) {
            displaynum = 0
        }
        displaynum = Number(displaynum) / 100;
        document.getElementById("displaynum").innerHTML = displaynum;
    }
    else {
        if (displaynum2 == null) {
            displaynum2 = 0
        }
        displaynum2 = Number(displaynum2) / 100;
        document.getElementById("displaynum").innerHTML = displaynum2;
    }
}

function plusMinus() {
    let thing = "-"
    if (operate == false) {
        if (Math.sign(Number(displaynum))) {
            
        }
    }
    else {

    }
}

function decimal() {
    if (hasDecimal == false) {
        
        if (operate == false) {
            if (displaynum == null) {
                displaynum = 0
            }
            displaynum = String(displaynum);
            displaynum = displaynum.concat(".");
            document.getElementById("displaynum").innerHTML = displaynum;
        }
        else {
            if (displaynum2 == null) {
                displaynum2 = 0
            }
            displaynum2 = String(displaynum2);
            displaynum2 = displaynum2.concat(".");
            document.getElementById("displaynum").innerHTML = displaynum2;
        }
        hasDecimal = true
    }
}

function addition() {
    operate = true;
    hasDecimal = false;
    state = 1;
    document.getElementById("displaynum").innerHTML = "0";
}

function subtraction() {
    operate = true;
    hasDecimal = false;
    state = 2;
    document.getElementById("displaynum").innerHTML = "0";
}

function multiplication() {
    operate = true;
    hasDecimal = false;
    state = 3;
    document.getElementById("displaynum").innerHTML = "0";
}

function division() {
    operate = true;
    hasDecimal = false;
    state = 4;
    document.getElementById("displaynum").innerHTML = "0";
}

function numer(num) {
    if (displaynum == null) {
        displaynum = num;
        document.getElementById("displaynum").innerHTML = displaynum;
    }
    else if (operate == true) {
        if (displaynum2 == null) {
            displaynum2 = num;
            document.getElementById("displaynum").innerHTML = displaynum2
        }
        else {
            displaynum2 = String(displaynum2);
            displaynum2 = displaynum2.concat(String(num));
            document.getElementById("displaynum").innerHTML = displaynum2;
        }
    }
    else if (displaynum != null) {
        displaynum = String(displaynum);
        displaynum = displaynum.concat(String(num));
        document.getElementById("displaynum").innerHTML = displaynum;
    }
    
}
