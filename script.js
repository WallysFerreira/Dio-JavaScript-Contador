var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var subtrairButton = document.getElementsByName('subtrair')[0];
var adicionarButton = document.getElementsByName('adicionar')[0];

adicionarButton.addEventListener('click', increment);
subtrairButton.addEventListener('click', decrement);

function increment() {
  currentNumber++;
  currentNumberWrapper.innerHTML = currentNumber;if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red';
  } else {
    currentNumberWrapper.style.color = 'black';
  }
}

function decrement() {
  currentNumber--;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red';
  } else {
    currentNumberWrapper.style.color = 'black';
  }
}