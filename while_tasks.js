/***
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
*/

let i = 1;
while (i <= 60) {
  console.log(
    "I will invest at least 6 hrs every single day for next 60 days!",
    i
  );
  i++;
}

/***
Subtask-1:
Find all the odd numbers from 61 to 100.
*/

let ii = 61;
while (ii <= 100) {
  if (ii % 2 === 1) {
    console.log(ii);
  }
  ii++;
}

// Subtask-2:
// Find all the even numbers from 78 to 98.

let jj = 78;
while (jj <= 98) {
  if (jj % 2 === 0) {
    console.log(jj);
  }
  jj++;
}

// Subtask-1:
// Display sum of all the odd numbers from 81 to 131.
//  */

let kk = 81;
let sumOdd = 0;
while (kk <= 131) {
  if (kk % 2 === 1) {
    sumOdd = sumOdd + kk;
  }
  kk++;
}
console.log("Total sum of odd numbers from 81 to 131 is", sumOdd);


/***
Subtask-2:
Display sum of all the even numbers from 206 to 311.
*/

let ll = 206;
let sumEven = 0;
while (ll <= 311) {
  if (ll % 2 === 0) {
    sumEven = sumEven + ll;
  }
  ll++;
}
console.log("Total sum of even numbers from 206 to 311 is", sumEven);

/***
As Era is learning now, she wants to explore more and more. Tell Era to generate a multiplication table for number 5
*/

let mm = 1;
while (mm <= 10) {
  console.log("5 x", mm, "=", 5 * mm);
  mm++;
}

/***
Implement a countdown timer that counts down from 21 to 15.
*/

let nn = 21;
while (nn >= 15) {
  console.log(nn);
  nn--;
}
