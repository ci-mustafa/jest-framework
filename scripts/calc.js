function addition(numOne=0, numTwo=0) {
    if(typeof numOne === "string" || typeof numTwo === "string") {
        return "Parameter should be type of integer";
    };
    if(typeof numOne === "object" || typeof numTwo === "object") {
        return "Can not add null values";
    };
    return numOne + numTwo;
};


module.exports = addition;