function getMax() {

    let array = [];
    let max = 0;

    for(let i =0; i < 24; i++) {
        array.push(Math.random());
    }

    array.forEach((value) => {
        if(value > max) {
            max = value;
        }
    })

    console.log(array);
    console.log('Максимальный элемент', max);
}



function getMin() {

    let array = [];
    let min = 0;

    for(let i =0; i < 24; i++) {
        array.push(Math.random());
    }

    array.forEach((value) => {
        if(value < min) {
            min = value;
        }
    })

    console.log(array);
    console.log('Минимальный элемент', min);
}

getMax();
getMin();