console.log("Script loaded and executing");

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let check1 = document.querySelector('input[name="check1"]:checked')?.value;
    let check2 = document.querySelector('input[name="check2"]:checked')?.value;
    let input1 = (document.getElementById("inputOne")).value;
    let input2 = (document.getElementById("inputTwo")).value;

    console.log("Input1:", input1, "Check1:", check1);
    console.log("Input2:", input2, "Check2:", check2);

    let verify1 = verifyType(check1, input1);
    let verify2 = verifyType(check2, input2);

    console.log("Verify1:", verify1, "Verify2:", verify2);

    if (verify1 === true && verify2 === true) {
        output(input1, check1, input2, check2);
    }
});

function output(input1, check1, input2, check2) {
    switch (check1) {
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

    let num1; // converts input1 into denary
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

    let num2; // converts input2 into denary
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
    let num3 = parseInt(num1) + parseInt(num2);
    document.getElementById("DenAddition").innerHTML = num3;
    document.getElementById("BinAddition").innerHTML = den2Binary(num3);
    document.getElementById("HexAddition").innerHTML = den2Hex(num3);
}

//====================
// Conversion Processes below
//====================

// convert hexadecimal into binary
function hex2Binary(input) {
    let map = new Map(); // silly
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
function hex2Denary(input) {
    return (bin2Denary(hex2Binary(input))).toString();
}

// convert denary into binary
function den2Binary(input) {
    let number = parseInt(input, 10);
    return number.toString(2).padStart(8, '0');
}

// convert denary into hexadecimal
function den2Hex(input) {
    return (bin2Hex(den2Binary(input))).toString();
}

// convert binary into denary
function bin2Denary(input) {
    let decimal = 0;
    for (let i = 0; i < input.length; i++) {
        decimal = decimal * 2 + (input[i] === '1' ? 1 : 0);
    }
    return decimal.toString();
}

// convert binary to hexadecimal
function bin2Hex(input) {
    let hex = parseInt(input, 2).toString(16).toUpperCase();
    return hex.padStart(2, '0'); // Ensures two-digit output (00-FF)
}

//====================
// Verification Processes below
//====================

// verify denary (must be int, must be in range 0-255)
function verifyDenary(input) {
    if (!/^\d+$/.test(input) || input < 0 || input > 255) {
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
    const binTest = /^[01]{8}$/;
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