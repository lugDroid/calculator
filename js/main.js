// cache buttons
const button0 = document.getElementById('button-0')
const btn1 = document.getElementById('button-1')
const btn2 = document.getElementById('button-2')
const btn3 = document.getElementById('button-3')
const btn4 = document.getElementById('button-4')
const btn5 = document.getElementById('button-5')
const btn6 = document.getElementById('button-6')
const btn7 = document.getElementById('button-7')
const btn8 = document.getElementById('button-8')
const btn9 = document.getElementById('button-9')

// process button clicks
button0.addEventListener('click', event => {
  numberPressed("0", "#display")
})
  /* number buttons */ /*
  $('#button-0').click(function() {
    numberPressed("0", "#display");
  });
  
  $('#button-1').click(function() {
    numberPressed("1", "#display");
  });
  
  $('#button-2').click(function() {
    numberPressed("2", "#display");
  });
  
  $('#button-3').click(function() {
    numberPressed("3", "#display");
  });
  
  $('#button-4').click(function() {
    numberPressed("4", "#display");
  });
  
  $('#button-5').click(function() {
    numberPressed("5", "#display");
  });
  
  $('#button-6').click(function() {
    numberPressed("6", "#display");
  });
  
  $('#button-7').click(function() {
    numberPressed("7", "#display");
  });
  
  $('#button-8').click(function() {
    numberPressed("8", "#display");
  });
  
  $('#button-9').click(function() {
    numberPressed("9", "#display");
  });
  
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
function numberPressed(number, element) {
  // if we've finished a calculation clear display for new number 
  // else add current number to existing ones
  console.log(number)
  console.log(element)
  element.innerHTML = number

  /*var displayContents = element.innerHTML;

   if (endValue != true || displayContents != undefined) {
    //if (displayContents.length < 13) {
      element.innerHTML = displayContents + number;
    //}
  } else {
    element.innerHTML = number;
    endValue = false;
  } */
}

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