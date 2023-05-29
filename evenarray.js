var readlineSync = require("readline-sync");
let size = readlineSync.question("Enter the size of array: ")
console.log("Enter the values of array: ")

const a=[];
let x=0;

for(let i=0;i<size;i++){
    a[i]=readlineSync.question(" ");
    if (a[i]%2==0){
        x=x+1;
    }
}
console.log("Number of even numbers in the array = "+x);