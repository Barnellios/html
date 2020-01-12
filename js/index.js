      alert('Wanna buy new phone');
      const btnAdd = document.querySelector('.add');
      btnAdd.addEventListener('click',addTask);

      const btnDelete = document.querySelector('.delete');
      btnDelete.addEventListener('click', remove) ;
      
      function addTask(){
          const addBtn = document.createElement('button');
          const textInput = document.querySelector('.tasks');
          const item = document.createElement('li');
          item.innerText = textInput.value;
          const taskContainer = document.querySelector('.manyItems');
          taskContainer.appendChild(item);
          textInput.value = '';
          btnDelete.addEventListener('click', remove) ;
          }
          
      
