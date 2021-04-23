const todos = [
  { name: 'task1', key: 1, status: 'overdue' },
  { name: 'task2', key: 2, status: 'overdue' },
  { name: 'task3', key: 3, status: 'done' },
  { name: 'task4', key: 4, status: 'active' },
  { name: 'task5', key: 5, status: 'active' },
  { name: 'task6', key: 6, status: 'active' },
  { name: 'task7', key: 7, status: 'active' }
];

const parent = document.querySelector("body > div > div:nth-child(4) > ul");



const renderList = function () {

    parent.innerHTML = '';
  for(let i=0; i < todos.length; i++) {

    let todo = todos[i];
        let li = document.createElement("li");
    let div = document.createElement("div");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let button = document.createElement("button");

        div.classList.add('todo');

        input.setAttribute('type', 'checkbox');
    input.classList.add('toggle');

        span.innerHTML = `<div>${todo.name}</div>`;

        button.classList.add('destroy');

        div.append(input, span, button);

        li.appendChild(div);

        li.onclick = function () {
            li.classList.add('completed');
    }

        li.ondblclick = function () {
            li.classList.remove('completed');
    }

        li.onmouseover = function () {
            li.style.border = '1px solid green';
    }

        li.onmouseout = function () {
            li.style.border = '';
    }

        parent.appendChild(li);
  }
}

renderList();

const form = document.getElementById('insert__form');

form.onsubmit = function (event) {
    event.preventDefault();

    let input = event.currentTarget.firstElementChild;

    todos.push(
    { name: input.value, key: todos.length + 1 , status: 'active' }
  );

    input.value = '';

    renderList();
}


/*
let newLi = document.createElement("li");

newLi.innerText = `super first`;

parent.prepend(newLi);

let superLast = document.createElement("li");
superLast.innerText = `super last`;
parent.appendChild(superLast);

let middleLast = document.createElement("li");
middleLast.innerText = `middle last`;
parent.insertBefore(middleLast, parent.children[3]);

let p = document.createElement("p");
p.innerText = 'я выше';
parent.insertAdjacentElement('beforeBegin', p);

let p2 = document.createElement("p");
p2.innerText = 'я ниже';
parent.insertAdjacentElement('afterEnd', p2);*/

