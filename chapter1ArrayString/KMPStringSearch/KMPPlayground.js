const KMP = require("./KMP");

// KMP(str:string, pattern:string):{found:boolean,foundIndex:number|null}

console.log(KMP('stringstring','string')); // 0
console.log(KMP('streamam','am')); //4
console.log(KMP('stream','xyz')); //-1, not found