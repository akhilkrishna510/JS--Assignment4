var readlineSync=require("readline-sync");
console.log("Enter 1 for addition, Enter 2 for substraction, Enter 3 for multiplication, Enter 4 for division");
let oprtn=readlineSync.question("enter the operation: ")
 let num1 =readlineSync.question ("enter the first number: ");
 let num2 = readlineSync.question("enter the second number: ");
 num1 = parseInt(num1)
 num2=parseInt(num2)
oprtn=parseInt(oprtn)
function addition(a,b) {
    let sum= a+b;
    return sum;
    }
function substraction(a,b) {
    let dif=a-b;
    return dif;   
}
function multiplication(a,b) {
     let product=a*b;
    return product;
}
function division(a,b) {
    let divide = a /b  
    return divide ; 
}
 if(oprtn==1){
    sum = addition(num1, num2) ;
    console.log("Answer is" , sum)
 }else if(oprtn==2){
    sub = substraction(num1 ,num2);
    console.log("Answer is" , sub);
 }else if(oprtn==3){
    mult= multiplication(num1, num2);
    console.log("Answer is",mult)
 }else if(oprtn==4){
    div=division(num1 ,num2)
    console.log("Answer is",div);
 }else{
    console.log("Invalid Operation");
 }