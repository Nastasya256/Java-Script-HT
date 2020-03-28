let month =  'декабрь';
switch (month) {
  case'декабрь':
  case 'январь':
  case 'февраль':
    break;
  console.log("Зима");
break;
  case 'март':
  case 'апрель':
  case 'май':
console.log("Весна");
    break;
case 'июнь':
case 'июль':
case 'август':
console.log("Лето");
  break;
  case 'сентябрь':
  case 'октябрь':
  case 'ноябрь':
  console.log("Осент");
  break;
  default:
      console.log("Попробуйте еще раз");
}
