import { btnEventListeners } from "./task.js";
import { stockInLocalStorage } from "./localStorage.js";

const taskInput = document.getElementById("task");
const btnStart = document.getElementById("btn__start");

const showBtn = (array) => {
    if(!array){
        btnStart.style.display = "none"
    } else if (array.length > 1){
        btnStart.style.display = "block"
    };
};

const addTasks = () => {

    const tasks = [];
    let task;

    taskInput.addEventListener("change", (e) => {
        task = e.target.value;
        tasks.push(task);
        taskInput.value = "";
        stockInLocalStorage(tasks);
        showBtn(tasks);
    });
};
    
const main = () => {
    addTasks();
    btnEventListeners();
};

main();







