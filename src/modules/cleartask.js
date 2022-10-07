export default function formClear() {
  /* Clear completed tasks */

  const parsedArr = JSON.parse(localStorage.getItem('taskArr'));
  const temp = parsedArr.filter((item) => item.completed === false);
  localStorage.setItem('taskArr', JSON.stringify(temp));
}