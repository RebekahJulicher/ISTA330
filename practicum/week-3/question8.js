/*
Given an array with n objects colored red, white or blue, 
sort them in-place(refer to https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent, 
with the colors in the order red, white and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not supposed to use the library's sort function for this question.

Example:
input:  [2,0,2,1,1,0]
output: [0,0,1,1,2,2]
*/

var sortColors = function(input) {
    for (i = 0; i < (input.length - 1); i++){
        let check = 0;
        let exists = false
        let swap = false;

        while(swap == false){
            if (input[i] == check){
                swap = true;
            }
            else{
                for (let num = i + 1; num < input.length; num++){
                    if (input[num] == check){
                        exists = true;
                    }
                }
                if (exists == true){
                    let j = i + 1;
                    let value = input[i];
                    while (j < input.length && swap == false){
                        if (input[j] == check){
                            input[i] = check;
                            input[j] = value;
                            swap = true;
                        }
                        j += 1
                    }
                
                }
                else{
                    check += 1;
                }
            }
        }

    }
    return input;
};