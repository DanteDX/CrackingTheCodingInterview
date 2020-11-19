const checkPermute = (str1,str2) =>{

    if(str1.length !== str2.length) return false;

    let charMapOne = {};
    let charMapTwo = {};
    for(let char of str1){
        charMapOne[char] = charMapOne[char] + 1 || 1;
    }
    for(let char of str2){
        charMapTwo[char] = charMapTwo[char] + 1 || 1;
    }

    if(Object.keys(charMapOne).length !== Object.keys(charMapTwo).length) return false;
    

    for(let key in charMapOne){
        if(!charMapTwo[key]){
            return false;
        }
        if(charMapOne[key] !== charMapTwo[key]){
            return false;
        }
    }
    return true;

}


console.log(checkPermute('aba', 'aab'), true);

console.log(checkPermute('aba', 'aaba'), false);

console.log(checkPermute('aba', 'aa'), false);