

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
            console.log(taskNameEl.value);
        })
    });


    form.addEventListener("input", () => {
        const errors = validateForm();

        if (errors && errors.length > 0) {
            console.log(errors.join(","));
            buttonEl.disabled = true;
        } else {
            buttonEl.disabled = false;
        }
    })
}


function validateForm() {
    let errors = [];
    const data = new FormData(form);

    if (data.get("task") && data.get("task").length <= 3) {
        errors.push("Task name must be at least 3 characters.");
    }

    //zamezit datum v minulosti
    const today = Date.now();
    console.log(today);
    if (data.get("datetime-local") && data.get("datetime-local") < today || data.get("datetime-local") == null) {
        errors.push("Date is in the past.");
    }
    return errors;
}




function getFormDataAsObject() {
    const data = new FormData(form);

    const res = {};
    for (let pair of data.entries()){
        res[pair[0]] = pair[1];
    }
    return res;
}
