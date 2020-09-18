/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    if (n < 19){
        if (n % 9 != 0){
            return (n % 9)
        }
        return (9)
    }
    else{
        let trackerList = [[1],[2],[3],[4],[5],[6],[7],[8],[9]]

        for (let i = 10; i <= n; i++){
            let sum = 0;
            let value = 0;
            value += i;
            while (value > 0) {
                sum += value % 10;
                value = Math.floor(n / 10);
            }
            let found = false;
            for (let numList of trackerList){
                if (numList[0] == sum){
                    numList.push(sum);
                    found = true;
                }
            }
            if (found == false){
                trackerList.push([sum])
            }
        }
        return trackerList;

        let longest = 0;
        for (let item of trackerList){
            if (item.length > longest){
                longest = item.length;
            }
        }
        let output = 0;
        for (let item of trackerList){
            if (item.length == longest){
                output += 1;
            }
        }

        return output;
    }

    /*
    i = 0
    while ((19 + (9 * (i))) <= n){
        i += 1
    }
    if (i < 9){
        if (n % 9 != 0){
            return ((n % 9) - i)
        }
        return (9 - i)
    }
    */
};