/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
    let visited = [[0,0]];

    for (i = 0; i < s.length; i++){
        let currLocation = visited[visited.length - 1];
        let direction = s.charAt(i);
        if (direction == 'N') {
            currLocation[1] += 1;
        }

        else if (direction == 'S'){
            currLocation[1] -= 1;
        }

        else if (direction == 'E'){
            currLocation[0] += 1;
        }

        else if (direction == 'W'){
            currLocation[0] -= 1;
        }

        /*
        for (let locations of visited){
            if (locations[0] == currLocation[0] && 
                locations[1] == currLocation[1]){
                    return false;
                }
        }
        */
        visited.push(currLocation);
    }

    return visited;
    return true;

};