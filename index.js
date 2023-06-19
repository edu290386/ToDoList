const containerTask = document.querySelector('.container-task');
const buttonAddTask = document.querySelector('.button-add');
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


const renderTask = (tasks) => {
    containerTask.innerHTML = "";
    console.log(listTask);
    tasks.forEach((task, index) => { 
        containerTask.innerHTML += `
        ${(task.status) ? `<div id="task-${index}" class="task done">`
            : `<div id="task-${index}" class="task">`}
            <div class="task-text">${task.task}
            </div>
            <div class="options ${index}">
                <div>
                    <button class="check-button" onclick=checkTask(${index})>
                        <img src="./assets/icons/check-fill.png" alt="">
                    </button>
                    <button id="edit-button ${index}">
                        <img src="./assets/icons/pencil-line.png" alt="">
                    </button>
                </div>
                <div>
                    <button id="save-button ${index}">
                        <img src="./assets/icons/save-line.png" alt="">
                    </button>
                    <button class="delete-button" onclick=deleteTask(${index})>
                        <img src="./assets/icons/delete-bin-line.png" alt="">
                    </button>
                </div>
            </div>        
        </div>`;
    });
}

