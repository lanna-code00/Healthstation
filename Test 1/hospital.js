const warnTheDeveoper = (n, m, s) => {
    let mymodulo = ((m-1 + s) % n);
    warntheDeveloper.innerHTML = `The answer is ${mymodulo}`;
    return (m-1 + s)%n || n;
}
 
warnTheDeveoper(3, 1, 2);