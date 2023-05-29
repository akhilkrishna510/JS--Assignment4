var readlineSync = require("readline-sync");
let num = readlineSync.question("enter a number: ");
let flag =0
for(let i=2;i<num;i++){
    if (num%i==0){
        flag=1
    }
}
    if(flag==0){

        console.log("Entered number is a Prime number");
}
    else{
        console.log("Entered number is not a Prime number");
}