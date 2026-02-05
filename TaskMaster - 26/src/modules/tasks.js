import {taskDb, registerObserver} from "../db/db.js";

const taskList = document.getElementById("task-list");


export function render() {
    taskList.innerHTML = "";
    const fragment = document.createDocumentFragment();
}