const containerTask = document.querySelector('.container-task');
const buttonAddTask = document.querySelector('.button-add');
const inputTask = document.querySelector('.input-task');
const deleteButton = document.querySelector('.delete-button');


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
    newTask = { task: text , status: 1, created_at: new Date() };
    listTask.push(newTask);
    renderTask(listTask);
}



const renderTask = (tasks) => {
    containerTask.innerHTML = "";
    tasks.forEach((task, index) => { 
        containerTask.innerHTML += `
        <div class="task ${index}">
                    <div class="task-text ${index}">${task.task}
                    </div>
                    <div class="options ${index}">
                        <button class="check-button ${index}" >
                            <img src="./assets/icons/check-fill.png" alt="">
                        </button>
                        <button class="edit-button ${index}">
                            <img src="./assets/icons/pencil-line.png" alt="">
                        </button>
                        <button class="save-button ${index}">
                            <img src="./assets/icons/save-line.png" alt="">
                        </button>
                        <button class="delete-button ${index}">
                            <img src="./assets/icons/delete-bin-line.png" alt="">
                        </button>
                    </div>
                </div>`;
    });
}

