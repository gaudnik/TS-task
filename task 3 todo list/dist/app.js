const taskContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasks = [];
const render = () => {
    taskContainerElement.innerHTML = "";
    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        taskContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    tasks.push(taskNameInputElement.value);
    render();
});
render();
