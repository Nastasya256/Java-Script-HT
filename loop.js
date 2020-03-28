
 let min = 1;
 let max =7;
 let attemptCount = 100;
 let number;
 let random = parseInt(random (min, max));

while (number !== 0) {
  let user_answer = prompt("введите число");
  number === promt('Введите число от 1 до 7 или 0 для выхода.');
if (parseInt(user_answer)) == random) {
    alert("Вы угадали");
    break;
  }
  else if (number === 0) {
    if (parseInt(user_answer)) == 0)
    alert("Выход");
    break;
  }
}

if (parseInt(user_answer)) < random) {
  alert('Загаданное число меньше (<) загаданного. Попробуйте снова');
  break;
}
  else (parseInt(user_answer)) > random) {
      alert('Загаданное число больше загаданного. Попробуйте снова');
    break;
  }
