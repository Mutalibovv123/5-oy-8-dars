const blockof = document.querySelector(".block");
const cardof = document.querySelector(".card");
const titleof = document.querySelector(".title");
const taskInput = document.querySelector("#add-task");
const buttonof = document.querySelector("#button");
const taskContainer = document.querySelector(".task-container");

function createTask(taskText) {
    return `
    <div class="task"> 
        <p>${taskText}</p> 
    </div>`;
}
buttonof.addEventListener('click', function () {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const taskElement = createTask(taskText);
        taskContainer.innerHTML += taskElement;
        taskInput.value = '';
    }
});