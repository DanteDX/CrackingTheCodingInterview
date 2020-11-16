// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//my solution
// function chunk(array, size){
//     let result = [];
//     let tempResult = [];
//     if(array.length <= size) return [array];
//     for(let i = 0;i<array.length;i++){
//         if(i === array.length - 1){
//             tempResult.push(array[i]);
//             result.push(tempResult);
//             break;
//         }
//         tempResult.push(array[i]);
//         if(tempResult.length === size){
//             result.push(tempResult);
//             tempResult = [];
//         }
//     }
//     return result;
// }

//solution #1
// function chunk(array,size){
//     let result = [];
//     for(let element of array){
//         const last = result[result.length - 1];
//         if(!last || last.length === size){
//             result.push([element]);
//         }else{
//             last.push(element);
//         }
//     }
//     return result;
// }

//solution #2
function chunk(array,size){
    let result = [];
    let index = 0;
    while(index < array.length){
        result.push(array.slice(index,index+size));
        index += size;
    }
    return result;
}




module.exports = chunk;
