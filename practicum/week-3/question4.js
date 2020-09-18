/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {
  //running total list and for lists, return running total list
  // and the number and check number mini list
  let output = [];
  output.push([]);

  for (let i = 0; i < (input.length); i++){
    let current = input[i];
    let runningTotal = [current];
    
    if (i < input.length - 1){
      for (let j = i + 1; j < input.length; j++){
        runningTotal.push(input[j]);
        output.push([current, input[j]]);

        if (runningTotal.length != 2){
          output.push(runningTotal);
        }
      }
    }
  }
  return output;

};