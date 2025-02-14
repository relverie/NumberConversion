//convert hexadecimal into binary
function hex2Binary(input){
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

//Convert hexadecimal to denary
function hex2Denary(input) {
    return (input |> hex2Binary |> bin2Denary).toString();
}