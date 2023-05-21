console.log("Задача 1");
let array = generateArray(12); // Генеруємо масив з 12 чисел
console.log("Введені дані:", array);
let multiplesOfFive = array.filter(function (num) {
  return num % 5 === 0;
});
multiplesOfFive.sort(function (a, b) {
  return a - b;   
});
console.log("Результат:", multiplesOfFive);


// Функція для генерації масиву з випадковими цілими числами
function generateArray(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 100) + 1); // Випадкові числа від 1 до 100
  }
  return array;
}
let nextTask1 = confirm("Ви хочете перейти до розв’язку наступної задачі?");