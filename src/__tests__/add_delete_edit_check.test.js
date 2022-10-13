/**
 * @jest-environment jsdom
 */
import store from '../modules/store.js';
import displayTodo from '../modules/function.js';
import formClear from '../modules/cleartask.js';

document.body.innerHTML = '<input type="text" name="task" class="text-field full" placeholder="Add to your list..." required> <ul class="task-list"> </ul> <a class="clear-btn" href="">Clear all completed</a>';

describe('Store', () => {
  test('Should add element when its called', () => {
    store('Hello');
    displayTodo();
    const list = document.querySelectorAll('textarea');
    expect(list).toHaveLength(1);
  });
});

describe('Delete task', () => {
  test('Should remove added task', () => {
    const deleteBtn = document.querySelector('.delete');
    deleteBtn.click();
    const listElement = document.querySelectorAll('textarea');
    expect(listElement).toHaveLength(0);
  });
});

describe('Edit task', () => {
  test('Should edit text when clicked', () => {
    store('Hello');
    displayTodo();
    const taskItem = document.querySelector('li');
    const taskForm = taskItem.querySelector('textarea');
    taskForm.value = 'Hey';
    const locStorage = localStorage.getItem('todolist');
    const arrTasks = JSON.parse(locStorage);
    taskForm.click();
    arrTasks[0].description = taskForm.value;
    const result = JSON.stringify(arrTasks);
    displayTodo();
    expect(result).toEqual(JSON.stringify([{
      index: 1,
      description: 'Hey',
      completed: false,
    }]));
  });
});

describe('Checkbox', () => {
  test('Expect to change completed to tru after click', () => {
    const checkBox = document.querySelector('.checkbox');
    checkBox.click();
    const locStorage = localStorage.getItem('todolist');

    expect(locStorage).toEqual(JSON.stringify([{
      index: 1,
      description: 'Hello',
      completed: true,
    }]));
  });
});

describe('Clear all completed', () => {
  test('Should delete all the tasks marked as completed', () => {
    const list = document.querySelectorAll('textarea');
    store('Wooooorld');
    formClear();
    displayTodo();
    expect(list).toHaveLength(1);
  });
});