// reverse Array

function solution(str){
    const toArray = str.split("");
    const revArray = toArray.reverse();
    const revString = revArray.join("");
    return revString;
  }
  solution("world");