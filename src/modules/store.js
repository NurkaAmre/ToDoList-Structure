import Task from './task.js';

/* Store Tasks */
export default function store(task) {
  const todos = JSON.parse(localStorage.getItem('todolist')) || [];
  const counter = todos.length + 1;
  const newTask = new Task(counter, task);

  todos.push(newTask);
  localStorage.setItem('todolist', JSON.stringify(todos));

  const taskfield = document.querySelector('.text-field');
  taskfield.value = '';
}