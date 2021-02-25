teens = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

adults = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable(number) {
    hundreds = Math.floor(number / 100);
    tens = number % 100;
    digits = tens % 10;

    console.log(tens);

    forHuman = `${teens[hundreds] ? teens[hundreds] + " " + "hundred " : ""}${
        tens < 20
            ? teens[tens]
            : adults[Math.floor(tens / 10)] + " " + teens[tens % 10]
    }`;
    return forHuman ? forHuman.trim() : "zero";
};
