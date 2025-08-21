const todoApp = document.querySelector('.todo-app');

const taskInput = document.querySelector('#task-input');

const addTaskBtn = document.querySelector('#add-task-btn');

const todosContainer = document.querySelector('.todos-container');

const taskList = document.querySelector('#task-list');

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const event = taskInput.value.trim();
    
    if (!event) {
        return;
    }
    displayEvents(event);
});

function displayEvents(event) {
    const li = document.createElement('li');
    li.textContent = event;
    taskList.appendChild('li');

    const img = document.getElementById('no-todos');
    img.style.display == 'none';
}