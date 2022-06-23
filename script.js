var currentNumber = 0;

var currentNumberWrapper = document.getElementById('currentNumber');

var subtrair10Button = document.getElementsByName('subtrair')[0];
var subtrairButton = document.getElementsByName('subtrair')[1];

var adicionarButton = document.getElementsByName('adicionar')[0];
var adicionar10Button = document.getElementsByName('adicionar')[1];

adicionarButton.addEventListener('click', increment);
adicionar10Button.addEventListener('click', increment10);
subtrairButton.addEventListener('click', decrement);
subtrair10Button.addEventListener('click', decrement10);


function increment() {
  currentNumber++;
  currentNumberWrapper.innerHTML = currentNumber;

  changeColor();
  hideButtons();
}

function increment10() {
  currentNumber = currentNumber + 10;
  currentNumberWrapper.innerHTML = currentNumber;

  changeColor();
  hideButtons();
}

function decrement() {
  currentNumber--;
  currentNumberWrapper.innerHTML = currentNumber;

  changeColor();
  hideButtons();
}

function decrement10() {
  currentNumber = currentNumber - 10;
  currentNumberWrapper.innerHTML = currentNumber;

  changeColor();
  hideButtons();
}

function hideButtons() {
  if (currentNumber < -100) {
    for (i = 0; i < document.getElementsByName('subtrair').length; i++) {
      document.getElementsByName('subtrair')[i].classList.add('hidden');
    }
  } else if (currentNumber > 100) {
    for (i = 0; i < document.getElementsByName('adicionar').length; i++) {
      document.getElementsByName('adicionar')[i].classList.add('hidden');
    }
  } else {
    for (i = 0; i < document.getElementsByTagName('button').length; i++) {
      document.getElementsByTagName('button')[i].classList.remove('hidden');
    }
  }
}

function changeColor() {
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red';
  } else {
    currentNumberWrapper.style.color = 'black';
  }
}