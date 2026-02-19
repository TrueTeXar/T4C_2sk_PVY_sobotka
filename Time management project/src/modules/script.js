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


const activeTaskName = document.createElement("p");
const activeTaskDateWithStart = document.createElement("p");
const activeTaskDescription = document.createElement("p");
const activeTimer = document.createElement("p");
const activeTaskEndButton = document.createElement("button");



//date variables
const now = Date.now();

const relapsedTime = Date.now() - now; //teď mínus teď tehdy

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
    
    const deleteButtonToClick = row.querySelector("#delete-button");
    
    
    taskBox.appendChild(row);
    
    //předběžný remove
    deleteButtonToClick.addEventListener("click", e => {
        e.preventDefault();
        row.remove();
    })
    
    
    if (startTime.value === "" && endTime.value === "") {
        
        activeTaskName.textContent = taskName.value;
        activeTaskDateWithStart.textContent = now.toString();
        activeTaskDescription.textContent = taskDescription.value;
        activeTimer.textContent = relapsedTime.toString();
        activeTaskEndButton.textContent = "End Now";


        
        activeTaskBox.appendChild(activeTaskName);
        activeTaskBox.appendChild(activeTaskDateWithStart);
        activeTaskBox.appendChild(activeTaskDescription);
        activeTaskBox.appendChild(activeTimer);
        activeTaskBox.appendChild(activeTaskEndButton);
    }
    
    
});




resetButton.addEventListener('click', (e) => {
    e.preventDefault();

    const childrenElements = Array.from(taskBox.children);

    childrenElements.forEach(childElement => {
        childElement.remove();
    })


    //mělo zobrazovat no tasks yet pokud žádný řádek tam není, ale nezobrazuje
    taskBox.addEventListener("input", () => {
        if (taskBox.children.length === null) {
            noTasks.classList.add("active");
        }
    })
})





