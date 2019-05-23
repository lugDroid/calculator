/* 
TODO
- Check double leading 0 issue
*/

// cache buttons and display
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
const btnAdd = document.getElementById('button-add')
const btnSub = document.getElementById('button-sub')
const btnMul = document.getElementById('button-mul')
const btnDiv = document.getElementById('button-div')
const btnPerc = document.getElementById('button-perc')
const btnEqual = document.getElementById('button-equal')
const btnAC = document.getElementById('button-AC')
const btnCE = document.getElementById('button-CE')

/* digit button event listeners */
button0.addEventListener('click', event => {
  displayDigits("0", display)
})

button1.addEventListener('click', event => {
  displayDigits("1", display)
})

button2.addEventListener('click', event => {
  displayDigits("2", display)
})

button3.addEventListener('click', event => {
  displayDigits("3", display)
})

button4.addEventListener('click', event => {
  displayDigits("4", display)
})

button5.addEventListener('click', event => {
  displayDigits("5", display)
})

button6.addEventListener('click', event => {
  displayDigits("6", display)
})

button7.addEventListener('click', event => {
  displayDigits("7", display)
})

button8.addEventListener('click', event => {
  displayDigits("8", display)
})

button9.addEventListener('click', event => {
  displayDigits("9", display)
})

btnDecPoint.addEventListener('click', event => {
  displayDigits(".", display)
})

/* Operand buttons listeners */ 
btnAdd.addEventListener('click', event => {
  opPressed('+')
})

btnSub.addEventListener('click', event => {
  opPressed('-')
})

btnMul.addEventListener('click', event => {
  opPressed('*')
})

btnDiv.addEventListener('click', event => {
  opPressed('/')
})

btnPerc.addEventListener('click', event => {
  opPressed('%')
})

/* Result buttons listeners */
btnEqual.addEventListener('click', event => {
  var result = calculate(storage, operand, display.innerHTML)
    if (result.toString().length > 13) {
      result = result.toPrecision(5)
    }
    display.innerHTML = result
    endValue = true
    storage = 0
    operand = null
})

btnAC.addEventListener('click', event => {
  display.innerHTML = ''
  storage = 0
  operand = null
  endValue = false
})

btnCE.addEventListener('click', event => {
  display.innerHTML = ''
})

/* Global Vars */
var storage = 0
var endValue = false
var operand = null

/* Main Functions */
function displayDigits(digit, display) {
  // if we've finished a calculation clear display for new number 
  // else add current number to existing ones
  let dispContents = display.innerHTML

  if (endValue != true) {
    if (dispContents.length < 13) {
      // only one . digit is accepted
      if (!(digit == '.' && dispContents.indexOf('.') != -1)) {
        dispContents += digit
      }
    }
  } else {
    dispContents = digit
    endValue = false
  }

  // remove leading zeroes
  dispContents = removeLeadingZeroes(dispContents)

  // if first digit is . add leading zero
  if (dispContents.indexOf('.') == 0) {
    dispContents = '0' + dispContents
  }
  display.innerHTML = dispContents
}

function opPressed(op) {
  // if it's the first operation store value
  // else calculate and store
  if (operand === null) {
    storage = Number(display.innerHTML)
    display.innerHTML = ''
  } else {
    storage = calculate(storage, operand, Number(display.innerHTML))
    display.innerHTML = storage
    endValue = true
  }  
  operand = op
}

function calculate(storage, operand, value) {
  // prevent value to be added as string
  value = Number(value)

  if (operand === '+') {
    storage = storage + value
  } else if (operand === '-') {
    storage = storage - value
  } else if (operand === '*') {
    storage = storage * value
  } else if (operand === '/') {
    storage = storage / value
  } else if (operand === '%') { 
    storage = (value * storage) / 100
  } else {
    storage = storage
  }
  return storage
}

/* Aux Functions */
function removeLeadingZeroes(str) {
  if (str.length > 1) {
    while (str.indexOf('0') == 0) {
      str = str.slice(1)
    }
  }
  return str
}



 






