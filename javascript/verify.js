//verify denary (must be int, must be in range 0-255)
function verifyDenary(input){
    let number = input
    const denTest = /([0123456789])/;
    switch (number) {
        case denTest:
            return number < 256 && number > -1;
        default:
            alert("ERROR: Denary inputs must be Denary and in range 0-255 (Den: 0-255)")
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
            alert("ERROR: Hexadecimal inputs must be Hexadecimal and in range 00-FF (0-255)")
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
            alert("ERROR: Binary inputs must be Binary and in range 00000000-11111111 (Den: 0-255)")
            return false;
    }
}

//checks if the input and user claimed type matches (returns true or false only)
function verifyType(input, check){
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
            verified = true
            break;
        default:
            verified = false
            break;
    }
    return verified;
}

//Usage - assign verifyType to a variable
