/* 
TODO
- Prevent display from showing more than a decimal point
- Prevent display from showing leading 0
*/

// cache elements
const display = document.getElementById('display')
const button0 = document.getElementById('button-0')
const button1 = document.getElementById('button-1')
const button2 = document.getElementById('button-2')
const button3 = document.getElementById('button-3')
const button4 = document.getElementById('button-4')
const button5 = document.getElementById('button-5')
const button6 = document.getElementById('button-6')
const button7 = document.getElementById('button-7')
const button8 = document.getElementById('button-8')
const button9 = document.getElementById('button-9')
const btnDecPoint = document.getElementById('button-mark')

// button event listeners
button0.addEventListener('click', event => {
  displayNumber("0", display)
})

button1.addEventListener('click', event => {
  displayNumber("1", display)
})

button2.addEventListener('click', event => {
  displayNumber("2", display)
})

button3.addEventListener('click', event => {
  displayNumber("3", display)
})

button4.addEventListener('click', event => {
  displayNumber("4", display)
})

button5.addEventListener('click', event => {
  displayNumber("5", display)
})

button6.addEventListener('click', event => {
  displayNumber("6", display)
})

button7.addEventListener('click', event => {
  displayNumber("7", display)
})

button8.addEventListener('click', event => {
  displayNumber("8", display)
})

button9.addEventListener('click', event => {
  displayNumber("9", display)
})

btnDecPoint.addEventListener('click', event => {
  displayNumber(".", display)
})

// functions
function displayNumber(number, display) {
  // if we've finished a calculation clear display for new number 
  // else add current number to existing ones
  let displayContents = display.innerHTML;

   if (endValue != true) {
    if (displayContents.length < 13) {
      display.innerHTML = displayContents + number;
    }
  } else {
    display.innerHTML = number;
    endValue = false;
  }
}





  /* number buttons */ /*
  
  $('#button-mark').click(function() {
    numberPressed(".", '#display');
  }); */
  
  /* operand buttons */ /*
  $('#button-add').click(function() {
    opPressed('+');
  });
  
  $('#button-sub').click(function() {
    opPressed('-');
  });
  
  $('#button-mul').click(function() {
    opPressed('*');
  });
  
  $('#button-div').click(function() {
    opPressed('/');
  });
  
  $('#button-perc').click(function() {
    opPressed('%');
  }) 
  
  // result button
  $('#button-equal').click(function() {
    var result = calculate(storage, operand,Number($('#display').html()));
    if (result.toString().length > 13) {
      result = result.toPrecision(5);
    }
    $('#display').html(result);
    endValue = true;
    storage = 0;
    operand = null;
  });
  
  $('#button-AC').click(function() {
    $('#display').html('');
    storage = 0;
    operand = null;
    endValue = false;
  });
  
  $('#button-CE').click(function() {
    $('#display').html('');
  }); */

/* global vars */
var storage = 0;
var endValue = false;
var operand = null;

/* aux functions */


function opPressed(op) {
  // if it's the first operation store value
  // else calculate and store
  if (operand === null) {
    storage = Number($('#display').html());
    $('#display').html('');
  } else {
    storage = calculate(storage, operand, Number($('#display').html()));
    $('#display').html(storage);
    endValue = true;
  }  
  operand = op;
}

function calculate(storage, operand, value) {
  if (operand === '+') {
    storage = storage + value;
  } else if (operand === '-') {
    storage = storage - value;
  } else if (operand === '*') {
    storage = storage * value;
  } else if (operand === '/') {
    storage = storage / value;
  } else if (operand === '%') { 
    storage = (value * storage) / 100;
  } else {
    storage = storage;
  }
  return storage;
}