//selectors
const todoItem = document.querySelector('#todo');
const submitButton = document.querySelector('#submitbutton');
const todoList = document.querySelector('.todolist');
const selected = document.querySelector('#selectedTodo')


//EventListners
 submitButton.addEventListener("click",addItem);
 todoList.addEventListener("click" ,deleteItem);
 selected.addEventListener('click',selected_todo);



//functions
function addItem(e){

    e.preventDefault();
    //create a div
const itemContainer = document.createElement('div');
itemContainer.classList.add('itemContainerstyle');
// create li
const itemlist = document.createElement('li');
itemlist.classList.add('itemliststyle')
if(todoItem.value.length > 0 ){
itemlist.innerText = todoItem.value ;
itemContainer.appendChild(itemlist);


//create a completedbutton
const completed = document.createElement('button');
completed.innerHTML= '<li class="fas fa-check"> </li>'
completed.classList.add('completedButton')
itemContainer.appendChild(completed);


//create a trashbutton

const deleted = document.createElement('button')
deleted.innerHTML= '<li class="fas fa-trash"></li>'
deleted.classList.add('deleteButton');
itemContainer.appendChild(deleted);

todoList.appendChild(itemContainer);
todoItem.value = " ";
}
}
//delete a todo
function deleteItem(e){
    e.preventDefault();
    const item = e.target;
    console.log(item);

    if(item.classList[0]=== "deleteButton")
    { 
        const del = item.parentElement;
        del.remove();
    

    }

    if(item.classList[0] === "completedButton"){
        const del = item.parentElement;
        del.classList.toggle('_completed');//forces the class to be added and returns true and if it  exists and the class is removed and a false  is returned. 
    }


}
function selected_todo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(itemContainerstyle){
        switch(e.target.value){
            case 'All':
                itemContainerstyle.style.display = "flex";
                break;
            case 'Completed':
                if(itemContainerstyle.classList.contains('_completed'))  {  
                itemContainerstyle.style.display = "flex";
                }else{
                    itemContainerstyle.style.display= "none";
                }
                break;
            case'Uncompleted':
             if(!itemContainerstyle.classList.contains('_completed'))  {  
                itemContainerstyle.style.display = "flex";
                }else{
                        itemContainerstyle.style.display= "none";
                }
                break;
        }

        
    })

}