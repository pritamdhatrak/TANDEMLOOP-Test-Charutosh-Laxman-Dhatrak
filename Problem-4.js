const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
let result = {};

for (let i = 1; i <= 9; i++) {
  result[i] = input.filter(num => num % i === 0).length;
}

console.log(result);
