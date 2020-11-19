const urlify = (str,length) =>{
    let strTrimmedArray = str.slice(0,length).split(" ");
    let result = "";
    for(let i = 0;i<strTrimmedArray.length;i++){
        if(i === strTrimmedArray.length  - 1){
            result += strTrimmedArray[i];
            return result;
        }
        result  += strTrimmedArray[i] + "%20";
    }
}

console.log(urlify('Mr John Smith    ', 13) === 'Mr%20John%20Smith');