const btnLogin = document.querySelector('#btn-login');

function checkLogin() {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function createRadioButtons(amount) {
  for (let index = 1; index <= amount; index += 1) {
    const inputField = document.querySelector('#input-field');
    const inputRadio = document.createElement('input');
    const labelRadio = document.createElement('label');

    inputRadio.name = 'rate';
    inputRadio.type = 'radio';
    inputRadio.value = index;
    labelRadio.innerHTML = index;

    inputField.appendChild(inputRadio);
    inputField.appendChild(labelRadio);
  }
}

createRadioButtons(10);
btnLogin.addEventListener('click', checkLogin);
