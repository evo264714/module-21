//* 1. Variable
var myName = 'Evo';

//* Math Operation: +, -, *, /
//* Shorthand: +=, -=, *=, /=
//* ++, --

//* 2. Array
var friends = ['Messi', 'Neymar', 'Ronaldo', 'Salah', 'Suarez'];

var thirdFriend = friends[2];
friends[3] = 'Haland';
// console.log(friends);

//* 3. Conditionals
//* >, <, >=, <=, ==, ===, !=, !==

if(friends.length < 2){
    console.log('not enough friends');
}
else{
    console.log('Enough friends');
}

//* 4. Loop
var number = 0;
while(number <= 6){
    console.log(number);
    number++;
}

for(var i = 0; i <= 10; i++){

}

//* 5. Function
function isMoonUp(time){
    if(time > 7){
        return true;
    }
}

//* 6. Object
var palye = {
    name: 'messi',
    age: 36,
    height: "5 foot 4"
}