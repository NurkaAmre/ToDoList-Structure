export default function displayTodo() {
  const taskList = document.querySelector('.task-list');

  /* Display Tasks */
  let parsedArr = JSON.parse(localStorage.getItem('taskArr')) || [];

  taskList.innerHTML = '';
  parsedArr.map((task) => {
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
      localStorage.setItem('taskArr', JSON.stringify(parsedArr));
      updateBtn.style.display = 'none';
      deleteBtn.style.display = 'block';
      updateText.style.backgroundColor = '#fff';
    });

    /* Delete task */
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let temp = parsedArr.filter((item) => item !== task);
      parsedArr = temp;
      temp = parsedArr.map((item) => {
        item.index = parsedArr.indexOf(item) + 1;
        return item;
      });
      parsedArr = temp;
      localStorage.setItem('taskArr', JSON.stringify(parsedArr));
      taskList.removeChild(taskItem);
    });

    /* Checkbox status   */
    const checkbox = taskItem.querySelector('.checkbox');
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      localStorage.setItem('taskArr', JSON.stringify(parsedArr));

      if (task.completed) {
        updateText.style.textDecoration = 'line-through';
      } else {
        updateText.style.textDecoration = 'none';
      }
    });

    return taskList;
  });
}