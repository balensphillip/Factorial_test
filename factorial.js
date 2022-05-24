// iterative approach
function iterativeFactorial(n) {
  let answer = 1;
  if (n === 0 || n === 1) {
    return answer;
  }
  for (let i = n; i >= 1; i--) {
    answer *= i;
  }
  return answer;
}
const n = 0;
answer = iterativeFactorial(n);
console.log(`The factorial of ${n} is ${answer}`);

module.exports = { iterativeFactorial };
