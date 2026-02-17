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

    row.innerHTML = `${dataObject.taskName} - ${dataObject.taskDescription} - ${dataObject.startTime} - ${dataObject.endTime} | ${dataObject.deleteTask = deleteTask.textContent}`;


    taskBox.appendChild(row);



    //předpěžný remove
    row.addEventListener("click", e => {
        e.preventDefault();
        row.remove();
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
        if (taskBox.children.length === null) {
            noTasks.classList.add("active");
        }
    })
})