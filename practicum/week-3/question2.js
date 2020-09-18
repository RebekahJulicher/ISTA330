
/*
Given an array of integers, 1 ≤ input[i] ≤ n (n = size of array), 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

 var findDuplicates = function(input) {
    let output = [];
    for (i = 0; i < input.length; i++) {
        let current = input[i]
        for (x = i+1; x < input.length; x++) {
            if (output.includes(current) == false){
                if (current == input[x]) {
                    output.push(current);
                }
            }
        }
    }
    return output;
    
 };
