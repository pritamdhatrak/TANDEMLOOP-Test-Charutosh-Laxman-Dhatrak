const a = 6; 
let result = [];
for (let i = 1; i <= a; i++) {
  if (i % 2 !== 0) {
    result.push(2 * result.length + 1);
  }
}
console.log(result.join(", "));
