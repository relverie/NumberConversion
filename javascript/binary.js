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

//convert binary to hexadecimal
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