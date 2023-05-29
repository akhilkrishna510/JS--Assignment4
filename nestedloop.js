var readlineSync = require("readline-sync");
let stng = readlineSync.question("enter the limit: ");
for(let i=1;i<=5;i++){
    let stng= ""
    for( let j=1;j<=i;j++){
        stng=stng+j
    }
    console.log(stng);
}