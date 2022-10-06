import './style.css';

const listsContainer = document.querySelector('#tasks');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

const lists = [];

function createList(name) {
  return {
    id: Date.now().toString(), name, tasks: [],
  };
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function render() {
  clearElement(listsContainer);
  lists.forEach((list) => {
    const listElement = document.createElement('li');
    const btn = document.createElement('button');
    listElement.dataset.listId = list.id;
    btn.dataset.listId = list.id;
    listElement.classList.add('list-name');
    btn.classList.add('delete');
    listElement.innerText = list.name;
    listsContainer.appendChild(listElement);
  });
}

newListForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === '') return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  render();
});

render();

//         document.querySelector('#tasks').innerHTML += `
//         <ul class="task">
//         <li id="taskname">
//         ${document.querySelector('#newtask input').value}
//         </li>
//         <button class='delete'><i class="fa-light fa-ellipsis-vertical"></i></button>
//         </ul>
//         `;
