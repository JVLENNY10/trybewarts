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

btnLogin.addEventListener('click', checkLogin);
