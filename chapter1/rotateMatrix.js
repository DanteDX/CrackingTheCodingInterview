function rotateMatrix(matrix){
    //each cases, empty matrix
    if(matrix.length === 0) return matrix;
    
    //for clockwise
    return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());

    //for anti clockwise
    // let result = [];
    // for(let index = matrix[0].length - 1;index>=0;index--){
    //     result.push(matrix.map(row => row[index]));
    // }
    // return result;
}

console.log(rotateMatrix([
    [1,2,3,99],
    [11,12,13,101],
    [14,18,20,199]
]))