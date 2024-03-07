let todoList=[
          {
            item:'Data Structure',
            dueDate:'2020-05-04',
          }
];
displayItems();

function todoItemAdd(){
  let inputElement=document.querySelector('#todo-input');
  let inputValue=inputElement.value;
  let dateElement=document.querySelector('#todo-date');
  let dateValue=dateElement.value;
  todoList.push({item:inputValue,dueDate:dateValue});
  inputElement.value='';
  dateElement.value='';
  displayItems();
}

function displayItems(){
  let containerElement=document.querySelector('.todo-container');
  let newHtml='';
  for(let i=0;i<todoList.length;i++){
    let item=todoList[i].item;
    let dueDate=todoList[i].dueDate;
    newHtml+=`
          <span>${item}</span>
          <span>${dueDate}</span>
          <button id="delete-btn" onclick="todoList.splice(${i},1); displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML=newHtml;
}