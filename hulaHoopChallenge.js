/* create a function that encourages the user to continue putting in effort
until they have achieved 10 hula hoops. After this, encourage them to pursue
more intense tricks. */

function hoopCount (n) {
    if (n<10) {
      return "Keep at it until you get it";
    }
    else {
      return "Great, now move on to tricks";
    }
  }