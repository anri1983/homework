class Bar {
    callback = function () {};
    render(count){
        const jsBar = document.getElementById('js-bar');

    jsBar.innerHTML = '';
    {
        let div1 = document.createElement("div");
        jsBar.appendChild(div1);
        div1.classList.add('col-1-4');
        let span = document.createElement("span");
        div1.appendChild(span);
        span.classList.add("total");
        span.setAttribute("id", "js-total");
        span.innerText = `${count} items left`;
    }

    {
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
    }

    {
        let div3 = document.createElement("div");
    jsBar.appendChild(div3);
    div3.classList.add("col-1-4");
    let buttondiv3 = document.createElement("button");
    div3.append(buttondiv3);
    buttondiv3.classList.add("button", "button--clear");
    buttondiv3.id = "js-clear-completed";
    buttondiv3.innerText = "Clear Completed";
    }
let links = document.querySelectorAll('#js-filters li');
let that = this;
links.forEach(function (element) {
element.addEventListener('click', function(event){
    let links = document.querySelectorAll('a.selected');
    links.forEach(function (element){
        element.classList.remove('selected');
    });
    let {currentTarget} = event;
     currentTarget.children[0].classList.add('selected');
     that.callback(currentTarget.children[0].dataset.status)
});
});
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
}
link_complited.onclick = function () {
    link_complited.classList.add('selected');
    link_all.classList.remove('selected');
    link_active.classList.remove('selected');

    parent.innerHTML = ('<li><div class="todo"><input type="checkbox" class="toggle"><span><div>task3</div></span><button class="destroy"></button></div></li>');
}

    }
}