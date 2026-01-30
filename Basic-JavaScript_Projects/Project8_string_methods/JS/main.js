// Function for concat()
function useConcat() {

    // Declare variables using var
    var firstName = "John";
    var lastName = "Doe";

    // Join strings
    var fullName = firstName.concat(" ", lastName);

    // Show result
    document.getElementById("outputText").innerHTML =
        "concat() result: " + fullName;
}


// Function for slice()
function useSlice() {

    // Declare a string
    var message = "JavaScript is fun!";

    // Cut part of the string
    var result = message.slice(0, 10);

    // Show result
    document.getElementById("outputText").innerHTML =
        "slice() result: " + result;
}


// Function for toString()
function useToString() {

    // Declare a number
    var number = 123;

    // Convert to string
    var result = number.toString();

    // Show result
    document.getElementById("outputText").innerHTML =
        "toString() result: " + result;
}


// Function for toPrecision()
function useToPrecision() {

    // Declare a number
    var num = 3.1415926535;

    // Format number
    var result = num.toPrecision(4);

    // Show result
    document.getElementById("outputText").innerHTML =
        "toPrecision() result: " + result;
}
