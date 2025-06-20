const arr=[1, 2, 3, 4, 5];

function findSum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }

    return sum;
}  
    console.log(findSum(arr));



   const output=arr.reduce(function(acc,crr){
    acc=acc+crr;
    return acc;
   },0);

   console.log(output);

   const result=arr.reduce(function(max, crr){

    if(crr>max){
        max=crr;
    }
    return max;
   },0);

   console.log(result);
