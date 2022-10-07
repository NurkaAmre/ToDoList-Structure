import Task from './task.js';

/* Store Tasks */

export default function store(task) {
  const parsedArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  const counter = parsedArr.length + 1;
  const newTask = new Task(counter, task);

  parsedArr.push(newTask);
  localStorage.setItem('taskArr', JSON.stringify(parsedArr));

  const taskfield = document.querySelector('.text-field');
  taskfield.value = '';
}