
// var x; -> created by line 5

function impliedGlobal() {
    x = "Gonna give it to ya!"; // JS thinks you're accessing a global variables so it creates one
}


function hoist() {
    console.log("X: ", x);
    var x = "gonna give it to ya!";
    console.log("X: ", x);
}

function actual() {
    var x;
    console.log("X: ", x);
    x = "gonna give it to ya!";
    console.log("X: ", x);
}