const ulEl = document.querySelector('.todo-items')
const inputEl = document.getElementById('input')
const addEl = document.getElementById('add')

let array = []

function updateTodo(e){
    ulEl.innerText = ""
    inputEl.value ='' 

    array.forEach((todoName, todoId)=>{

    let todosLi = document.createElement('li')
    let pEl = document.createElement('p')
     
    
    let deleteEl = document.createElement('button')
    deleteEl.classList.add('delete-btn')
    deleteEl.innerHTML = "Delete"
    deleteEl.todoId = array[todoId].todoId

    todosLi.append(pEl, deleteEl)
    ulEl.appendChild(todosLi)

    pEl.innerText = array[todoId].todoName 

    deleteEl.addEventListener('click', deletebtn)

})
  
    
}

function deletebtn (e){
    let del = array.find(value =>value.todoId == e.target.todoId)
    console.log(value);
    
}


addEl.addEventListener('click', (e)=>{
    
    let objTodo = {
        todoName : inputEl.value,
        todoId : array.length + 1
    }
    array.push(objTodo)

    updateTodo()
})


