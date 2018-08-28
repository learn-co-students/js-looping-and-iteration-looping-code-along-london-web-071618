// Code your solutions in this file

function printBadges(employees) {
    for (let i=0; i < employees.length; i++) {
      console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
    }
    return employees;
}


function tailsNeverFails() {
  let accumulate = 0;
  function coinToss () {
    return Math.random() >= 0.5;
  }
  while (coinToss()) {
    accumulate ++;
  }
  return `You got ${accumulate} tails in a row!`;
}
