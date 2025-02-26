console.log("js started!");

const form = document.querySelector('form'); //creates form
form.addEventListener('submit', function(event) {
    event.preventDefault(); //prevents the page from reloading
    let check1 = document.querySelector('input[name="check1"]:checked')?.value; //gets the data from the radio buttons
    let check2 = document.querySelector('input[name="check2"]:checked')?.value;
    let input1 = (document.getElementById("inputOne")).value; //gets the data from the two inputs
    let input2 = (document.getElementById("inputTwo")).value;

    console.log("Input1:", input1, "Check1:", check1); //logs in console the inputs and checks
    console.log("Input2:", input2, "Check2:", check2);

    let verify1 = verifyType(check1, input1); //verifies the type of the inputs to the checks
    let verify2 = verifyType(check2, input2);

    console.log("Verify1:", verify1, "Verify2:", verify2); //logs in console the result of the checks

    if (verify1 === true && verify2 === true) { //if everything is valid, then the data will be output
        output(input1, check1, input2, check2);
    }
});

function output(input1, check1, input2, check2) { //outputs data through the table
    switch (check1) { //according to the type of the inputs, the different values will be converted and output
        case "binary":
            document.getElementById("ResultDen").textContent = bin2Denary(input1);
            document.getElementById("ResultBin").textContent = input1;
            document.getElementById("ResultHex").textContent = bin2Hex(input1);
            break;
        case "denary":
            document.getElementById("ResultDen").textContent = input1;
            document.getElementById("ResultBin").textContent = den2Binary(input1);
            document.getElementById("ResultHex").textContent = den2Hex(input1);
            break;
        case "hexadecimal":
            document.getElementById("ResultDen").textContent = hex2Denary(input1);
            document.getElementById("ResultBin").textContent = hex2Binary(input1);
            document.getElementById("ResultHex").textContent = input1;
            break;
    }

    let num1; // converts input1 into denary according to type
    switch (check1) {
        case "binary":
            num1 = bin2Denary(input1);
            break;
        case "denary":
            num1 = input1;
            break;
        case "hexadecimal":
            num1 = hex2Denary(input1);
            break;
    }

    let num2; // converts input2 into denary according to type
    switch (check2) {
        case "binary":
            num2 = bin2Denary(input2);
            break;
        case "denary":
            num2 = input2;
            break;
        case "hexadecimal":
            num2 = hex2Denary(input2);
            break;
        case "none":
            num2 = 0;
            break;
        default:
            num2 = 0;
            break;
    }
    let num3 = parseInt(num1) + parseInt(num2); //adds num1 and num2 together and outputting it as different types
    document.getElementById("DenAddition").innerHTML = num3.toString();
    document.getElementById("BinAddition").innerHTML = den2Binary(num3).toString();
    document.getElementById("HexAddition").innerHTML = den2Hex(num3).toString();
}

//====================
// Conversion Processes below
//====================

// convert hexadecimal into binary
function hex2Binary(input) {
    let map = new Map(); // maps the hexadecimal to binary.
    map.set("0", "0000");
    map.set("1", "0001");
    map.set("2", "0010");
    map.set("3", "0011");
    map.set("4", "0100");
    map.set("5", "0101");
    map.set("6", "0110");
    map.set("7", "0111");
    map.set("8", "1000");
    map.set("9", "1001");
    map.set("A", "1010");
    map.set("B", "1011");
    map.set("C", "1100");
    map.set("D", "1101");
    map.set("E", "1110");
    map.set("F", "1111");
    let pt1 = map.get(input.slice(0, 1));
    let pt2 = map.get(input.slice(1, 2));
    return pt1.toString() + pt2.toString();
}

// Convert hexadecimal to denary
function hex2Denary(input) { //reuses previous code
    return (bin2Denary(hex2Binary(input))).toString();
}

// convert denary into binary
function den2Binary(input) {
    let number = parseInt(input, 10);
    return number.toString(2).padStart(8, '0');
}
// convert denary into hexadecimal
function den2Hex(input) { //reuses previous code.
    return (bin2Hex(den2Binary(input))).toString();
}

// convert binary into denary
//convert binary into denary
function bin2Denary(input){
    let den = input.reverse()
    let cul = 0 //cumulative
    let mul = 128 //multiplier
    while (den > 0) {
        cul = cul + (den[1] * mul)
        mul = mul / 2
        den = den.substring(1)
    }
    return cul.toString()
}

// convert binary to hexadecimal
function bin2Hex(input){
    let bind = new Map(); //silly
    bind.set("0", "0000");
    bind.set("1", "0001");
    bind.set("2", "0010");
    bind.set("3", "0011");
    bind.set("4", "0100");
    bind.set("5", "0101");
    bind.set("6", "0110");
    bind.set("7", "0111");
    bind.set("8", "1000");
    bind.set("9", "1001");
    bind.set("A", "1010");
    bind.set("B", "1011");
    bind.set("C", "1100");
    bind.set("D", "1101");
    bind.set("E", "1110");
    bind.set("F", "1111");
    let pt1 = bind.get(input.slice(0,3));
    let pt2 = bind.get(input.slice(4,8));
    return pt1.toString() + pt2.toString();
}

//====================
// Verification Processes below
//====================

// verify denary (must be int, must be in range 0-255)
function verifyDenary(input) {
    if (!/^\d+$/.test(input) || input < 0 || input > 255) { //verifies step by step (|| is pipeline)
        alert("ERROR: Denary inputs must be numbers between 0 and 255.");
        return false;
    }
    return true;
}

// verify hexadecimal (must be string, must only contain 2 characters, must only contain 0-9/A-F)
function verifyHexadecimal(input) {
    const hexTest = /^[0-9A-F]{2}$/;
    if (!hexTest.test(input)) {
        alert("ERROR: Hexadecimal inputs must be Hexadecimal and in range 00-FF (0-255)");
        return false;
    }
    return true;
}

// verify binary (must be int, must only contain 0s/1s, must only contain 8 characters)
function verifyBinary(input) {
    const binTest = /^[01]{1,8}$/;
    if (!binTest.test(input)) {
        alert("ERROR: Binary inputs must be Binary and in range 00000000-11111111 (Den: 0-255)");
        return false;
    }
    return true;
}

// checks if the input and user claimed type matches (returns true or false only)
function verifyType(check, input) {
    let verified;
    switch (check) {
        case "binary":
            verified = verifyBinary(input);
            break;
        case "denary":
            verified = verifyDenary(input);
            break;
        case "hexadecimal":
            verified = verifyHexadecimal(input);
            break;
        case "none":
            verified = true;
            break;
        default:
            verified = false;
            break;
    }
    console.log("Verification result for", check, ":", verified);
    return verified;
}
