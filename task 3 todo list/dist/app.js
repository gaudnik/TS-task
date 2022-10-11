const taskContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasks = [
//  {
//     name:"Project 1";
//     done: false;
// } 
];
const render = () => {
    taskContainerElement.innerHTML = "";
    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task.name;
        taskContainerElement.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});
render();
