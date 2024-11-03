{
    function nice(name) {
    console.log("Hey, "+ name + " you are best")
    console.log( name + " why don't you listen me")
    console.log( name + " you can do it")
    console.log("Bye "+ name)
}
 nice("Harry")

 console.log(6)

 nice("Shivam")
}

{
    function sum(a , b){
        console.log(a , b)
        return a + b
    }
    // sum(1 , 2)
    result = sum(1 , 2)
    console.log("Sum of the above number is :", result )
}

{
    const func1 = (x) => {
        console.log("I'm an arrow function", x)
    }

    func1(23)
    func1("a")
}