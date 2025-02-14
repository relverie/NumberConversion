//convert denary into binary
function den2Binary(input){
    let number = input
    let binaryResult =  []
    for (let i = 0; i < 9; i++) {
        binaryResult.push(binaryResult[i] = number % 2)
        number = number / 2
    }
    return (binaryResult.join()).toString();
}
//convert denary into hexadecimal
function den2Hex(input) {
    return (input |> den2Binary |> bin2Hex).toString();
}