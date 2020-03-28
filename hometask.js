

let sum = prompt("сумма покупки");
let discount;
let final_price;


if  (sum <= 1000) {
  console.log("Сумма покупки: " + sum + " - Скидка не предусмотрена");
}
  else if (sum > '1000' ||
            sum <= '2000') {
              your_discount(sum, 0.05);
    ////console.log("Сумма покупки: " + sum +" - Скидка 5%");

  }
else (sum > '2000' ||
      sum <= '3000')
 {
  your_discount(sum, 0.01);
}

if (sum >= '3000') {
your_discount(sum, 0.1);
    console.log("Получите дополнительный подарок");
  //console.log("Сумма покупки: " + sum + " - скидка 10% + подарок");

}

function your_discount(sum, percent){
discount =  sum * percent;
final_price = sum - discount;


  console.log("Сумма покупки " + sum + " - Скидка 5%");
  console.log("Ваша сумма с учетом скидки - " + final_price);

}
