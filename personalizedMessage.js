// return personalized message -- "Hello boss" if guest is owner; "Hello guest" if otherwise

function greet (name, owner) {
    if (name == owner) {
      return("Hello boss");
    }
    else {
      return("Hello guest");
    }
  }