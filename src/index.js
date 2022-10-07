import './style.css';
import store from './modules/store.js';
import displayTodo from './modules/function.js';
import formClear from './modules/cleartask.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = Object.fromEntries(new FormData(e.target));
  store(input.task);
  displayTodo();
});

const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  formClear();
  displayTodo();
});

displayTodo();
