function sumOfSquareDigits(number) {
    let sumDigits = 0;
    while (number > 0) {
        let temp = Math.floor(number / 10);
        let digit = number % 10;
        sumDigits += digit ** 2;
        number = temp;
    }
    return sumDigits;
}

function isHappy(n) {
    let slow = n;
    let fast = sumOfSquareDigits(n);

    while (fast != slow && fast != 1) {
        slow = sumOfSquareDigits(slow);
        fast = sumOfSquareDigits(sumOfSquareDigits(fast));
    }

    if (fast != 1)
        return true;

    return false;
}