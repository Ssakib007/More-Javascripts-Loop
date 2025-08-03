// odd numbers

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// odd numbers
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 1) {
    console.log(i);
  }
}

// odd numbers
for (let i = 1; i <= 20; i = i + 2) {
  console.log(i);
}

// give me the list of numbers between 1 to 30 divisible by 5.

for (let i = 1; i <= 30; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
// give me the list of numbers between 1 to 30 divisible by 3 or 5.
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}

// give me the list of numbers between 1 to 30 divisible by 3 and 5.
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// give me the sum of numbers that are divisible by 3 from 1 to 20.
let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    sum = sum + i;
  }
}
console.log("Total sum of numbers divisible by 3 is", sum);
