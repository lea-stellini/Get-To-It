import { removeFromLocalStorage, getLocalStorage } from "./localStorage.js";

const btnStart = document.getElementById("btn__start");
const btnNext = document.getElementById("btn__next");
const btnEnd = document.getElementById("btn__end");
const btnAgain = document.getElementById("btn__again");
const activeTask = document.getElementById("active__task");

let task = "";

const getRandomTask = () => {
    const allTasks = getLocalStorage();
    if (allTasks.length > 0) {
        const randomNumber = Math.floor(Math.random() * allTasks.length);
        return allTasks[randomNumber];
    }
    return null;
};



export const btnEventListeners = () => {

    btnStart.addEventListener('click', () => {
        btnStart.style.display = "none";
        btnNext.style.display = "block";
        const randomTask = getRandomTask();
        if (randomTask !== null) {
            activeTask.innerHTML = `<p>${randomTask}</p>`;
            task = activeTask.textContent; 
        }
    });

    btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        const allTasks = getLocalStorage();
        removeFromLocalStorage(allTasks, task);
        const randomTask = getRandomTask();
        if (randomTask !== null) {
            activeTask.innerHTML = `<p>${randomTask}</p>`;
            task = activeTask.textContent;
        }

    });

    btnEnd.addEventListener('click', () => {
        activeTask.innerHTML = `<p> Un repos bien mérité </p>`;
        btnEnd.style.display = "none";
        btnAgain.style.display = "block";
    })

    btnAgain.addEventListener('click', () => {
        localStorage.removeItem("tasks");
        location.reload(true);
    })
};