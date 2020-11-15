function stringRotation(str1,str2){
    if(str1.length !== str2.length) return false;

    let stringConsider = str2 + str2;
    if(stringConsider.includes(str1)){
        return true;
    }else{
        return false;
    }
}

console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);