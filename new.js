'use strict';
// ques1
let username = prompt("what is your name ")
console.log("what is your name " + username);
alert (" welcome " + username);

// ques2
let bookType = prompt(" please enter your book type ?")
console.log(" please enter your book type ?"+ bookType);
alert (" you said your name " + username + '\n' + " your book type is " + bookType  );

// ques3
let bookNumber = prompt("how many book do you want?")
console.log("how many book do you want?" + bookNumber);
alert (" you said your name "  + username  + '\n' +  " your book type is " +  bookType   +'\n' +  "you order this amount of book "  + bookNumber);

// ques4
let bookdeliver = prompt("do you want a deliver service (yes, no)")
console.log( "do you want a deliver service (yes, no)" + bookdeliver);
alert (" you said your name is :  "  + username   +'\n' +  " your book type is : " + bookType + '\n' +  " you order this mount of book : " + bookNumber + '\n' + 
"this you answer for delivery service " + bookdeliver );

alert("we will waiting you" );
