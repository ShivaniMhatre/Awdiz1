var num1 = 1234;
var num2 = 5678;
function subtraction() {
    var sub = num1 - num2;
    if(sub>0){
        return sub;
    }
    else if(sub==0){
        return "Sub is Greater than ZERO"
    }
    return "Sub id not eqal to 0 or not greater than 0"
}
var res=subtraction();
console.log(subtraction())
subtraction()