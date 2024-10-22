{ //Example for Condition Statement or If, Else if, else ladder
    console.log("Hello Boss")

    let age = 18;

    if (age > 18) {
        console.log("You can legally drive");
    }
    else if (age == 18) {
        console.log("You can drive too")
    }
    else {
        console.log("Sorry, you can't drive");
    }
}

{ // Example of Arthemetic operators
    let a = 15;
    let b = 2;

    console.log(a + b); // Addition
    console.log(a - b); //Subtraction
    console.log(a * b); // Multiplication
    console.log(a / b); // Division
    console.log(a ** b); //Exponentiation
    console.log(a % b); //Modulus used to know about remainder
}

{ //ternary operator example

    let a = 7;
    let b = 4;

    let c = a > b ? (a - b) : (b - a);
    /* the above statement means that 
    if(a>b){
        let c = a-b
    }
    else {
        let c = b-a
    }
    */
    console.log(c)
}