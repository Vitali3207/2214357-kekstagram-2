// Функция для проверки длины строки.

const stringLength = (string, maxLelgth) => {
  if (string.length <= maxLelgth) {
    return true;
  }
  return false;
};

// Строка короче 20 символов
stringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
stringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
stringLength('проверяемая строка', 10); // false


// Функция для проверки, является ли строка палиндромом.

const isPalindrom = (string) => {
  const optimizedString = string.replaceAll(' ', '').toLowerCase();

  let newString = '';

  for (let i = optimizedString.length - 1; i >= 0; i--) {
    newString += optimizedString[i];
  }
  return newString === optimizedString;
};

console.log(isPalindrom('топот')); // true
console.log(isPalindrom('ДовОд')); // true
console.log(isPalindrom('Кекс')); // false
console.log(isPalindrom('Лёша на полке клопа нашёл ')); // true


const getNumber = (string) => {
  const numberString = string.toString().replace(/\D/g, '');
  return parseInt(numberString, 10);
};

console.log(getNumber('2023 год')); // 2023
console.log(getNumber('ECMAScript 2022')); // 2022
console.log(getNumber('1 кефир, 0.5 батона')); // 105
console.log(getNumber('агент 007')); // 7
console.log(getNumber('а я томат')); // NaN

console.log(getNumber(2023)); // 2023
console.log(getNumber(-1)); // 1
console.log(getNumber(1.5)); // 15

// метод Match тоже можно))) Проверил с методом replace возвращает всё корректно
// Как перебрать с помощью цикла не разобрался, если возможно покажи пожалуйсто

