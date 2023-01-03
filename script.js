const btnLogin = document.querySelector('#btn-login');
const checkBox = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const submitBtn = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');

let count = 500;

const checkLogin = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('E-Mail ou senha inválidos.');
  }
};

const createRadioButtons = (amount) => {
  for (let index = 1; index <= amount; index += 1) {
    const inputRadio = document.createElement('input');
    const labelRadio = document.createElement('label');
    const valuesEvaluation = document.querySelector('#values-evaluation');

    labelRadio.htmlFor = index;
    labelRadio.innerHTML = index;

    inputRadio.classList.add('radio-btn');
    inputRadio.id = index;
    inputRadio.name = 'rate';
    inputRadio.type = 'radio';
    inputRadio.value = index;

    valuesEvaluation.appendChild(inputRadio);
    valuesEvaluation.appendChild(labelRadio);
  }
};

const enableButtonSend = () => {
  // Lembrei do ".checked" graças a thread que a Ju (T16) abriu no slack.
  // Lembrei do ".disabled" graças a este link: https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202

  if (checkBox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

const countTextArea = (event) => {
  if (event.keyCode === 8 && textArea.value.length > 0) {
    count += 1;
  } else {
    count = 500 - textArea.value.length;
  }

  counter.innerHTML = `${count}/500`;
};

const checkChecked = (element) => {
  const arrayItems = [];

  element.forEach((items) => {
    if (items.checked) {
      arrayItems.push(` ${items.value}`);
    }
  });

  return arrayItems;
};

// Printar os valores de cada campo pedido: Nome (Junto com o sobrenome), email, casa, familia, matérias, avaliação e observações.
const printInformation = () => {
  const name = document.querySelector('#input-name');
  const lastName = document.querySelector('#input-lastname');
  const email = document.querySelector('#input-email');
  const house = document.querySelector('#house');
  const family = document.querySelectorAll('.family');
  const matter = document.querySelectorAll('.matter');
  const evaluation = document.querySelectorAll('.radio-btn');
  const comments = document.querySelector('#textarea');

  const informations = document.createElement('div');
  informations.id = 'result-div';
  const form = document.querySelector('#evaluation-form');
  const resultDiv = form.appendChild(informations);

  for (let i = 0; i < 7; i += 1) {
    const newElement = document.createElement('p');
    newElement.id = `p${i}`;
    resultDiv.appendChild(newElement);
  }

  const p0 = document.querySelector('#p0');
  const p1 = document.querySelector('#p1');
  const p2 = document.querySelector('#p2');
  const p3 = document.querySelector('#p3');
  const p4 = document.querySelector('#p4');
  const p5 = document.querySelector('#p5');
  const p6 = document.querySelector('#p6');

  p0.innerHTML = `Nome: ${name.value} ${lastName.value}`;
  p1.innerHTML = `Email: ${email.value}`;
  p2.innerHTML = `Casa: ${house.value}`;
  p3.innerHTML = `Família: ${checkChecked(family)}`;
  p4.innerHTML = `Matérias: ${checkChecked(matter)}`;
  p5.innerHTML = `Avaliação: ${checkChecked(evaluation)}`;
  p6.innerHTML = `Observações: ${comments.value}`;
};

const information = (event) => {
  event.preventDefault();
  const remove = document.querySelectorAll('.remove');

  printInformation();

  remove.forEach((items) => {
    items.remove();
  });
};

createRadioButtons(10);
btnLogin.addEventListener('click', checkLogin);
submitBtn.addEventListener('click', information);
textArea.addEventListener('keyup', countTextArea);
checkBox.addEventListener('click', enableButtonSend);
