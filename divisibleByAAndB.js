// determine if a number is divisible by both a and b

function isDivideBy(number, a, b) {
    if ((number%a==0)&(number%b==0)) {
      return true;
    }
    else {
      return false;
    }
  }