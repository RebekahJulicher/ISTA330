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
        if ((curr.toLowerCase() != curr.toUpperCase())){
            stripped.push(curr.toLowerCase());
        }
    }

    let output = true;
    let a = 0;
    for (b = (stripped.length - 1); b >= 0; b--){
        if (stripped[a] != stripped[b]){
            output = false;
        }
        a += 1
    }

    return stripped;
    return output;
};