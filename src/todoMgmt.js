import { dateConverter } from "./dateConverter.js";
import { todoCardColor } from "./color.js";
import { formData } from "./formData.js";

export const addToDotoDOM = () => {
    const todoGrid = document.querySelector(".todo-grid")
    let child = todoGrid.lastElementChild;
    while (child) {
        todoGrid.removeChild(child);
        child = todoGrid.lastElementChild;
    }
    formData.forEach(ele => {
        const todoCard = document.createElement("div")
        todoCard.classList.add('todo-card')
        const h2 = document.createElement('h2')
        const desc = document.createElement('p')
        const info = document.createElement('div')
        info.classList.add('info');
        const priority = document.createElement('p')
        const due = document.createElement('p')
        h2.textContent = ele.title
        desc.textContent = ele.description
        priority.textContent = `Priority ${ele.priority}`
        due.textContent = dateConverter(ele);
        info.appendChild(priority)
        info.appendChild(due)
        todoCard.appendChild(h2)
        todoCard.appendChild(desc)
        todoCard.appendChild(info)
        todoGrid.appendChild(todoCard)
    });
    todoCardColor();
}


const form = document.querySelector('form');
const modal = document.querySelector('dialog')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new URLSearchParams(new FormData(form).entries()));
    formData.push(data);
    addToDotoDOM();
    modal.close();
})

const cancelToDo = form.querySelector('.cancel')
cancelToDo.addEventListener('click', (e) => {
    e.preventDefault();
    modal.close();
})