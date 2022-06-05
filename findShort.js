/* given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different
data types. */

function findShort(s){
    let findArray = s.split(" ");
    let shortest = Infinity;
    
    for (let i = 0; i < findArray.length; i++) {
      let wordLength = findArray[i].length;
      if (wordLength < shortest) {
        shortest = wordLength;
      }
    }
    return shortest;
  }