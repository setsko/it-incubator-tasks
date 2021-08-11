
let arr = [2,5,24,-2,0,-9];

function findMax(arr) {
    return Math.max.apply(null, arr);

}

console.log(findMax(arr));

