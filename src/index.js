class newTask {
    constructor(description, completed = false, index) {
      this.description = description;
      this.completed = completed;
      this.index = index;
    }
  }

const addNew = document.querySelector('#newtask');
const addBtn = document.querySelector('#push');
const taskList = document.querySelector('#tasks');
const clearComplited = document.querySelector('#removed');

// Clear flieds
const formClear = (task) => {
    task.value = '';
  };

// Adding validation for empty input field
addNew.onclick = function () {
    if(document.querySelector('#newtask input').value.length == 0){
        alert('Please enter a task');
    }
    // Adding a new task
    else {
        document.querySelector('#tasks').innerHTML += `
        <ul class="task">
        <li id="taskname">
        ${document.querySelector('#newtask input').value}
        </li>
        <button clas='delete'><i class="fa-light fa-ellipsis-vertical"></i></button>
        </ul>
        `;
    }

    document.querySelector('#newtask input')
value = '';
}
















