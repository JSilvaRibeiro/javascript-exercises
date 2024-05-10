const removeFromArray = function(arr, ...numbers) {
    let newArray = [];

    // iterate through arr
    arr.forEach((num) => {
        if(!numbers.includes(num)) {
            newArray.push(num);
        } 
    })

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
