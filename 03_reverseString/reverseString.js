const reverseString = function(str) {
    let stringToArray = str.split("");
    stringToArray.reverse();

    let arrayToString = stringToArray.join(""); 
    return arrayToString;


};

// Do not edit below this line
module.exports = reverseString;
