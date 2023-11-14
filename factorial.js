function factorial(n) {
    if (n < 0) {
        return "Number is positive. "
    }
    if (n == 0 || n == 1) {
        return 1;

    } else {
        return n * factorial(n - 1);
    }
}
let n = 3;
answer = factorial(n)
console.log("factorial of" + n + ":" + answer);