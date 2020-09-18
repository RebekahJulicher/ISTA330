/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
    let output = [];
    for (let i = 0; i < input.length; i++){
        let product = 1;
        for (j = 0; j < input.length; j++){
            if (i != j){
                product *= input[j];
            }
        }
        output.push(product);
    }
    return output;
};
