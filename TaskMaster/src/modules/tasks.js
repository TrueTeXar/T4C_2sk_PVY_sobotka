export function initializeTaskListListeners() {
    const taskListElements = document.querySelectorAll(".task-item");

    console.log(taskListElements);

    taskListElements.forEach((el) => {
        const checkBox = el.querySelector("input[type=checkbox]");

        checkBox.addEventListener("change", (e) => {
            el.classList.toggle("completed");

            if (e.target.checked) {
                el.classList.add("completed");
                el.style.color = "red";
            }
            else {
                el.classList.remove("completed");
            }

        });

        /*
        el.addEventListener("change", (e) => {
            console.log(e.target.checked);
        })
         */
    });

}

