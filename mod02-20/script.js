var x = 1;
while(x <= 0){
	console.log(x);
	x++;
}

function evaluateInput() {
    var input = parseInt(document.getElementById("input").value);
    var output = document.getElementById("output");
    if ((input % 3 == 0) && (input % 5 == 0)) {
        output.value = input + " is a multiple of 3 and 5.";
    } else if (input % 3 == 0) {
        output.value = input + " is a multiple of 3.";
    } else if (input % 5 == 0) {
        output.value = input + " is a multiple of 5.";
    } else {
        output.value = input + " is neither a multiple of 3 or 5.";
    }
    if (input % 2 == 0) {
        output.value += "  " + input + " is an even number.";
    } else {
        output.value += "  " + input + " is an odd number.";
    }
}

function evaluateBMI() {
    var weight = parseFloat(document.getElementById("inputWeight").value);
    var height = parseFloat(document.getElementById("inputHeight").value);
    var weightOption = document.getElementById("optionWeight");
    var heightOption = document.getElementById("optionHeight");
    if (weightOption.selectedIndex == 1) {
        weight = convertPoundsToKilo(weight);
    }
    if (heightOption.selectedIndex == 1) {
        height = convertInchesToMeter(height);
    }
    var BMI = solveBMI(weight, height);
    if (BMI < 18.5) {
        document.getElementById("outputBMI").value = "Underweight";
    } else if ((BMI >= 18.5) && (BMI <= 24.9)) {
        document.getElementById("outputBMI").value = "Normal weight";
    } else if ((BMI >= 25.0) && (BMI <= 29.9)) {
        document.getElementById("outputBMI").value = "Overweight";
    } else {
        document.getElementById("outputBMI").value = "Obese";
    }
    console.log(BMI);
}

function solveBMI(weight, height) {
    var BMI = weight / Math.pow(height, 2);
    return BMI;
}

function convertPoundsToKilo(pounds) {
    var kilo = pounds / 2.2;
    return kilo;
}

function convertInchesToMeter(inches) {
    var meter = inches * 0.0254;
    return meter;
}