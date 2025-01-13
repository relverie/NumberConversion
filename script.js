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

//verify denary (must be int, must be in range 0-255)
//verify hexadecimal (must only contain 2 characters, must only contain 0-9/A-F)
//verify binary (must be int, must only contain 0s/1s, must only contain 8 characters)

//convert denary into binary
//convert denary into hexadecimal
//add two denary numbers

//convert binary into denary
//convert hexadecimal into denary

//These three can be made by utilizing previous code
//convert binary into hexadecimal
//convert hexadecimal into binary
//add two binary numbers, provide results in binary and denary. (notify user if 8 bit overflow)

// Your JavaScript goes here!
    //sessionStorage.setItem(key,value) sets a value to be stored at key as a variable
    //document.getElementById() gets the value of textbox
    //document.getElementById("results").innerHTML = output; outputs variable output to html results
    console.log("Hello, World!")
    function getstr()
      str = document.getElementById("textbox")
    return str
