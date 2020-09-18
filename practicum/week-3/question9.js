/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
    let output = 0;
    let checkList = [A[0]];

    for (let i = 1; i < A.length; i++){
        let current = A[i];
        let sorted = false;
        while (sorted == false){
            let duplicate = false;
            for (let num of checkList){
                if (current == num){
                    duplicate = true
                }
            }
            if (duplicate == true){
                current += 1;
                output += 1;
            }
            else{
                A[i] = current;
                sorted = true;
                checkList.push(A[i])
            }
        }
    }
    return output;
};