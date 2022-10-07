export default function displayTodo() {
  const taskList = document.querySelector('.task-list');

  /* Display Tasks */
  let todos = JSON.parse(localStorage.getItem('todolist')) || [];

  taskList.innerHTML = '';
  todos.map((task) => {
    const taskItem = document.createElement('li');
    let box;
    let styling;
    if (task.completed) {
      box = 'checked';
      styling = 'line-through';
    } else {
      box = '';
      styling = 'none';
    }
    taskItem.innerHTML = `<form class="task-form b-bottom box">
        <input name="completed" type="checkbox" ${box} class="checkbox">
        <textarea name="description" rows="1" class="task-text full" style="text-decoration:${styling}">${task.description}</textarea>
        <button type="button" class="delete btn">
        &#x1F5D1
        </button>
        <button type="submit" class="update btn">
        &#10247
        </button>
        </form>`;
    taskList.appendChild(taskItem);

    const deleteBtn = taskItem.querySelector('.delete');
    const updateBtn = taskItem.querySelector('.update');
    const updateText = taskItem.querySelector('.task-text');

    updateBtn.style.display = 'none';

    /* Edit task */
    updateText.addEventListener('click', (e) => {
      e.preventDefault();
      updateBtn.style.display = 'block';
      deleteBtn.style.display = 'none';
      updateText.style.backgroundColor = '#f4f4f4';
    });

    const taskForm = taskItem.querySelector('.task-form');
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = Object.fromEntries(
        new FormData(e.target),
      );
      task.description = input.description;
      localStorage.setItem('todolist', JSON.stringify(todos));
      updateBtn.style.display = 'none';
      deleteBtn.style.display = 'block';
      updateText.style.backgroundColor = '#fff';
    });

    /* Delete task */
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let temp = todos.filter((item) => item !== task);
      todos = temp;
      temp = todos.map((item) => {
        item.index = todos.indexOf(item) + 1;
        return item;
      });
      todos = temp;
      localStorage.setItem('todolist', JSON.stringify(todos));
      taskList.removeChild(taskItem);
    });

    /* Checkbox status   */
    const checkbox = taskItem.querySelector('.checkbox');
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      localStorage.setItem('todolist', JSON.stringify(todos));

      if (task.completed) {
        updateText.style.textDecoration = 'line-through';
      } else {
        updateText.style.textDecoration = 'none';
      }
    });

    return taskList;
  });
}