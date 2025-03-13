function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "Invalid input. Please enter valid weight and height.";
        return;
    }

    var bmi = weight / (height * height);
    var interpretation = getInterpretation(bmi);

    document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2) + ", which is considered " + interpretation + ".";
displayImage(bmi);

}
function displayImage(number) {
    
    let imageElement = document.getElementById('resultImage');

    
    if (bmi < 18.5) {
        return "C:\Users\verma\Desktop\New folder\Underweight.jpg.jpeg";
    } else if (bmi < 24.9) {
        return "C:\Users\verma\Desktop\New folder\Normal.jpg.jpeg";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}


function getInterpretation(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 24.9) {
        return "Normal Weight";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
