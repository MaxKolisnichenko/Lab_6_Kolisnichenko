console.log("Задача 2");
const input = prompt("Введіть рядок:");
const count = countNumbersInString(input);

// Перевірка коректності
if (input.trim() === "") {
  console.log("Рядок порожній. Будь ласка, введіть текстовий рядок.");
} else {
  console.log("Введений рядок:", input);
  console.log("Кількість чисел у рядку:", count);
}

function countNumbersInString(input) {
  const regex = /\b([1-9][0-9]*|0?[1-9][0-9]*\.[0-9]+)\b/g;
  const matches = input.match(regex);
  
  if (matches === null) {
    return 0;
  } else {
    return matches.length;
  }
}