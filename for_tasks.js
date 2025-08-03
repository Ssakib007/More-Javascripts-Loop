/***
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
*/

for (let i = 1; i <= 60; i++) {
  console.log(
    "I will invest at least 6 hrs every single day for next 60 days!",
    i
  );
}

/***Subtask-1:
Find all the odd numbers from 61 to 100.
*/

for (let ii = 61; ii <= 100; ii++) {
  if (ii % 2 === 1) {
    console.log(ii);
  }
}

/***
Subtask-2:
Find all the even numbers from 78 to 98.
*/

for (let jj = 78; jj <= 98; jj++) {
  if (jj % 2 === 0) {
    console.log(jj);
  }
}

/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
*/

let sumOdd = 0;
for (let kk = 91; kk <= 129; kk++) {
  if (kk % 2 === 1) {
    sumOdd = sumOdd + kk;
  }
}
console.log("Total sum of odd numbers from 91 to 129 is", sumOdd);

/***
Subtask-2:
Display sum of all the even numbers from 51 to 85.
*/

let sumEven = 0;
for (let ll = 51; ll <= 85; ll++) {
  if (ll % 2 === 0) {
    sumEven = sumEven + ll;
  }
}
console.log("Total sum of even numbers from 51 to 85 is", sumEven);

/***
Generate a multiplication table for number 9
*/

for (let mm = 1; mm <= 10; mm++) {
  console.log("9 x", mm, "=", 9 * mm);
}

/***
Implement a countdown timer that counts down from 81 to 65.
*/

for (let nn = 81; nn >= 65; nn--) {
  console.log(nn);
}
