// let and const -> shiny and new
// var -> old and busted
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log("STILL THERE?", i); // works?

function scope() {
    var canYouSeeMe = false;

    function inAFunction() {
        console.log("I'm in a function! Yay!");
    }

    console.log("yo");
}

console.log(canYouSeeMe);