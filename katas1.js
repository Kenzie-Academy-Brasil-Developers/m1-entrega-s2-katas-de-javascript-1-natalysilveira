function oneThroughTwenty() {
  let array = [];
  
    for(let i = 1; i <= 20; i++) {
      array.push(i)
    }
    return array
  }

console.log(oneThroughTwenty());

//call function oneThroughTwenty

function evensToTwenty() {
    
  let array = [];

  for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
      array.push(i)
    }
  }
  return array
}

console.log(evensToTwenty())

//call function evensToTwenty

function oddsToTwenty() {
    
  let array = [];

  for(let i = 1; i <= 20; i++){
    if(i % 2 != 0){
      array.push(i)
    }
  }
  return array
   
}

console.log(oddsToTwenty())

//call function oddsToTwenty

function multiplesOfFive() {
    
  let array = [];

  for(let i = 5; i <= 100; i++){
    if(i % 5 == 0 && i * 5){
      array.push(i)
    }
  }
  return array

}

console.log(multiplesOfFive())

//call function multiplesOfFive

function squareNumbers() {

  let array = [];

  for(let i = 1; i <= 100; i++) {
    if((i ** (1/2)) % 1 == 0){
      array.push(i);
    }
  }
  return array
}

console.log(squareNumbers())

//call function squareNumbers

function countingBackwards() {
    
  let array = [];
  
    for(let i = 20 ; i >=1; i--) {
      array.push(i)
    }
    return array
}

console.log(countingBackwards())

//call function countingBackwards

function evenNumbersBackwards() {
    
  let array = [];
  
  for(let i = 20 ; i >=1; i--) {
    if(i % 2 == 0){
      array.push(i)
    }
  }
  return array
}

console.log(evenNumbersBackwards())

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
  let array = [];
  
  for(let i = 20 ; i >=1; i--) {
    if(i % 2 != 0){
      array.push(i)
    }
  }
  return array
}

console.log(oddNumbersBackwards())

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
  let array = [];

  for(let i = 100; i >= 5; i--){
    if(i % 5 == 0 && i * 5){
      array.push(i)
    }
  }
  return array
}

console.log(multiplesOfFiveBackwards())

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
  let array = [];

  for(let i = 100; i >= 1; i--) {
    if((i ** (1/2)) % 1 == 0){
      array.push(i);
    }
  }
  return array
}

console.log(squareNumbersBackwards())

//call function squareNumbersBackwards
