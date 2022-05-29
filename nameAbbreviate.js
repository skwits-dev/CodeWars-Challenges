// convert a two word name to capitalized initials

function abbrevName(name){
    var nameInitials = name.split(' ');
    return ((nameInitials[0][0]) + '.' + (nameInitials[1][0])).toUpperCase();
  }