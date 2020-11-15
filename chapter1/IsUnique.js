// my solution using charMap
const everyCharUnique = str =>{
    let charMap = {};
    for(let char of str){
        charMap[char] = charMap[char] + 1 || 1;
    }
    for(let char in charMap){
        if(charMap[char] > 1) return false;
    }
    return true;
}

//O(n2) without using object
const everyCharUnique = str =>{
    for(let i = 0;i<str.length;i++){
        for(let j = i + 1;j<str.length;j++){
            if(str[i] === str[j]) return false;
        }
    }
    return true;
}


console.log(everyCharUnique('abcd'), 'true');
console.log(everyCharUnique('abccd'), 'false');
console.log(everyCharUnique('bhjjb'), 'false');
console.log(everyCharUnique('mdjq'), 'true');