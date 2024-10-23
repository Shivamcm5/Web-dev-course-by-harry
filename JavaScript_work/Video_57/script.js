console.log("Hello, Welcome for loop")
console.log(1)

{ // Example for "For" loop
    let a = 1;

    for (let i = 0; i < 10; i++) {
        console.log(a + i);
    }
}

{ // Example for "Forin" loop  
    let a = {
        Name: "Shivam",
        Age: 14,
        Role: "Nothing 2nd option"
    }

    for (const key in a) {
        const element = a[key]
        console.log(key, element)
    }
}
{ // Example for "for-of" loop
    for (const c of "Shivam") {
        console.log(c)
    }
}
{ // Example of "While" loop
    let a = 2;

    while (a < 5) {
        console.log(a)
        a++
    }
}

{ // Example of "Do while" loop
    let a = 3
    do {
        console.log(a)
        a++
    } while (a < 2);
}