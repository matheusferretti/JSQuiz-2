//our conditional operators
//>,<, <=, >=, ==, !=

//We are only going to focus on our parameters for our For loops

//ex)  for(let i = 0; i < 10; i++)

//            what we know
//     -going to iterate 10 times, starting at i = 0,                 ending when i = 9
//     -increment by 1 each iteration


//1) create for loop parameters to satify these conditions. 
//start at index 10, until 1000 is reached, increment by 12

for(let i = 10; i < 1001; i+=12) {
  console.log(i);
}

//2) create for loop parameters to satify these conditions. 
//start at index 100, until 1 is reached, decrement by 10

for(let i = 100; i >= 0; i-=10){
  console.log(i);
}

//3) create for loop parameters to satify these conditions. 
//start at index 5, until -10 is reached, decrement by 1

for(let i = 5; i >= -10; i--){
    console.log(i);
}

////////////////////////////////////////////////////////
//Now we will create 2 functions

//1) create a function that accepts one parameter
//   and returns that parameter multiplied by 3

multipliedValue = (value) => {
  value = value * 3;
  return value;
};

multipliedValue(3);


//2) create a function that accepts 3 parameters and returns the sum those parameters

function sumingNumbers(a, b, c){
  d=a+b+c;
  return d;
}

sumingNumbers(46, 4578, 20);