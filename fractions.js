let fractions = {
    numerator: 3,
    denominator: 4
}

let test = {
    numerator: prompt(`Укажите числитель`, ''),
    denominator: prompt(`Укажите знаменатель`, '')
}

let sum = {};

function denominatorF() {
    if (test.denominator >= fractions.denominator) {
        if (test.denominator % fractions.denominator == 0 || test.denominator == fractions.denominator) {
            sum.denominator = test.denominator;
        }
        else {
            i = 1;
            do {
                ++i;
                sum.denominator = test.denominator * i;
            }
            while (sum.denominator % fractions.denominator != 0);
        }
    }
    else {
        if (fractions.denominator % test.denominator == 0) {
            sum.denominator = fractions.denominator;
        }
        else {
            i = 1;
            do {
                ++i;
                sum.denominator = fractions.denominator * i;
            }
            while (sum.denominator % test.denominator != 0);
        }
    }
}
denominatorF();

function summation() {
    sum.numerator = sum.denominator / fractions.denominator * fractions.numerator + sum.denominator / test.denominator * test.numerator;
}
summation();

alert(`Результат суммирования дробей: ${sum.numerator}/${sum.denominator}`);

//////////////////

let subtraction = {};

subtraction.denominator = sum.denominator;

function subtractionF() {
    subtraction.numerator = subtraction.denominator / test.denominator * test.numerator - subtraction.denominator / fractions.denominator * fractions.numerator;
}
subtractionF();

alert(`Результат вычитания дробей: ${subtraction.numerator}/${subtraction.denominator}`);

////////////////

let multiplication = {};

function multiplicationF() {
    multiplication.denominator = fractions.denominator * test.denominator;
    multiplication.numerator = fractions.numerator * test.numerator;
}
multiplicationF();

alert(`Результат умножения дробей: ${multiplication.numerator}/${multiplication.denominator}`);

////////////////

let divide = {};

function divideF() {
    divide.denominator = fractions.denominator * test.numerator;
    divide.numerator = fractions.numerator * test.denominator;
}
divideF();

alert(`Результат деления дробей: ${divide.numerator}/${divide.denominator}`);

///////////////

let reduction = {};

function reductionF() {
    if (sum.denominator >= sum.numerator) {
        if (sum.denominator % sum.numerator == 0 || sum.denominator == sum.numerator) {
            reduction.denominator = sum.denominator / sum.numerator;
            reduction.numerator = 1;
        }

        else {
            i = 1;
            do {
                ++i;
                reduction.denominator = sum.denominator / i;
                reduction.numerator = sum.numerator / i;
            }
            while (reduction.denominator % i == 0 && reduction.numerator % i == 0);

            if (reduction.denominator % i != 0 || reduction.numerator % i != 0) {
                reduction.numerator = sum.numerator;
                reduction.denominator = sum.denominator;
            }
        }

    }
    else {
        if (sum.numerator % sum.denominator == 0) {
            reduction.numerator = sum.numerator / sum.denominator;
            reduction.denominator = 1;
        }
        else {
            i = 1;
            do {
                ++i;
                reduction.numerator = sum.numerator / i;
                reduction.denominator = sum.denominator / i;
            }
            while (reduction.denominator % i == 0 && reduction.numerator % i == 0 && i < reduction.numerator);

            if (reduction.denominator % i != 0 || reduction.numerator % i != 0) {
                reduction.numerator = sum.numerator;
                reduction.denominator = sum.denominator;
            }
        }
    }

}

reductionF();

alert(`Сокращенная дробь суммы: ${reduction.numerator}/${reduction.denominator}`);