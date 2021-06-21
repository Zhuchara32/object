let time = {
    hour: 14,
    minute: 28,
    second: 37
}

function showTimeF() {
    let showTime = time.hour + ':' + time.minute + ':' + time.second;
    alert(showTime);
}
showTimeF();

let changeSecond = prompt(`Задайте колличество секунд, которые следует прибавить`, '');

let newTime = {};
let sumSecond = time.second + +changeSecond;
let limSecond = 60;
let limMinute = limSecond;
let limHour = 24;

function changeSecondF() {

    if (sumSecond >= limSecond) {
        newTime.second = sumSecond % limSecond;
        newTime.minute = (sumSecond - newTime.second) / limSecond + time.minute;
        newTime.hour = time.hour;
        if (newTime.second == 0) {
            newTime.second += '0';
        }
    }
    else {
        newTime.second = time.second + +changeSecond;
        newTime.minute = time.minute;
        newTime.hour = time.hour;
    }
    alert(`Новое время: ${newTime.hour}:${newTime.minute}:${newTime.second}`);
}
changeSecondF();

