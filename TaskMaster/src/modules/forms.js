

//const buttn = document.getElementById("add-btn");



const form = document.getElementById(("task-form"));
const taskNameEl = document.getElementById("task-input");
const buttonEl = document.getElementById("add-btn");


const tasks = []

export function InitializeFormData() {
    form.addEventListener("submit", (e) => {
        /*e.preventDefault();
        e.stopPropagation();

        const data = new FormData(form);*/


        /*console.log(data);
        console.log(data.get("task"))
        console.log(data.get("datetime-local"))*/


        /*tasks.push({
            title: data.get("task"), datetime: data.get("datetime-local");
        });*/

        taskNameEl.addEventListener("submit", (e) => {

        })
    });
}