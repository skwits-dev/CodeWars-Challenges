/* calculate BMI based on these restrictions:
- bmi <= 18.5 is "Underweight"
- bmi <= 25.0 is "Normal"
- bmi <= 30.0 is "Overweight"
- bmi > 30 is "Obese" */

function bmi(weight, height) {
    if ((weight/(height*height))<= 18.5) {
        return "Underweight";
        }
    else if ((weight/(height*height))<= 25.0) {
        return "Normal";
             }
    else if ((weight/(height*height))<= 30.0) {
        return "Overweight";
             }
    else {
      return "Obese";
    }
  }
