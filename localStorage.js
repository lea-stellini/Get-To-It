const btnNext = document.getElementById("btn__next");
const btnEnd = document.getElementById("btn__end");

export const stockInLocalStorage = (item) => {
    localStorage.setItem('tasks', JSON.stringify(item));
};

export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("tasks"));
};

export const removeFromLocalStorage = (array, item) => {
  
    const newArray = array.filter(el => el !== item)

    if(newArray.length === 1){
        btnNext.style.display = "none";
        btnEnd.style.display = "block";
    } else if(newArray.length > 1){
        btnNext.style.display = "block";
        btnEnd.style.display = "none";
     }

    stockInLocalStorage(newArray);
};