const oneAway = (str1,str2) =>{
    let lengthDifference = Math.abs(str1.length - str2.length);
    if(lengthDifference > 1){
        return false;
    } 

    let biggerStr = "";
    let smallerStr = "";
    if((str1.length > str2.length) || (str1.length === str2.length)){
        biggerStr = str1;
        smallerStr = str2;
    }else{
        biggerStr = str2;
        smallerStr = str1;
    }

    const createCharMap = str =>{
        let charMap = {};
        for(let char of str){
            charMap[char] = charMap[char] + 1 || 1;
        }
        return charMap;
    }

    let charMapBigger = createCharMap(biggerStr);
    let charMapSmaller = createCharMap(smallerStr);
    // console.log(charMapBigger,charMapSmaller);

    const oneAwayReal = (charMapBigger,charMapSmaller) =>{
        let singleFlag = false;
        for(let key in charMapBigger){
            if(!charMapSmaller[key]){
                if(singleFlag) return false;
                if(charMapBigger[key] === 1 && !charMapSmaller[key]){
                    singleFlag = true;
                    continue;
                }
            }else if(charMapSmaller[key]){
                if(charMapBigger[key] !== charMapSmaller[key]){
                    return false;
                }
            }
        }
        return true;
    }
    
    return oneAwayReal(charMapBigger,charMapSmaller);
}


console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);