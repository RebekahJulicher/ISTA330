/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let check = (input.length / 2)
    for (i = 0; i < input.length; i++) {
        let number = 0
        let current = input[i]
        for (x = 0; x < input.length; x++) {
            if (input[x] == current) {
                number += 1
            }
        }
        if (number > check) {
            return current
        }
    }
    return -1
};