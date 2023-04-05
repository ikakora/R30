// 1. ყველა კენტი რიცხვი 2000-მდე

for (let i = 1; i <= 2000; i +=2) {
    console.log(i);
}

// 2. ყველა ლუწი რიცხვი -2000 მდე

for (let i = -2; i >= -2000; i -= 2) {
    console.log(i);
}

// 3. ჩექფოინთი

for (let i = 0; i <= 100; i += 5) {
    if(i == 10 || i == 25 || i == 75 || i == 90) {
        console.log(`გილოცავთ, თქვენ გაიარეთ ${i} კილომეტრიანი ჩექფოინთი`);
    }
}

// 4. კენტი რიცხვების ჯამი

let x = 0;
for (let i = 1; i <= 25000; i += 2) {
    x += i
}
console.log(x);

// 5. ჯამი და ჯამი

let y = 0;
for (let i = 501; i <= 800; i += 2) {
    y += i
}
for (let i = 1000; i <= 2000; i += 2) {
    y += i
}
console.log(y);

// 6. მათემატიკური ფაქტორიალი

let z = 5;      //enter number

let n = 1;
for (let i = 1; i <= z; i++) {
    n *= i
}

console.log(n);

// 7. 300-is გამყოფები

for(let i = 1; i <= 300; i++) {
    if(300 % i == 0) {
        console.log(i);
    }
}

// 8. რიცხვის გამყოფები


let a = 8;      //enter number


let sum = 0;
for(let i = 1; i <= a; i++) {
    if(a % i == 0) {
        sum += i;
    }
}

console.log(sum);

// 9. მარტივი რიცხვი

let c = 7;

let test = true;
for (let i = 2; i < c; i++) {
    if (c % i == 0) {
        test = false
    }
}
if(test) {
    console.log(`${c} არის მარტივი რიცხვი`);
} else {
    console.log(`${c} არ არის მარტივი რიცხვი`);
}