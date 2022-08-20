/* Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345.
Ці змінні зберігають ціни на товари. Придумайте їм назви (товар можна придумати будь-який)

(!) При виводі можна використовувати функції console.log або document.writeln

Використовуючи вбудований об'єкт Math – виведіть максимальне число
Використовуючи вбудований об'єкт Math – виведіть мінімальне число
Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. 
Округлення використовувати в МЕНЬШУ сторону.
Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
Виведіть середнє значення цін, округлене до другого знаку після коми
(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
(Приклад: ціна була 260.66, знижка склала 10%, клієнт заплатив на 26 меньше, собівартість = 260 / 2 -> 130. 
Чистий прибуток = 130 - 26 -> 104) (Приклад 2: ціна була 100, знижка склала 90%, клієнт заплатив на 90 меньше, 
  собівартість = 100 / 2 -> 50. Чистий прибуток = 50 - 90 -> -40) 
  Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка наступного вигляду:

Максимальна ціна: 9999.99

Мінімальна ціна: 1111.11

Вартість всіх товарів: 1345.66*/

document.addEventListener('DOMContentLoaded', () => {
  const applePrice = 15.678;
  const orangePrice = 123.965;
  const cherryPrice = 90.2345;
  const sumPrices = applePrice + orangePrice + cherryPrice;
  const roundedSumPrices = Math.floor(applePrice) + Math.floor(orangePrice) + Math.floor(cherryPrice);
  const hundredsRoundedSum = Number((Math.ceil((sumPrices) * 100) / 100).toFixed());
  const moneyAmout = 500;
  const restMoney = moneyAmout - sumPrices;
  const middlePrice = Number((sumPrices / 3).toFixed(2));
  const randomDiscount = Math.random() * (10 - 7) + 7;
  const discountPrice = Number((sumPrices - randomDiscount).toFixed(2));
  const netCost = sumPrices / 2;
  const netProfit = netCost - randomDiscount;

  document.writeln(Math.max(applePrice, orangePrice, cherryPrice));
  document.writeln(Math.min(applePrice, orangePrice, cherryPrice));
  document.writeln(sumPrices);
  document.writeln(roundedSumPrices);
  document.writeln(hundredsRoundedSum);
  document.writeln(Math.floor(sumPrices) % 2 === 0);
  document.writeln(restMoney);
  document.writeln(middlePrice);
  document.writeln(randomDiscount);
  document.writeln(discountPrice);
  document.writeln(netCost);
  document.writeln(netProfit);

  document.writeln(`Max price: ${Math.max(applePrice, orangePrice, cherryPrice)}`);
  document.writeln(`Min price: ${Math.min(applePrice, orangePrice, cherryPrice)}`);
  document.writeln(`Sum of all prices: ${sumPrices}`);
  document.writeln(`Integer sum of prices: ${roundedSumPrices}`);
  document.writeln(`Price rounded to hundreds: ${hundredsRoundedSum}`);
  document.writeln(`Is the sum of prices an even number?: ${Math.floor(sumPrices) % 2 === 0}`);
  document.writeln(`Amount from the rest: ${restMoney}`);
  document.writeln(`Average sum: ${middlePrice}`);
  document.writeln(`Random discount: ${randomDiscount}`);
  document.writeln(`Sum with discount: ${discountPrice}`);
  document.writeln(`Net cost: ${netCost}`);
  document.writeln(`Net profit: ${netProfit}`);
});

