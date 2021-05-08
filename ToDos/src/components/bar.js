class Bar {
    callback = function () {};
    render(count)
    {
  
  // находим нужный блок
      const blockIdList = document.getElementById('js-bar');
  
  //удалить html
      blockIdList.innerHTML = '';
  
  // рисуем первый блок
      {
        // создаем div
        let div = document.createElement('div');
  // добавляем класс
        div.classList.add('col-1-4');
  // создаем span
        let span = document.createElement('span');
  // добавляем класс
        span.classList.add('total');
  // добавляем аттрибут id
        span.setAttribute('id', 'js-total');
  // добавляем текст
        span.innerText = `${count} items left`;
  // добавляем созданный тег span к тегу div
        div.appendChild(span);
  
        // добавляем созданный тег div к js-bar
        blockIdList.appendChild(div);
      }
  
  // рисуем второй блок
      {
        // создаем div
        let div1 = document.createElement('div');
        // добавляем класс
        div1.classList.add('col-1-2');
  
        // создаем ul
        let ul = document.createElement('ul');
        ul.classList.add('filter');
        ul.setAttribute('id','js-filters');
  
        // добавляем html
        ul.innerHTML = '<li><a href="#/all" data-status="all" class="button selected"><span>All</span></a></li>' +
          '  <li><a href="#/active" data-status="active" class="button"><span>Active</span></a></li>' +
          '  <li><a href="#/completed" data-status="done" class="button"><span>Completed</span></a></li>';
  
  
        // добавляем созданный тег ul к тегу div
        div1.appendChild(ul);
  
        // добавляем созданный тег div к js-bar
        blockIdList.appendChild(div1);
      }
  
      { // рисуем 3 блок
  
        // создаем div
        let div2 = document.createElement('div');
        // добавляем класс
        div2.classList.add('col-1-4');
  
  
        let button = document.createElement('button');
        button.setAttribute('class','button button--clear');
        button.setAttribute('id','js-clear-completed');
        button.innerText = 'Clear Completed';
  
        button.classList.add('button');
        button.classList.add('button--clear');
  
        // добавляем созданный тег button к тегу div
        div2.appendChild(button);
        // добавляем созданный тег div к js-bar
        blockIdList.appendChild(div2);
      }
  
      // ищем все ссылки
      let links = document.querySelectorAll('#js-filters li');
  
      // делаем контекст глобальным
      let that = this;
      // делаем цикл
      links.forEach(function (element) {
  
        // добавляем событыие клик
        element.addEventListener('click', function(event) {
          // ищет все a с классом selected
          let links = document.querySelectorAll('a.selected');
  
          // перебираем все найденные элементы
          links.forEach(function (element) {
            // удаляем класс selected у найденных элементах
            element.classList.remove('selected');
          });
  
          // ложим currentTarget в переменную
          let { currentTarget } = event;
  
          // ищем первего ребенка добавляем активный класс
          currentTarget.children[0].classList.add('selected');
  
          // вызываем callback у объекта
          that.callback(currentTarget.children[0].dataset.status)
  
        });
  
      });
  
    }
  }
  
  export default new Bar();
  