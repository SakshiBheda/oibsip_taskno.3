const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo")

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);



function addTodo(event) {
    // console.log(event);
    // it prevent form from submitting
    event.preventDefault();
    console.log("hello ")
    const todoDive = document.createElement('div');
    todoDive.classList.add('todo');
    //making the todo list item
    const newtodo = document.createElement('li');

    newtodo.innerText = todoInput.value;

    newtodo.classList.add("todo-item");
    todoDive.appendChild(newtodo);


    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    completeButton.classList.add("complete-button");
    todoDive.appendChild(completeButton);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("delete-button");
    todoDive.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.innerHTML = "<i class='fa fa-edit'></i>";
    editButton.classList.add("edit-button");
    todoDive.appendChild(editButton);



    todoList.appendChild(todoDive);

    todoInput.value = "";

}







function deleteCheck(e) {
    const item = e.target;
    // console.log(item);
    if (item.classList[0] === 'delete-button') {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === 'complete-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

    if (item.classList[0] === 'todo-item') {
        let tempstore = item.parentElement.childNodes[0].innerHTML;
        item.parentElement.childNodes[0].innerHTML = '<input type="text" placeholder="enter text" class="edit-text">';  //this is li element
        try {
            item.parentElement.childNodes[3].onclick = function(e) {
                if (item.parentElement.childNodes[0].children[0].value == "") {
                    item.parentElement.childNodes[0].innerHTML = tempstore;
                }
                else{
                    item.parentElement.childNodes[0].innerHTML = item.parentElement.childNodes[0].children[0].value;
                }
            }
        } catch (e) {
            
        }
        try {
            let varifyelement = e.target.parentElement;
            console.log(varifyelement)
            document.onclick = function(e) {

                isclick = varifyelement.contains(e.target);
                if(!isclick){
                    item.parentElement.childNodes[0].innerHTML = tempstore;
                }
            } 
        } catch (error) {
            
        }
        console.log();
    }
}


function filterTodo(e) {
    const tod = todoList.childNodes;
    tod.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';

                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = "none";
                }
        }
    });
}


