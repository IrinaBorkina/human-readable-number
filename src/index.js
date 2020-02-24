module.exports = function toReadable(number) {
    const single_digits = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    };

    const two_digits = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    };

    const tens_multiple = {
        0: " ",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    };

    let digits = number.toString().split('');


    let value = '';

    if (number.toString().length == 1) {
        number === 0 ? value = 'zero' : value = single_digits[number];
    }

    if (number.toString().length == 2) {
        (digits[0] == 1) ? value = two_digits[number] : value = `${tens_multiple[digits[0]]} ${single_digits[digits[1]]}`;
    }

    if (number.toString().length == 3) {
        if (number % 10 === 0) {
            value = `${single_digits[digits[0]]} hundred ${two_digits[number % 100]}`;
        }

        if (number % 100 === 00) {
            value = `${single_digits[digits[0]]} hundred`;
        }

        if (number % 10 > 0 && number % 10 < 20) {
            value = `${single_digits[digits[0]]} hundred ${two_digits[number % 100]}`;
        }

        if (number % 100 > 0 && number % 100 < 10) {
            value = `${single_digits[digits[0]]} hundred ${single_digits[digits[2]]}`;
        }  

        if (number % 100 > 19 && number < 1000) {
            value = `${single_digits[digits[0]]} hundred ${tens_multiple[digits[1]]} ${single_digits[digits[2]]}`;
        }
    }

    return value.trim();
};
