/*
progression:
user enters number, select number type
computer verifies number
if number type is correct:
    user enters desired conversion/binary addition
        if binary additon is desired:
            computer asks for second number
            computer verifies
                if number type is correct:

        else:
            computer converts number
            reset, if user desires
    number is returned
else:
return error
*/
//get the input!!!!!
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const check1 = document.getElementById("check1")
    const check2 = document.getElementById("check2")

    const input1 = document.getElementById("inputOne")
    const input2 = document.getElementById("inputTwo")

    function verify(input, input2, check1, check2) {
        if (input2 == "") {
            switch (check1) {
                case (check1 == "binary"):
                    break;
                case (check1 == "denary"):
                    break;
                case (check1 == "hexadecimal"):
                    break;

                default:
                    break;
            }
            switch (check2) {
                case (check2 == "binary"):
                    break;
                case (check2 == "denary"):
                    break;
                case (check2 == "hexadecimal"):
                    break;

                default:
                    break;
            }
        }
        else {

        }
    }
})

//verify denary (must be int, must be in range 0-255)
function verifyDenary(input){
    let number = input
    const denTest = /([0123456789])/;
    switch (number) {
        case denTest:
            return number < 256 && number > -1;
        default:
            return false;
    }
}

//verify hexadecimal (must be string, must only contain 2 characters, must only contain 0-9/A-F)
function verifyHexadecimal(input){
    let number = input
    const hexTest = /([0123456789ABCDEF]{2})/;
    switch (number) {
        case hexTest:
            return true
        default:
            return false;
    }

}
//verify binary (must be int, must only contain 0s/1s, must only contain 8 characters)
function verifyBinary(input){
    let number = input
    const binTest = /((?:[10]{2}){8})/;
    switch (number) {
        case binTest:
            return true;
        default:
            return false;
    }
}


//convert denary into binary
function Den2binary(input){
    let number = input
    let binaryResult =  []
    for (let i = 0; i < 9; i++) {
        binaryResult.push(binaryResult[i] = number % 2)
        number = number / 2
    }
    let output = binaryResult.join();
}
//convert denary into hexadecimal
function den2Hexadecimal(input){
    let binary = den2binary(input);
    let hexadecimal = bin2Hexadecimal(binary);

}
//convert binary into denary
function Bin2denary(input){
    let splitbinary = input.split()
    let map = new Map();

}
//convert hexadecimal into binary
function Hex2binary(input){
    let map = new Map(); //silly
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
    let pt1 = map.get(input.slice(0,1));
    let pt2 = map.get(input.slice(2,2));
    return pt1.toString() + pt2.toString();
}
//add two denary numbers
function add(input1, input2){
    return input1 + input2;
}

//These three can be made by utilizing previous code
//convert binary into hexadecimal
//convert hexadecimal into binary
//add two binary numbers, provide results in binary and denary. (notify user if 8 bit overflow)
    //sessionStorage.setItem(key,value) sets a value to be stored at key as a variable
    //document.getElementById() gets the value of textbox
    //document.getElementById("results").innerHTML = output; outputs variable output to html results
    console.log("test")
    function getNumber() {
        let str = document.getElementById("textbox")
        return str
    }

    function getSubmit() {
        let submitted = document.getElementById("submit")
    }
