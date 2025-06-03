function x(){
    var i=1;
    setTimeout(function (){
        console.log(i);
    },1000)
}
x();

console.log("Start");

setTimeout(() => {
  console.log("This runs after 3 seconds");
}, 3000);

console.log("End");

//setTime out is a built in function used to delay the execution of a function or code snippet after a specified time \

// question :- write the output 

function x(){
    for( var i=1;i<=5;i++){
        setTimeout( function(){
            console.log(i);
        },i*1000)
    }
}
x();

// this will print five time 6 but if we change var to let then it print 1 2 3 4 5 in every 1000 milisecond. 
// this is because var is h function scoped and let is a blocked 

function x(){
    for( let i=1;i<=5;i++){
        setTimeout( function(){
            console.log(i);
        },i*1000)
    }
}
x();
