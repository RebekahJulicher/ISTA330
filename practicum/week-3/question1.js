/*
There are n soldiers standing in a line. 
Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers 
under the following rules:

1. Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
2. A team is valid if:  (rating[i] < rating[j] < rating[k]) where (0 <= i < j < k < n).

Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).


 Example:
         input: [2,5,3,4,1]
         output: 1
         We can only form one team given the 
         conditions: (2,3,4)
*/

var howManyTeams = function(input) {
        let output = 0;
        for (let i = 0; i < (input.length - 2); i++){
                let first = input[i];
                for (let j = i + 1; j < (input.length - 1); j++){
                        let second = input[j];
                        if (second > first){
                                for (let k = i + 2; k < input.length; k++){
                                        let third = input[k]
                                        if (third > second){
                                                output += 1;
                                        }
                                }
                        }
                }
        }
};