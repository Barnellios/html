      alert('Wanna buy new phone');
      if (Math.random()>0.5){
      const link = document.querySelector('a'); 
      link.href = "https://rozetka.com.ua/ua/mobile-phones/c80003/";
      }
      const btnAdd = document.querySelector('.add');
      btnAdd.addEventListener('click',addTask);

     
      function addTask(){
          const addBtn = document.createElement('button');
          const textInput = document.querySelector('.tasks');
          const item = document.createElement('li');
          item.innerText = textInput.value;
          const taskContainer = document.querySelector('.manyItems');
          taskContainer.appendChild(item);
          textInput.value = '';
          taskContainer
          }
          
      
