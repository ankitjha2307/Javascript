// function statement 
function a() {
  console.log("a called");
}


// Function expression

var b = function () {
  console.log("b called");
}
a();
b();
// Function declaration

// function statement is known as function declaration

// Anonymas function 

// function () {

// }

//  it is usend ehwn the function are used as values

// diffrence between name Parameters ans Arguments? 

var b = function (param1,param2) {
  console.log("b called");
}

// b(1,2); 
// these are arguments (1,2)


// First class functions

var b = function (param1,) {
  console.log(param1);
}

b(function(){
    
});
