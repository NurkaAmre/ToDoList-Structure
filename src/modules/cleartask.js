export default function formClear() {
  /* Clear completed tasks */

  const todos = JSON.parse(localStorage.getItem('todolist'));
  const temp = todos.filter((item) => item.completed === false);
  localStorage.setItem('todolist', JSON.stringify(temp));
}