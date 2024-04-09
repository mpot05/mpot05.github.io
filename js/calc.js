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
                setHTML(Number(displaynum) + Number(displaynum2));
                Clear()
                break;
            case 2:
                setHTML(Number(displaynum) - Number(displaynum2));
                Clear()
                break;
            case 3:
                setHTML(Number(displaynum) * Number(displaynum2));
                Clear()
                break;
            case 4:
                setHTML(Number(displaynum) / Number(displaynum2));
                Clear()
                break;
            default:
                setHTML("You broke it")
                break;
        }
        document.getElementById("add").style = "background-color: gray; color: white;"
        document.getElementById("minus").style = "background-color: gray; color: white;"
        document.getElementById("multiply").style = "background-color: gray; color: white;"
        document.getElementById("divide").style = "background-color: gray; color: white;"
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
    setHTML("0");
    document.getElementById("add").style = "background-color: gray; color: white;"
    document.getElementById("minus").style = "background-color: gray; color: white;"
    document.getElementById("multiply").style = "background-color: gray; color: white;"
    document.getElementById("divide").style = "background-color: gray; color: white;"
}

function softReset(num) {
    operate = true;
    hasDecimal = false;
    state = num;
    displaynum2 = null;
    setHTML("0");
}

function percentSign() {
    if (operate == false) {
        checkNull(1);
        displaynum = Number(displaynum) / 100;
        setHTML(displaynum);
    }
    else {
        checkNull(2);
        displaynum2 = Number(displaynum2) / 100;
        setHTML(displaynum2);
    }
}

function plusMinus() {
    let thing = "-";
    if (operate == false) {
        checkNull(1);
        switch (Math.sign(Number(displaynum))) {
            case 1:
                thing += displaynum;
                displaynum = thing;
                setHTML(displaynum);
                thing = "-"
                break;
            case -1:
                displaynum = String(displaynum).substring(1);
                setHTML(displaynum);
                break;
            case 0:
                if (doesIncludeHTML("-")) {
                    displaynum = String(displaynum).substring(1);
                    setHTML(displaynum);
                }
                else {
                    thing += displaynum;
                    displaynum = thing;
                    setHTML(displaynum);
                    thing = "-"
                }
                break;
            default:
                break;
        }
    }
    else {
        checkNull(2);
        switch (Math.sign(Number(displaynum2))) {
            case 1:
                thing += displaynum2;
                displaynum2 = thing;
                setHTML(displaynum2)
                thing = "-"
                break;
            case -1:
                displaynum2 = String(displaynum2).substring(1);
                setHTML(displaynum2)
                break;
            case 0:
                if (String(displaynum2).includes("-")) {
                    displaynum2 = String(displaynum2).substring(1);
                    setHTML(displaynum2)
                }
                else {
                    thing += displaynum2;
                    displaynum2 = thing;
                    setHTML(displaynum2)
                    thing = "-"
                }
                break;
            default:
                break;
        }
    }
}

function decimal() {
    if (hasDecimal == false) {
        
        if (operate == false) {
            checkNull(1);
            displaynum = String(displaynum);
            displaynum = displaynum.concat(".");
            setHTML(displaynum);
        }
        else {
            checkNull(2);
            displaynum2 = String(displaynum2);
            displaynum2 = displaynum2.concat(".");
            setHTML(displaynum2);
        }
        hasDecimal = true
    }
}

function addition() {
    softReset(1);
    document.getElementById("add").style = "background-color: white; color: black;"
}

function subtraction() {
    softReset(2);
    document.getElementById("minus").style = "background-color: white; color: black;"
}

function multiplication() {
    softReset(3);
    document.getElementById("multiply").style = "background-color: white; color: black;"
}

function division() {
    softReset(4);
    document.getElementById("divide").style = "background-color: white; color: black;"
}

function numer(num) {
    thing = "";
    if (displaynum == null) {
        displaynum = num;
        setHTML(displaynum);
    }
    else if (operate) {
        if (displaynum2 == null) {
            displaynum2 = num;
            setHTML(displaynum2);
        }
        else if (doesIncludeHTML(".")) {
            displaynum2 = String(displaynum2);
            displaynum2 = displaynum2.concat(String(num));
            setHTML(displaynum2);
        }
        else if (document.getElementById("displaynum").innerHTML == "-0") {
            displaynum2 = "-" + String(num);
            setHTML(displaynum2)
        }
        else if (displaynum2 == 0) {
            displaynum2 = num;
            setHTML(displaynum2)
        }
        else {
            displaynum2 = String(displaynum2);
            displaynum2 = displaynum2.concat(String(num));
            setHTML(displaynum2);
        }
    }
    else {
        if (document.getElementById("displaynum").innerHTML == "-0") {
            displaynum = "-" + String(num);
            setHTML(displaynum);
        }
        else if (doesIncludeHTML(".")) {
            displaynum = String(displaynum);
            displaynum = displaynum.concat(String(num));
            setHTML(displaynum);
        }
        else if (displaynum == 0) {
            displaynum = num;
            setHTML(displaynum);
        }
        else {
            displaynum = String(displaynum);
            displaynum = displaynum.concat(String(num));
            setHTML(displaynum);
        }   
    }
}

function checkNull(num) {
    switch (num) {
        case 1:
            if (displaynum == null) {
                displaynum = 0;
            }
            break;
        case 2:
            if (displaynum2 == null) {
                displaynum2 = 0;
            }
            break;
        default:
            break;
    }
}

function setHTML(str) {
    document.getElementById("displaynum").innerHTML = str;
}

function doesIncludeHTML(str) {
    if (document.getElementById("displaynum").innerHTML.includes(str)) {
        return true;
    }
    else {
        return false;
    }
    
}

function checkForScience(num) {
    if (String(num).length > 10) {
        displaynum = Number(num).toExponential()
    }
}