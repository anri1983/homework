/*import tasks from './components/tasks';
import List from './components/list';
import bar from './components/bar';

tasks.add({ name: 'task1', key: 1, status: 'overdue' });
tasks.add({ name: 'task2', key: 2, status: 'overdue' });
tasks.add({ name: 'task3', key: 3, status: 'done' });
tasks.add({ name: 'task4', key: 4, status: 'active' });
tasks.add({ name: 'task5', key: 5, status: 'active' });

class App{
    bar = {};
    list = {};
    tasks = {};
    constructor(bar, tasks,){
        this.bar = bar;
        this.tasks = tasks;
        this.list = new List();

        this.bar.callback = this.setFilter.bind(this);
        this.list.callback = this.removeItem;
        this.addEvent();
    }
    addEvent() {
        const form = document.getElementById('insert__form');
        form.onsubmit = (event) => {
            event.preventDefault();
            if(!event && !event.currentTarget){
                return;
            }
            let input = event.currentTarget.fistElementChild;
            this.tasks.add({name: input.value, key: this.tasks.items.length + 1 , stetus: 'active'});
            input.value = '';
            this.render()
        }
    }
    setFilter(name) {
        this.tasks.filter = name;
        this.render();
    }
    render() {
        let items = this.tasks.get();
        this.bar.render(items.length);
        this.list.render(items);
    }
}
(new App (bar, tasks, {})).render();




//const createjsBar = document.querySelector("#js-bar");
//createjsBar = document.getElementsByTagName('div');

/*const jsBar = document.querySelector("#js-bar");

    jsBar.innerHTML = '';
    let div1 = document.createElement("div");
    jsBar.appendChild(div1);
    div1.classList.add('col-1-4');
    let span = document.createElement("span");
    div1.appendChild(span);
    span.classList.add("total");
    span.setAttribute("id", "js-total");
    span.innerText = `${count} items left`;

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

//CLASS

class human {
    constructor (age, weight, gender){
        this.age = age;
        this.weight = weight;
        this.gender = gender; 
    }
}

class employer extends human{
    nameCompany = 'Roga i Kopyta';
    typeOfOwnership = 'JSC';
    kindOfActivity = 'Equipments fix';
    payMoney ()  {
    'every week';
    }
    searchingForaJob () {
        'service contract';
    }
    custom_madeEquipment () {
        'extruder manufacturing';
    }
}

    class engineer extends employer {
        specialisation = 'Equipment';
        experience = 10;
        qualification = 'mechanic';
        writeDocument (){
    console.log('instruction№1');
        }
    fixBugs (){
        console.log(BugsFixed);
    }
    getIntructions () {
        console.log('make call to employer');
    }
        }
    
    class tester extends employer {
        Check = 'Ok';
        FindBugs = 5;
        FixMethods = 'Scan';
        constructor() {
            super(56, 80, 'male');
        }
        findFails () {
            'No fails';
        }
        writeAnnotation (){
        "works well";
        }
        functionalityImprovements () {
            'increased stability';
        }
    }


   let human1 = new human (40, 105, 'female');
   let human2 = new human (25, 75, "male");
  console.log(human1, human2);
  
  let tester2 = new tester;
  console.log(tester2);*/

 
    


