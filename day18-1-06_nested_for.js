// Q 1. Find Two Number From Array Which Has Addition Is Equal To Target
// var i, j;
// var arr = [3, 54, 65, 32, 2, 23, 56, 76, 17,18];
// var target = 20;
// for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j]==target) {
//              console.log(arr[i],arr[j],"Got It!!");
//         }
//     }
// }

// Q 2. Find Two Number From Array Which Has Subtraction Is Equal To Target
var a,b;
var arr = [3, 54, 34, 32, 2, 23, 39, 76, 17,18,55];
var target = 21;
for (a = 0; a < arr.length; a++) {
    for (b = a + 1; b < arr.length; b++) {
        if (arr[b] - arr[a]==target) {
             console.log(arr[a],arr[b],"Got It!!");
        }
        else if(arr[a] - arr[b]==target){
            console.log(arr[a],arr[b],"Got It!!");
        }
    }
}

// Q 3. Find Three Number Which Has Addition Is Equal To Target
// var x, y, z;
// var target = 93;
// var arr = [1,3, 54, 34, 32, 89, 23, 39, 76, 91,1];
// for (x = 0; x < arr.length; x++) {
//     for (y = x + 1; y < arr.length; y++) {
//         for (z = y + 1; z < arr.length; z++) {
//             if (arr[x] + arr[y] + arr[z] == target) {
//                 console.log(arr[x],"+",arr[y],"+", arr[z],"=",arr[x]+arr[y]+arr[z] )
//             } 
            
//         }
        
//     }

// }