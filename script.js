let count = 500;
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const checkBox = document.querySelector('#agreement');
const btnLogin = document.querySelector('#btn-login');
const submitBtn = document.querySelector('#submit-btn');

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
    inputRadio.classList.add('radio-btn');
    inputRadio.value = index;
    labelRadio.innerHTML = index;

    inputField.appendChild(inputRadio);
    inputField.appendChild(labelRadio);
  }
}

function enableButtonSend() {
  // Lembrei do ".checked" graças a thread que a Ju (T16) abriu no slack.
  // Lembrei do ".disabled" graças a este link: https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202

  if (checkBox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function countTextArea(event) {
  if (event.keyCode === 8 && textArea.value.length > 0) {
    count += 1;
  } else if (event.keyCode !== 8 && textArea.value.length < 500) {
    count -= 1;
  }

  counter.innerHTML = `${count}/500`;
}

// Printar os valores de cada campo pedido: Nome (Junto com o sobrenome), email, casa, familia, matérias, avaliação e observações.
function printInformation() {
  const house = document.querySelector('#house');
  const name = document.querySelector('#input-name');
  // const family = document.querySelectorAll('family');
  // const matter = document.querySelectorAll('.matter');
  const email = document.querySelector('#input-email');
  const comments = document.querySelector('#textarea');
  // const evaluation = document.querySelectorAll('.radio-btn');
  const lastName = document.querySelector('#input-lastname');

  const informations = document.createElement('p');
  const papiroTexture = document.querySelector('#papiro-texture');
  papiroTexture.appendChild(informations).innerHTML = `Nome: ${name.value} ${lastName.value}
  Email: ${email.value}
  Casa: ${house.value}
  Família: 
  Matéria: 
  Avaliação: 
  Observações: ${comments.value}`;
}

function information(event) {
  event.preventDefault();
  const remove = document.querySelectorAll('.remove');

  printInformation();

  remove.forEach((items) => {
    items.remove();
  });
}

createRadioButtons(10);
btnLogin.addEventListener('click', checkLogin);
submitBtn.addEventListener('click', information);
textArea.addEventListener('keydown', countTextArea);
checkBox.addEventListener('click', enableButtonSend);
