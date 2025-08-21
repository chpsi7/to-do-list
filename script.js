const todoApp = document.querySelector('.todo-app');

const taskInput = document.querySelector('#task-input');

const addTaskBtn = document.querySelector('#add-task-btn');

const todosContainer = document.querySelector('.todos-container');

const taskList = document.querySelector('#task-list');

addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const taskTest = taskInput.value.trim();
    
    if (!taskTest) {
        return;
    }
    displayTasks(taskTest);
    taskInput.value = '';
});

function displayTasks(taskTest) {
    const li = document.createElement('li');
    li.textContent = taskTest;
    taskList.appendChild(li);

    const img = document.getElementById('no-todos');
    img.style.display = 'none';
}