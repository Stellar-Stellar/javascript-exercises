const reverseString = function(string) {
    let reversed = ""
    let position = string.length
    for (let i = 0; i <= string.length; i++) {
        reversed += string.charAt(position)
        position = position - 1
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
