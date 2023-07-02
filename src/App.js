
const normalizeInput = (value, previousValue) => {
  if (!value) return '';

  const currentValue = value.replace(/[^\d]/g, '');
  const cvLength = currentValue.length;

  if (!previousValue || value.length > previousValue.length) {
    if (cvLength < 4) return currentValue;
    if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
    return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
  } else {
    return currentValue;
  }
};


const validateInput = (value) => {
  let error = '';

  if (!value) error = 'Phone number is required!';
  else if (value.length !== 14) error = 'Invalid phone number format. Example: (555) 555-5555';

  return error;
};
const phoneNumberForm = document.createElement('form');
phoneNumberForm.className = 'form';

const inputContainer = document.createElement('div');
inputContainer.className = 'input-container';

const label = document.createElement('p');
label.className = 'label';
label.textContent = 'Phone:';
inputContainer.appendChild(label);

const input = document.createElement('input');
input.className = 'input';
input.type = 'text';
input.name = 'phone';
input.placeholder = '(xxx) xxx-xxxx';

input.addEventListener('input', handleChange);

const errorParagraph = document.createElement('p');
errorParagraph.className = 'error';

inputContainer.appendChild(input);
inputContainer.appendChild(errorParagraph);

phoneNumberForm.appendChild(inputContainer);

const btnContainer = document.createElement('div');
btnContainer.className = 'btn-container';

const resetButton = document.createElement('button');
resetButton.className = 'btn danger';
resetButton.type = 'button';
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', handleReset);

btnContainer.appendChild(resetButton);
phoneNumberForm.appendChild(btnContainer);

document.getElementById('root').appendChild(phoneNumberForm);

let state = {
  phone: '',
  error: ''
};

function handleChange(event) {
  const { value } = event.target;
  state.phone = normalizeInput(value, state.phone);
  state.error = '';
  render();
}



function handleReset() {
  state.phone = '';
  state.error = '';
  render();
}

function render() {
  input.value = state.phone;
  errorParagraph.textContent = state.error;
}

