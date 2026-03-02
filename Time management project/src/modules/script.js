import {toFormat} from "./time.js";
import {getTasks, saveTasks}  from "./tasks.js";

const formElement = document.querySelector('form');
const taskBox = document.querySelector('.box-for-tasks');


//inputs from form
const taskName = document.getElementById("task-name");
const taskDescription = document.getElementById("task-description");

const startTime = document.getElementById("start-date");
const endTime = document.getElementById("end-date");


//buttons
const resetButton = document.getElementById("reset-button");


//errors
const nullText = document.querySelector(".error-message");


//infos
const noTasks = document.getElementById("no-tasks-yet");


//dynamic elements
const activeTaskBox = document.getElementById("active-task");
let activeTasksIsActive = false;


const activeTaskName = document.createElement("p");
const activeTaskDateWithStart = document.createElement("p");
const activeTaskEndDate = document.createElement("p");
const activeTaskDescription = document.createElement("p");
const activeTimer = document.createElement("p");
const activeTaskEndButton = document.createElement("button");


activeTaskEndButton.classList.add("end-button-styles");


//date variables
const now = Date.now();

console.log(now);


formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const dataObject = {
        taskName: taskName.value,
        taskDescription: taskDescription.value,
        startTime: startTime.value,
        endTime: endTime.value,
        deleteTask: document.createElement("div")
    }

    if (taskName.value === "") {
        nullText.classList.add("active");
        return;
    }

    if (taskBox.children.length === 0) {
        noTasks.classList.add("active");
    }
    else {
        noTasks.classList.add("inactive");
    }

    const row = document.createElement("div");
    row.classList.add("task-row");

    const deleteTask = document.createElement("p");
    deleteTask.textContent = "delete task";
    

    row.innerHTML = `${dataObject.taskName} - ${dataObject.taskDescription} - ${dataObject.startTime} - ${dataObject.endTime} | <p id="delete-button" style="color: red; cursor: pointer;">${dataObject.deleteTask = deleteTask.textContent}</p>`;
    row.style.paddingTop = "5px";
    
    const deleteButtonToClick = row.querySelector("#delete-button");
    
    
    taskBox.appendChild(row);

    const tasks = getTasks();

    const id = Date.now();

    tasks.push({
        id: id,
        name: dataObject.taskName,
        description: dataObject.taskDescription,
        start: dataObject.startTime,
        end: dataObject.endTime,
        duration: null
    });
    
    //předběžný remove
    deleteButtonToClick.addEventListener("click", e => {
        e.preventDefault();
        row.remove();
    })


    const interval = setInterval(() => {
        const relapsedTime = Date.now() - now; //teď mínus teď tehdy
        activeTimer.textContent = toFormat(relapsedTime);
    }, 1000);

    if (startTime.value === "" && endTime.value === "") {
        
        activeTaskName.textContent = taskName.value;
        activeTaskDateWithStart.textContent = new Date().toLocaleTimeString("cs-CZ");
        activeTaskEndDate.textContent = "--"
        activeTaskDescription.textContent = taskDescription.value;
        activeTaskEndButton.textContent = "End Now";


        
        activeTaskBox.appendChild(activeTaskName);
        activeTaskBox.appendChild(activeTaskDateWithStart);
        activeTaskBox.appendChild(activeTaskEndDate);
        activeTaskBox.appendChild(activeTaskDescription);
        activeTaskBox.appendChild(activeTimer);
        activeTaskBox.appendChild(activeTaskEndButton);


        activeTaskBox.style.border = "2px solid green";
    }


    activeTaskEndButton.addEventListener("click", e => {
        e.preventDefault();
        activeTaskEndDate.textContent = new Date().toLocaleTimeString("cs-CZ");
        activeTaskEndButton.remove();
        activeTaskBox.style.border = "2px solid white";
        clearInterval(interval);


        row.innerHTML = `${dataObject.taskName} - ${dataObject.taskDescription} - ${dataObject.startTime = activeTaskDateWithStart.textContent} - ${dataObject.endTime = activeTaskEndDate.textContent} - <p>duration: ${activeTimer.textContent}</p> | <p id="delete-button" style="color: red; cursor: pointer;">${dataObject.deleteTask = deleteTask.textContent}</p>`;
        //TODO: dopsat přepisování času do taskBoxu po ukončení aktivního tasku

        const tasks = getTasks();
        const task = tasks.find((task) => task.id === id);

        if (!task) {
            return;
        }

        task.end = activeTaskEndDate.textContent;
        task.duration = activeTimer.textContent;

        saveTasks(tasks);
    })
});




resetButton.addEventListener('click', (e) => {
    e.preventDefault();

    const childrenElements = Array.from(taskBox.children);

    childrenElements.forEach(childElement => {
        childElement.remove();
    })


    //mělo zobrazovat no tasks yet pokud žádný řádek tam není, ale nezobrazuje
    taskBox.addEventListener("input", () => {
        if (taskBox.children.length === 0) {
            noTasks.classList.add("active");
        }
    })
})



function renderTasks() {
    const tasks = getTasks();

    if (tasks.length === 0) {
        noTasks.classList.add("active");
        return;
    }

    noTasks.classList.remove("active");

    tasks.forEach(task => {
        const row = document.createElement("div");
        row.classList.add("task-row");

        row.innerHTML =  `${task.name} - ${task.description} - ${task.start} - ${task.end ?? "--"} - duration: ${task.duration ?? "--"}`;

        taskBox.appendChild(row);
    });
}

renderTasks();


