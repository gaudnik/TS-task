const taskContainerElement: HTMLElement =document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");

const tasks = [];

const render = () => {
    taskContainerElement.innerHTML = "";
    tasks.forEach(task => {
        const taskElement: HTMLElement = document.createElement("li");
        taskElement.innerText = task;
        taskContainerElement.appendChild(taskElement);
    });
};

const addTask = (task: string) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event:Event) => {
    event.preventDefault();
    tasks.push(taskNameInputElement.value);
    render();
})

render();