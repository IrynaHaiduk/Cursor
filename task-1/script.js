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
  const maxPrice = Math.max(applePrice, orangePrice, cherryPrice);
  const minPrice = Math.min(applePrice, orangePrice, cherryPrice);
  const sumPrices = applePrice + orangePrice + cherryPrice;
  const roundedSumPrices = Math.floor(applePrice) + Math.floor(orangePrice) + Math.floor(cherryPrice);
  const hundredsRoundedSum = Number((Math.round((sumPrices) * 100) / 100).toFixed());
  const isSumEven = Math.floor(sumPrices) % 2 === 0;
  const moneyAmout = 500;
  const restMoney = moneyAmout - sumPrices;
  const middlePrice = Number((sumPrices / 3).toFixed(2));
  const range1 = 7;
  const range2 = 10;
  const randomDiscount = Math.random() * (range2 - range1) + range1;
  const discountPrice = Number((sumPrices - randomDiscount).toFixed(2));
  const netCost = sumPrices / 2;
  const netProfit = netCost - randomDiscount;

  console.log(maxPrice);
  console.log(minPrice);
  console.log(sumPrices);
  console.log(roundedSumPrices);
  console.log(hundredsRoundedSum);
  console.log(isSumEven);
  console.log(restMoney);
  console.log(middlePrice);
  console.log(randomDiscount);
  console.log(discountPrice);
  console.log(netCost);
  console.log(netProfit);

  document.writeln(`
                  Max price: ${maxPrice}; <br>
                  Min price: ${minPrice};<br>
                  Sum of all prices: ${sumPrices};<br>
                  Integer sum of prices: ${roundedSumPrices};<br>
                  Price rounded to hundreds: ${hundredsRoundedSum};<br>
                  Is the sum of prices an even number?: ${isSumEven};<br>
                  Amount from the rest: ${restMoney};<br>
                  Average sum: ${middlePrice};<br>
                  Random discount: ${randomDiscount};<br>
                  Sum with discount: ${discountPrice};<br>
                  Net cost: ${netCost};<br>
                  Net profit: ${netProfit};
                  `
                  );

});