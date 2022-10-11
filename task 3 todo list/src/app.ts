const taskContainerElement: HTMLElement =document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");

const tasks: {
    name: string;
    done: boolean;
}[] =  [
    //  {
    //     name:"Project 1";
    //     done: false;
    // } 
];


const render = () => {
    taskContainerElement.innerHTML = "";
    tasks.forEach(task => {
        const taskElement: HTMLElement = document.createElement("li");
        taskElement.innerText = task.name;
        taskContainerElement.appendChild(taskElement);
    });
};

const addTask = (taskName: string) => {
    tasks.push({name: taskName, done: false});
};
addButtonElement.addEventListener("click", (event:Event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
})

render();