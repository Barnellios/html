if(Math.random() > 0.5){
const link = document.querySelector("a");
link.textContent = 'Dart Weider';
link.href = "https://beautyofglass.com"
}
const sect = document.querySelector("section");

for( let i = 0; i <10 ; i++){
const para = document.createElement("p");
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);
}

const linkPara = document.querySelector('p');
sect.appendChild(linkPara);

linkPara.style.color = 'white';
linkPara.style.backgroundColor = 'black';
linkPara.style.padding = '10px';
linkPara.style.width = '250px';
linkPara.style.textAlign = 'center';

linkPara.classList.add('mark');

const clockContainer = document.querySelector('.clock');
setInterval(() => clockContainer.innerText = new Date().toLocaleTimeString(), 1000);

const btnAdd = document.querySelector('.add');
btnAdd.addEventListener('click', addToDo);

function addToDo(){
const todoInput = document.querySelector('.todo');
const item = document.createElement('li');
item.innerText = todoInput.value;
const todoContainer = document.querySelector('.todos');
todoContainer.appendChild(item);
todoInput.value = " "; 
}