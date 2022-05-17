//palindromo
const palindromo = str => str.split('').reverse().join('');
console.log(palindromo('ana'));

//fibonacci
const fibonacci = n => {
    let a = 1,
        b = 0,
        x;
    for (let i = 0; i < n; i++) {
        x = a + b;
        a = b;
        b = x;
    }
    return b;
}
console.log(fibonacci(3));