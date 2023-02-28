const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if(currentInput.value.length > 1) {
      currentInput.value = '';
      return;
    }

    if(currentInput.value != '') {
      if(nextInput) {
        nextInput.removeAttribute('disabled');
        nextInput.focus();
      }
    } 

    if(e.key === 'Backspace') {
      if(prevInput) {
        prevInput.focus();
      }

      inputs.forEach((input, index2) => {
        if(index1 < index2) {
          input.value = '';
          input.setAttribute('disabled', true);
        }
      });
    }

    if(inputs[inputs.length - 1].value != '') {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
});

