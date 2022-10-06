import './style.css';

const taskInput = document.querySelector('.task-input input');
let taskBox = document.querySelector('.task-box');

//Get localStorage todo-list 
let todos = localStorage.getItem('todo-list') ? JSON.parse(localStorage.getItem('todo-list')) : [];


function displayTodo() {
  console.log(todos)
  let li = '';
    todos.forEach((todo, id) => {
      li += `
        <li class="task">
                <label for="${id}">
                  <input onclick="updateStatus(this)" type="checkbox" id="${id}">
                  <p>${todo.name}</p>
                </label>
                <div class="settings">
                  <button class="three-dot">&#10247</button>
                  <button class="task-menu">&#x1F5D1</button>
                </div>
          </li>
          <hr>
        `;
    });
  taskBox.innerHTML = li;
}
displayTodo();

function updateStatus(selectedTask) {
  console.log(selectedTask)
}

taskInput.addEventListener('keyup', e => {
  let userTask = taskInput.value.trim();
  if(e.key == "Enter" && userTask) {
    if(!todos) {
      todos = [];
    }
    taskInput.value = '';
    let taskInfo = {name: userTask};
    todos.push(taskInfo); // adds new task to todos
    localStorage.setItem('todo-list', JSON.stringify(todos));
    displayTodo();
  }
});