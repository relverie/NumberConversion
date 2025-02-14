const form = document.querySelector('form');
form.addEventListener ('submit', function(event)
{
    event.preventDefault();
    let check1 = document.getElementById("check1").trim()
    let check2 = document.getElementById("check2").trim()

    let input1 = document.getElementById("inputOne").trim()
    let input2 = document.getElementById("inputTwo").trim()

    let verify1 = verifyType(check1, input1)
    let verify2 = verifyType(check2, input2)

    if (verify1 && verify2 === true) {
        output(check1, check2, check2, input1, input2)
    }
});

function output(input1,check1,input2,check2) {
    switch (check1) {
        case "binary":
            document.getElementById("ResultDen").innerHTML = bin2Denary(input1)
            document.getElementById("ResultBin").innerHTML = input1
            document.getElementById("ResultHex").innerHTML = bin2Hex(input1)
            break;
        case "denary":
            document.getElementById("ResultDen").innerHTML = input1
            document.getElementById("ResultBin").innerHTML = den2Binary(input1)
            document.getElementById("ResultHex").innerHTML = den2Hex(input1)
            break;
        case "hexadecimal":
            document.getElementById("ResultDen").innerHTML = hex2Denary(input1)
            document.getElementById("ResultBin").innerHTML = hex2Binary(input1)
            document.getElementById("ResultHex").innerHTML = input1
            break;
    }

    let num1; //converts input1 into denary
    switch (check1) {
        case "binary":
            num1 = bin2Denary(input1)
            break;
        case "denary":
            num1 = input1
            break;
        case "hexadecimal":
            num1 = hex2Denary(input1)
            break;
    }

    let num2; //converts input2 into denary
    switch (check2) {
        case "binary":
            num2 = bin2Denary(input2)
            break;
        case "denary":
            num2 = input2
            break;
        case "hexadecimal":
            num2 = hex2Denary(input2)
            break;
        case "none":
            num2 = 0
            break;
        default:
            num2 = 0
            break;
    }
    let num3 = num1 + num2;
    document.getElementById("DenAddition").innerHTML = num3
    document.getElementById("BinAddition").innerHTML = den2Binary(num3)
    document.getElementById("HexAddition").innerHTML = den2Hex(num3)
}