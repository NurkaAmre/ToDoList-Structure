import './style.css';
import store from './modules/store';
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





































//Get localStorage todo-list 
// let todos = localStorage.getItem('todo-list') ? JSON.parse(localStorage.getItem('todo-list')) : [];


// function displayTodo() {
//   let li = '';
//     todos.forEach((todo, id) => {
//       li += `
//         <li class="task">
//                 <label for="${id}">
//                   <input onclick="updateStatus(this)" type="checkbox" id="${id}">
//                   <p>${todo.name}</p>
//                 </label>
//                 <div class="settings">
//                   <button class="three-dot">&#10247</button>
//                   <button class="task-menu">&#x1F5D1</button>
//                 </div>
//           </li>
//           <hr>
//         `;
//     });
//   taskBox.innerHTML = li;
// }
// displayTodo();

// function updateStatus(selectedTask) {
  
// }

// taskInput.addEventListener('keyup', e => {
//   let userTask = taskInput.value.trim();
//   if(e.key == "Enter" && userTask) {
//     if(!todos) {
//       todos = [];
//     }
//     taskInput.value = '';
//     let taskInfo = {name: userTask, status: "pending"};
//     todos.push(taskInfo); // adds new task to todos
//     localStorage.setItem('todo-list', JSON.stringify(todos));
//     displayTodo();
//   }
// });