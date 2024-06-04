
function Add() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    let todoList = document.getElementById("list");
    if(taskText !== ''){
        let taskElement = document.createElement("li");
        taskElement.className = 'task';
        taskElement.style = 'display:flex; justify-content: space-between;'

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = function(){
            taskTestSpan.classList.toggle('completed');
        }

        let taskTestSpan = document.createElement("span");
        taskTestSpan.textContent = taskText;

        let removeBtn = document.createElement("button");
        removeBtn.className = 'remove';
        removeBtn.textContent = 'remove';
        removeBtn.addEventListener('click', function () {
            todoList.removeChild(taskElement);
        })

        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskTestSpan);
        taskElement.appendChild(removeBtn);

        todoList.appendChild(taskElement);

        taskInput.value = '';
    }
} 