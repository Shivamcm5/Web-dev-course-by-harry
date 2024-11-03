console.log("Faulty Calculator")
{ //faulty Calculator
    
    let random = Math.random()
    var a = prompt("Enter First Number");
    let c = prompt("Enter Operation");
    let b = prompt("Enter Second Number");

    let obj = {
        "+": "-",
        "*": "+",
        "-": "/",
        "/":"**",
    }

    if(random<0.1){
        alert(`the result is : ${eval(`${a} ${c} ${b}`)}`)
    }
    else{
        c = obj[c]
        alert(`the result is : ${eval(`${a} ${c} ${b}`)}`)
    }

}

{ // Real Calculator

    let a = prompt("Enter First Number(Real calculator)")
    let b = prompt("Enter Operation")
    let c = prompt("Enter Second Number")

    let obj = {
        "+": "+",
        "*": "*",
        "-": "-",
        "/":"/",
    }
    b = obj[b]
    alert(`The result is :${eval(`${a} ${b} ${c}`)}`)

}