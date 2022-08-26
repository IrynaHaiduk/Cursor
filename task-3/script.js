/* (!) У функціях не потрібно виводити ніяких даних, вони мають бути чистими, по можливості. 
Після чого в кінці ДЗ потрібно обернути виклик ваших функцій в return або document.writeln.

Приклад: Ваша функція об'явлена десь const myFunc = () => { ...}, в кінці вашого ДЗ ви виводите результат виклику
 document.writeln(`Функція №1: ${myFunc("аргументи, якщо є")}`)

1.Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
2.Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. 
Використовуйте цикл
3.Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
4.Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%).
 Приклад: 1000 -> 805
5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
7.Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 
Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
8.Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124
9.Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
10.Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, 
isPalyndrom("Я несу гусеня") -> true
11.Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
 Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим" */

document.addEventListener('DOMContentLoaded', () => {

  function getMaxDigit(number) {
    const maxValue = Math.max(...String(number).split(''));
    return (maxValue);
  };

  function powerNumber(number, pow) {
    let product = 1;

    for (let i = 1; i <= pow; i++) {
      product *= number;
    }

    return (product);
  };

  function uppercaseFirstLetter(word) {
    const newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

    return (newWord);
  };

  function calcNetSalary(salary) {
    const tax1 = 1.5;
    const tax2 = 18;
    const netSalary = salary - salary * (tax1 + tax2) / 100;

    return (netSalary);
  };

  function getRandomNumber(range1, range2) {
    const randomNumber = Math.random() * (range2 - range1) + range1;

    return (Math.round(randomNumber));
  };

  function countLetter(letter, word) {
    let counter = 0;
    letter = letter.toLowerCase();
    word = word.toLowerCase();

    for (let i = 0; i <= word.length; i++) {
      if (word[i] === letter) {
        counter++;
      } else {
        continue;
      }
    }

    return (counter);
  };

  function convertCurrency(currency) {
    const uahPerDollar = 0.027;
    const dollarPerUah = 36.96;
    let result;

    if (currency.slice(-1) === '$') {
      result = `${parseInt(currency) * dollarPerUah} грн`;
    } else if (currency.slice(-3).toLowerCase() === 'uah') {
      result = `${parseInt(currency) * uahPerDollar} $`;
    } else {
      result = 'Error';
    }

    return (result);
  };

  function getRandomPassword(length = 8) {
    let password = '';

    for (let i = 1; i <= length; i++) {
      const randomNumber = (Math.random() * 10).toFixed();
      password += randomNumber;
    }

    return (Number(password));
  };

  function deleteLetters(letter, word) {
    let newWord = '';
    letter = letter.toLowerCase();
    word = word.toLowerCase();

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        continue;
      } else {
        newWord += word[i];
      }
    }

    return (newWord);
  };


  function isPalyndrom(string) {
    string = string.toLowerCase().replace(/ /g, '');
    const reverseString = string.split('').reverse().join('');
    
    return (reverseString === string);
  };

  function deleteDuplicateLetter(string) {
    const array = string.toLowerCase().split('');
    const unique = array.filter((element, index, array) => array.indexOf(element) === array.lastIndexOf(element));

    return (unique.join(''));
  };


  document.writeln(`<ul>
                      <li>Функція 1 - ${getMaxDigit(987)}</li>
                      <li>Функція 2 - ${powerNumber(21, 3)}</li>
                      <li>Функція 3 - ${uppercaseFirstLetter('вЛАД')}</li>
                      <li>Функція 4 - ${calcNetSalary(1000)}</li>
                      <li>Функція 5 - ${getRandomNumber(1, 10)}</li>
                      <li>Функція 6 - ${countLetter("а", "Асталавіста")}</li>
                      <li>Функція 7.1 - ${convertCurrency("100$")}</li>
                      <li>Функція 7.2 - ${convertCurrency("2500uAh")}</li>
                      <li>Функція 7.3 - ${convertCurrency("2500euro")}</li>
                      <li>Функція 8.1 - ${getRandomPassword(4)}</li>
                      <li>Функція 8.2 - ${getRandomPassword()}</li>
                      <li>Функція 9 - ${deleteLetters('a', "blablabla")}</li>
                      <li>Функція 10 - ${isPalyndrom("Я несу гусеня")}</li>
                      <li>Функція 11 - ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}</li>
                    </ul>`);

});