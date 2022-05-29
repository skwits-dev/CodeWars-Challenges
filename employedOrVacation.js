/* create a function, which determines if an alarm should be set depending
on whether or not someone is on vacation or employed. If employed and not
on vacation, the function should return true. Otherwise, it should return
false. */

function setAlarm(employed, vacation){
    if ((employed == true) & (vacation == false)) {
        return true;
        }
    else {
      return false;
    }
    }
