/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. 
Twelve is written as, XII, which is simply X + II. 
The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 

There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. 
Input is guaranteed to be within the range from 1 to 3999.


Example:
input: "IV"
output: 4
*/

var romanToInteger = function(s) {
    let output = 0;
    for (let i = s.length - 1; i >= 0; i--){
        let curr = s.charAt(i);
        let prev = s.charAt(i+1);

        if (curr == 'I'){
            if (i == s.length - 1 || (prev != 'V' && prev != 'X')){
                output += 1;
            }
            else if (prev == 'V' || prev == 'X'){
                output -= 1;
            }
        }

        if (curr == 'V'){
            output += 5;
        }
        
        if (curr == 'X'){
            if (i == s.length - 1 || (prev != 'L' && prev != 'C')){
                output += 10;
            }
            else if (prev == 'L' || prev == 'C'){
                output -= 10;
            }
        }

        if (curr == 'L'){
            output += 50;
        }

        if (curr == 'C'){
            if (i == s.length - 1 || (prev != 'D' && prev != 'M')){
                output += 100;
            }
            else if (prev == 'D' || prev == 'M'){
                output -= 100;
            }
        }

        if (curr == 'D'){
            output += 500;
        }
        if (curr == 'M'){
            output += 1000;
        }

    }
    return output;

};