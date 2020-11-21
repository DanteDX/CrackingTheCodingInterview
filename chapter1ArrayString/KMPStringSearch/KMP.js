/* Time complexity O(W), W is the length of the pattern string
Space complexity O(W), W is the length of the pattern string */

function KMP(str,pattern){
    function longestPrefix(pattern){
        let prefix = new Array(pattern.length);
        let maxPrefix =  0;
        prefix[0] = 0;

        for(let i = 1;i<str.length;i++){
            while((str.charAt(i) !== str.charAt(maxPrefix)) && (maxPrefix > 0)){
                maxPrefix = prefix[maxPrefix - 1];
            }
            if(str.charAt(maxPrefix) === str.charAt(i)){
                maxPrefix++;
            }
            prefix[i] = maxPrefix;
        }
        return prefix;
    }

    let prefixTable = longestPrefix(pattern);
    let patternIndex = 0;
    let strIndex = 0;

    while(strIndex < str.length){
        if(str.charAt(strIndex) !== pattern.charAt(patternIndex)){
            if(patternIndex !== 0){
                patternIndex = prefixTable[patternIndex - 1];
            }else{
                strIndex++;
            }
        }else if(str.charAt(strIndex) === pattern.charAt(patternIndex)){
            strIndex++;
            patternIndex++;
        }
        if(patternIndex === pattern.length){

            return {found:true,foundingIndex:(strIndex - pattern.length)}
        }
    }

    return {found:false, foundingIndex:null};

}

module.exports = KMP;