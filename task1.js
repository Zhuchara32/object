let auto = {
    manufacturer: 'Chevrolet',
    model: 'Nubira',
    'year of issue': 2005,
    'average speed': 100
}

for (let prop in auto) {
    alert(prop + ": " + auto[prop]);
}

let distance = prompt(`Укажите дистанцию, которую Вы хотите преодолеть`, '');
let time = distance / auto["average speed"];

function travelTimeF() {
    let travelTime;

    if (time <= 4) {
        travelTime = time;
    }
    else {
        let relaxation = time / 4 - 1;
        travelTime = relaxation + time;
    }
    alert(`Вы доедете за ${travelTime} часов`);
}
travelTimeF();