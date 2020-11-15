// Time complexity O(n2), space complexity O(n)

function zeroMatrix(matrix){
    if(matrix.length === 0) return matrix;
    
    const width = matrix[0].length;
    const height = matrix.length;
    let zeroLocations = [];
    for(let row = 0;row < height;row++){
        for(let col = 0;col<width;col++){
            if(matrix[row][col] === 0){
                zeroLocations.push([row,col]);
            }
        }
    }
    // console.log('zero locations ',zeroLocations );
    let zeroRows = [];
    for(let location of zeroLocations){
        zeroRows.push(location[0]);
    }
    let zeroCols = [];
    for(let location of zeroLocations){
        zeroCols.push(location[1]);
    }
    console.log('rows',zeroRows);
    console.log('cols',zeroCols);
    matrix = matrix.map((eachMatrixRow,index) =>{
        let eachMatrixRowModified = [];
        if(zeroRows.includes(index)){
            for(let eachMatrixRowElement of eachMatrixRow){
                eachMatrixRowModified.push(0);
            }
            return eachMatrixRowModified;
        }
        for(let i = 0;i<eachMatrixRow.length;i++){
            if(zeroCols.includes(i)){
                eachMatrixRowModified.push(0);
                continue;
            }
            eachMatrixRowModified.push(eachMatrixRow[i]);
        }
        return eachMatrixRowModified;
    })

    return matrix;
    
}

console.log(zeroMatrix([
    [1,2,3,33,34,40],
    [4,0,11,12,13,14],
    [11,8,9,0,98,97],
    [11,8,9,99,98,97],
    [11,8,9,99,98,97],
]));

