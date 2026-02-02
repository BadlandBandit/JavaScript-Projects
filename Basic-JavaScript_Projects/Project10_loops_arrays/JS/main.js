// While loop example
function startCounting() {

    let output = "";
    let number = 1;

    while (number <= 10) {
        output += number + "<br>";
        number++;
    }

    document.getElementById("countDisplay").innerHTML = output;
}


// For loop example with array
let bandMembers = [
    "Alex",
    "Jordan",
    "Taylor",
    "Chris",
    "Morgan",
    "Jamie"
];

function showBand() {

    let list = "";

    for (let i = 0; i < bandMembers.length; i++) {
        list += bandMembers[i] + "<br>";
    }

    document.getElementById("bandList").innerHTML = list;
}


// Array example
function favoriteColor() {

    let colors = [];

    colors.push("Red");
    colors.push("Blue");
    colors.push("Green");
    colors.push("Purple");
    colors.push("Orange");

    document.getElementById("colorResult").innerHTML =
        "My favorite color is " + colors[2] + "!";
}


// Object example
function showCar() {

    let myCar = {
        brand: "Toyota",
        year: 2022,
        paint: "Silver"
    };

    document.getElementById("carInfo").innerHTML =
        "I drive a " + myCar.year + " " + myCar.paint + " " + myCar.brand + ".";
}
