const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN = 'hidden';
const LOCAL_NAME = 'username';

function handleSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN);
  const username = loginInput.value;
  localStorage.setItem(LOCAL_NAME, username);
  paintGreeting(username);
}

function paintGreeting(username){
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(LOCAL_NAME);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener('submit', handleSubmit);
} else{
  paintGreeting(savedUsername);
}