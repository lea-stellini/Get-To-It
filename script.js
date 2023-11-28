import { btnEventListeners } from "./task.js";
import { stockInLocalStorage, getLocalStorage } from "./localStorage.js";

const taskInput = document.getElementById("task");
const btnStart = document.getElementById("btn__start");
const btnNext = document.getElementById("btn__next");
const btnEnd = document.getElementById("btn__end")

const showBtn = (array) => {

    if(!array){
        btnStart.style.display = "none";
    } else if(array.length > 0 && btnNext.style.display === "block") {
        btnStart.style.display = "none";
    } else if(array.length > 0 && btnEnd.style.display === "block"){
        btnStart.style.display = "none";
        btnNext.style.display = "block";
        btnEnd.style.display = "none";
    }else if(array.length > 1){
        btnStart.style.display = "block"
    };
};

const addTasks = () => {

   

    taskInput.addEventListener("change", (e) => {
        let task;
        const tasks = getLocalStorage() || [];
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







