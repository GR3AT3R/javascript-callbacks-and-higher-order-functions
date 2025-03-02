// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(operation(array[i]));
  }
  return newArray;
}

function upSalaries(num) {
  return num + 5000;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

// Using `forEach` function here
const newEmployeeSalaries = forEach(employeeSalaries, upSalaries);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
