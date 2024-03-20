function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
  let answer;
  answer = principalAmount;
  let year = 1;
  while (year <= numberOfYears) {
    let interest = answer * annualInterestRate;
    answer += interest
    year++;
  }
  return answer.toFixed(2);
}
let A = compoundInterest(5000, 0.06, 5);
console.log(A);