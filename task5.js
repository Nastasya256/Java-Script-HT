let array = [];
let max = 0;
let arr_1;
let arr_2;
for (let i = 0; i < 9; i++) {
    array[i] = [];
    for (let j = 0; j < 18; j++) {
        array[i][j] = parseInt(Random(-99, 99));
        if (array[i][j] > max) {
            max = array[i][j];
            arr_1 = i;
            arr_2 = j;
        }
    }
}
console.log(array);
console.log('max elem ['+arr_1+']'+'['+arr_2+']'+ ' = ' + max)
function Random(min, max) {
    return Math.random() * (max - min) + min;
}
