/*
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number. 
*/

function repeatStringNumTimes(str, num) {
  if (num > 0) {
    let finalStr = "";
    for (let i = 0; i < num; i++) {
      finalStr += str;
    }
    return finalStr;
  } 
  return "";
}

repeatStringNumTimes("*", 3);