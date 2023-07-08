/* eslint-disable no-use-before-define */
import './css/app.scss';
import './css/style.scss';

const initialList = [
  { id: 'id1', text: '學會React', done: true },
  { id: 'id2', text: '年薪百萬', done: false },
];

const form = document.getElementById('todo__form');
const formInput = document.getElementById('todo__form-input');
const todoItemsWrap = document.getElementById('todo__items-wrap');

const renderView = () => {
  console.log('renderView');
  const todoChild = initialList.map((todo) => {
    let className = 'todo-item';
    if (todo.done) {
      className += ' done';
    }
    return `
      <li class="${className}" data-id="${todo.id}">
        ${todo.text}
      </li>
    `;
  });
  todoItemsWrap.innerHTML = todoChild.join('').toString();
  document.querySelectorAll('.todo-item').forEach((ele) => {
    ele.addEventListener('click', (e) => {
      const { id } = e.currentTarget.dataset;
      atToggleItem(id);
    });
  });
};

const atAddItem = (text) => {
  console.log('atAddItem', text);
  const item = {
    id: window.crypto.randomUUID(),
    text,
    done: false,
  };
  initialList.push(item);
  renderView();
};
const atToggleItem = (id) => {
  console.log('atToggleItem', id);
  initialList.forEach((item: TodoType) => {
    if (item.id === id) {
      item.done = !item.done;
    }
  });
  renderView();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  atAddItem(formInput.value);
});

renderView();
