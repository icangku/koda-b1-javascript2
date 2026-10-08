const numbers = [1, 2, 3, 14, 5, 6, 7, 8, 9, 10];

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  console.log(`The max number is ${max}`);
}
function findMin(numbers) {
  let min = numbers[0];
  let i = 0;
  do {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    i++;
  } while (i <= numbers.length - 1);

  console.log(`The min number is ${min}`);
}
function findAvg(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const avg = sum / numbers.length;
  console.log(`The average is: ${avg}`);
}

findMax(numbers);
findMin(numbers);
findAvg(numbers);
