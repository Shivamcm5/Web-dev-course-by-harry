//Buisnes name generator 
/* Things required 
first name:
1. Crazy
2. Amazing
3. Fire

Second name:
1. Engine
2. Foods
3. Garments

Last name:
1. Bros
2. Limeted 
3. Hub
*/
/* 
I will create 3 obj and put the word inside it after
I will generate a random number and add a if... else if... else ladder and use a function that will pick a word from every obejct 
I will console log the name
*/

{ // My logic using arrays

    let firstname = {
        "1.": "Crazy",
        "2.": "Amazing",
        "3.": "Fire"
    }
    let secondname = {
        "1.": "engine",
        "2.": "food",
        "3.": "garment"
    }
    let lastname = {
        "1.": "bros",
        "2.": "limited",
        "3.": "hub"
    }

    let values = Object.values(firstname);

    let randomValue1 = values[Math.floor(Math.random() * values.length)];

    // console.log(randomValue);

    values = Object.values(secondname);
    let randomValue2 = values[Math.floor(Math.random() * values.length)];
    
    // console.log(randomValue);

    values = Object.values(lastname);
    let randomValue3 = values[Math.floor(Math.random() * values.length)];
    
    console.log(`${randomValue1} ${randomValue2} ${randomValue3}`);
}

{ // harry's logic without using arrays 

    let random = Math.random();
    let first, second, third

    if (random < 0.33) {
        first = "Crazy"
    }
    else if (random < 0.66 && random >= 0.33) {
        first = "Amazing"
    }
    else {
        first = "Fire"
    }

    random = Math.random();

    if (random < 0.33) {
        second = "Engine"
    }
    else if (random < 0.66 && random >= 0.33) {
        second = "Foods"
    }
    else {
        second = "Garments"
    }

    random = Math.random();

    if (random < 0.33) {
        third = "Bros"
    }
    else if (random < 0.66 && random >= 0.33) {
        third = "Limeted"
    }
    else {
        third = "Hub"
    }

    console.log(`${first} ${second} ${third}`)
}