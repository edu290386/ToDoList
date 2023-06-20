const containerTask = document.querySelector('.container-task');
let buttonAddTask = document.querySelector('.button-add');
const inputTask = document.querySelector('.input-task');
const deleteButton = document.querySelector('.delete-button');
const checkButton = document.querySelector('.check-button');


const listTask = [];

inputTask.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        buttonAddTask.onclick();
    }
});

buttonAddTask.onclick = () => {
    console.log("hola")
    if ( inputTask.value === "") return;
    createNewTask(inputTask.value);
    inputTask.value = '';
    inputTask.focus();
}

const createNewTask = (text) => {
    newTask = { task: text , status: false, created_at: new Date() };
    listTask.push(newTask);
    renderTask(listTask);
}

const deleteTask = (task) => {
    listTask.splice(task,1);    
    renderTask(listTask);
}   

const checkTask = (task) => {
    (listTask[task].status) ? listTask[task].status = false : listTask[task].status = true;
    renderTask(listTask)
}

const editTask = (task) => {
    const editInput = document.querySelector(`#input-edit-${task}`);
    const taskText = document.querySelector(`#task-text-${task}`);
    editInput.style.display = 'block';
    taskText.style.display = 'none';
    editInput.placeholder = taskText.textContent;
}


const saveTask = (task) => {
    const editInput = document.querySelector(`#input-edit-${task}`);
    const taskText = document.querySelector(`#task-text-${task}`);
    editInput.style.display = 'none';
    taskText.textContent = editInput.value;
    taskText.style.display = 'block';
}

const renderTask = (tasks) => {
    containerTask.innerHTML = ""; 
    console.log(listTask);
    tasks.forEach((task, index) => { 
        containerTask.innerHTML += `
        ${(task.status) ? `<div id="task-${index}" class="task done">`
            : `<div id="task-${index}" class="task">`}
            <div id="task-text-${index}" class="task-text">${task.task}</div>
            <input id="input-edit-${index}" class="input-edit" type="text" placeholder="Ingrese nueva tarea">
            <div class="options ${index}">
                <div>
                    <button class="check-button" onclick=checkTask(${index})>
                        <img src="./assets/icons/check-fill.png" alt="">
                    </button>
                    <button class="delete-button" onclick=deleteTask(${index})>
                        <img src="./assets/icons/delete-bin-line.png" alt="">
                    </button>
                    
                </div>
                ${(!task.status) ? ` 
                    <div>
                        <button class="edit-button" onclick=editTask(${index})>
                            <img src="./assets/icons/pencil-line.png" alt="">
                        </button>
                        <button class="save-button" onclick=saveTask(${index})>
                            <img src="./assets/icons/save-line.png" alt="">
                        </button>
                    </div>`
                : ''}
            </div>        
        </div>`;
    });
}
