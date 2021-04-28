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

//const createjsBar = document.querySelector("#js-bar");
//createjsBar = document.getElementsByTagName('div');

const jsBar = document.querySelector("#js-bar");

    jsBar.innerHTML = '';
    let div1 = document.createElement("div");
    jsBar.appendChild(div1);
    div1.classList.add('col-1-4');
    let span = document.createElement("span");
    div1.appendChild(span);
    span.classList.add("total");
    span.setAttribute("id", "js-total");
    span.innerText = '3 items left';

    let div2 = document.createElement("div");
    jsBar.appendChild(div2);
    div2.classList.add("col-1-2");
    let ul = document.createElement("ul");
    div2.append(ul);
    ul.classList.add("filter");
    ul.setAttribute("id","js-filters");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    ul.append(li1, li2, li3);
    let link_all = document.createElement("a");
    let link_active = document.createElement("a");
    let link_complited = document.createElement("a");
    li1.append(link_all);
    li2.append(link_active);
    li3.append(link_complited);
    link_all.href = '#/all';
    link_all.classList.add("button");
    link_all.classList.add("selected");
    link_all.innerText = 'All';
    link_active.href = '#/active';
    link_active.classList.add("button");
    link_active.innerText = "Active";
    link_complited.href = '#/completed';
    link_complited.classList.add("button");
    link_complited.innerText = 'Complited';

    let div3 = document.createElement("div");
    jsBar.appendChild(div3);
    div3.classList.add("col-1-4");
    let buttondiv3 = document.createElement("button");
    div3.append(buttondiv3);
    buttondiv3.classList.add("button", "button--clear");
    buttondiv3.id = "js-clear-completed";
    buttondiv3.innerText = "Clear Completed";
    buttondiv3.onclick = function() {
        parent.innerHTML = '';
        };
    
link_all.onclick = function () {
        link_all.classList.add('selected');
        link_active.classList.remove('selected');
        link_complited.classList.remove('selected');
        renderList();    
    }
    link_active.onclick = function () {
        link_active.classList.add('selected');
        link_complited.classList.remove('selected')
        link_all.classList.remove('selected');
        
        parent.innerHTML = '<li style=""><div class="todo"><input type="checkbox" class="toggle"><span><div>task4</div></span><button class="destroy"></button></div></li>' + '<li style=""><div class="todo"><input type="checkbox" class="toggle"><span><div>task5</div></span><button class="destroy"></button></div></li>' + '<li style=""><div class="todo"><input type="checkbox" class="toggle"><span><div>task6</div></span><button class="destroy"></button></div></li>' + '<li style=""><div class="todo"><input type="checkbox" class="toggle"><span><div>task7</div></span><button class="destroy"></button></div></li>';
    }
    link_complited.onclick = function () {
        link_complited.classList.add('selected');
        link_all.classList.remove('selected');
        link_active.classList.remove('selected');

        parent.innerHTML = ('<li><div class="todo"><input type="checkbox" class="toggle"><span><div>task3</div></span><button class="destroy"></button></div></li>');
    }

     
