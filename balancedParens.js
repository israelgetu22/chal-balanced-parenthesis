// Sample Strings
let sample1 = "This ( is unbalanced.";
let sample2 = "(This (is (a) balanced) string.)";
let sample3 = "This is () also ) unbalanced.";
let sample4 = "Balanced.";

// Write your solution below:

function balancedParens(str) {
  let openPar = 0;
  let closedPar = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      openPar += 1;
    } else if (str[i] === ")") {
      closedPar += 1;
    }
  }
  return openPar === closedPar;
}

function balancedParenthesis(word) {
  let good = true;
  let leftparenth = [];
  let rightparenth = [];
  for (i = 0; i < word.length; i++) {
    if (word[i] === "(") {
      leftparenth.push(word[i]);
    } else if (word[i] === ")") {
      rightparenth.push(word[i]);
    }
  }
  if (leftparenth.length === rightparenth.length) {
    return good;
  } else {
    return (good = false);
  }
}
console.log(balancedParenthesis(sample4));

let parathasis1 = 0;
let parathasis2 = 0;

let equals = function (string) {
  for (i = 0; i < string.length; i++) {
    if (string[i] === ")") {
      parathasis1++;
    } else if (string[i] === "(") {
      parathasis2++;
    }
  }
  if (parathasis1 === parathasis2) {
    return "There are an equal number of parenthesis";
  } else {
    return "There are not an equal number of parenthesis";
  }
};

console.log(equals("This ( is u))nbala(nced."));


let arr = str.split('')
    let arrOpen = []
    let arrClosed = []
    for(i=0; i<arr.length; i++){
        if(arr[i]==='('){
            arrOpen.push(arr[i])
        }else if(arr[i]===')'){
            arrClosed.push(arr[i])
        }
    }if(arrOpen.length === arrClosed.length){
        return true
    }else {
        return false
    }
}
console.log(balancedPar(sample4))



const has_balanced_parens = (string) => (string.split('(').length === string.split(')').length) ? true : false;

console.log(has_balanced_parens("(This has (too many closes.) ) )"))


