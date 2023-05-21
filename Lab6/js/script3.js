console.log("Задача 3");
let number = parseFloat(prompt("Введіть число:"));
console.log("Введені дані:", number);

// Перевірка коректності
if (isNaN(number)) {
  console.log("Задача 3. Error");
  alert("Введено некоректне число.");
} else {
  func(number, function(result) {
    console.log("Результат:", result);
  });
}

function func(num, callback) {
  let result = Math.pow(num, 4);
  console.log(result);
}