export const taskDb = [];


const taskObservers = [];

export function addTask(task) {
    taskDb.push(task);

    console.log(taskDb);
}


export function removeTaskById(taskId) {
    const idx = taskDb.findIndex(task => task.id === id);
    if (idx === -1) {
        return;
    }


    taskDb.splice(idx, 1);
}


export function registerObserver(callback) {
    taskObservers.push(callback);
}


export function sendObserver(observer) {
    taskObservers.forEach(observer => observer());

}