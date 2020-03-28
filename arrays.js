let arr = [1, 6,];
console.log(arr);
let sum;
for (let i = 0; i <  arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            if (sum === 7) {
                console.log('Элементы с индексами [' + i + ']=' + arr[i] + ' и [' + j + ']=' + arr[j]+ ' дают в сумме значение 7');
            }
        }
    }
