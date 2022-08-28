/* Кожне завдання виконується у вигляді чистої функції. Функція повертає масив або інше значення, але не змінює його!

У консоль/html виводите результат виклику функції:

const pairs = getPairs(students);

console.log(pairs);



Перед виконанням цього домашнього завдання необхідно створити 3 масиви:

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];



1.Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 
У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
2.Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду:
[["Олександр і Олена", "Теорія автоматів"], [...], [...]]
3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
4.Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): 
[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]] */

document.addEventListener('DOMContentLoaded', () => {
  const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
  const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
  const marks = [4, 5, 5, 3, 4, 5];
  const pairsArray = [];
  const pairsAndThemes = [];
  const studentsAndMarks = [];

  function devideToPairs() {
    const girls = students.filter((item, index, array) => (item.slice(-1) === 'а'));
    const boys = students.filter((item, index, array) => (item.slice(-1) !== 'а'));

    for (let i = 0; i < boys.length; i++) {
      console.log(i);
      let pair = [boys[i], girls[i]];
      console.log(pair);
      pairsArray.push(pair);
    }

    return pairsArray;
  }

  function devideToPairsAndThemes() {
    for (let i = 0; i < pairsArray.length; i++) {
      const pairAndTheme = [`${pairsArray[i][0]} i ${pairsArray[i][1]}`, themes[i]];
      pairsAndThemes.push(pairAndTheme);
    }

    return pairsAndThemes;
  }

  function devideToStudentsAndMarks() {
    for (let i = 0; i < students.length; i++) {
      let studentAndMark = [students[i], marks[i]];
      studentsAndMarks.push(studentAndMark);
    }

    return studentsAndMarks;
  }

  function getRandomMark() {
    for (let i = 0; i < pairsAndThemes.length; i++) {
      let range1 = 1;
      let range2 = 5;
      let randomMark = +((Math.random() * (range2 - range1) + range1)).toFixed();
      pairsAndThemes[i].push(randomMark);
    }

    return pairsAndThemes;
  }

  document.writeln(`
          Pairs: ${devideToPairs()} <br>
          Pairs and Themes: ${devideToPairsAndThemes()} <br>
          Students and marks: ${devideToStudentsAndMarks()} <br>
          Random mark for pairs: ${getRandomMark()} <br>
`);
});