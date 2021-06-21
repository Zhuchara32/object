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


function changeSecondF() {

    if (sumSecond >= limSecond) {
        newTime.second = sumSecond % limSecond;
        newTime.minute = (sumSecond - newTime.second) / limSecond + time.minute;
        newTime.hour = time.hour;
        if (newTime.second < 10) {
            newTime.second = '0' + newTime.second;
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

let changeMinute = prompt(`Задайте колличество минут, которые следует прибавить`, '');
let sumMinute = +changeMinute + time.minute;
let limMinute = limSecond;

function changeMinuteF() {

    if (sumMinute >= limMinute) {
        newTime.minute = sumMinute % limMinute;
        newTime.hour = (sumMinute - newTime.minute) / limMinute + time.hour;
        newTime.second = time.second;
        if (newTime.minute < 10) {
            newTime.minute = '0' + newTime.minute;
        }
    }
    else {
        newTime.minute = time.minute + +changeMinute;
        newTime.second = time.second;
        newTime.hour = time.hour;
    }
    alert(`Новое время: ${newTime.hour}:${newTime.minute}:${newTime.second}`);
}
changeMinuteF();

let limHour = 24;
let changeHour = prompt(`Задайте колличество часов, которые следует прибавить`, '');
let sumHour = +changeHour + time.hour;

function changeHourF() {
    if (sumHour >= limHour) {
        newTime.hour = sumHour % limHour;
        newTime.second = time.second;
        newTime.minute = time.minute;
        if (newTime.hour < 10) {
            newTime.hour = '0' + newTime.hour;
        }
    }
    else {
        newTime.minute = time.minute + +changeMinute;
        newTime.second = time.second;
        newTime.hour = time.hour;
    }
    alert(`Новое время: ${newTime.hour}:${newTime.minute}:${newTime.second}`);
}
changeHourF();