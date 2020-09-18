/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
    if (s.length == 0){
        return true;
    }

    let stripped = [];
    for (let i = 0; i < s.length; i++){
        let curr = s.charAt(i)
        if (((/[a-zA-Z]/).test(curr)) == true){
            stripped.push(curr.toLowerCase());
        }
    }

    let output = true;
    let reversed = stripped.reverse();
    for (let x = 0; x < s.length; x++){
        if (stripped[x] != reversed[x]){
            output = false;
        }
    }

    return output;
};