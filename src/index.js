import "nes.css/css/nes.min.css";
import './style.css';

const form = document.querySelector('form');
const modal = document.querySelector('dialog')
const saveTodo = form.querySelector('.save')
const cancelToDo = form.querySelector('.cancel')
const fd = [
    {
        title: "Demo Todo",
        description: "This is some demo description. Blah blah blah",
        "due": "2022-09-28",
        priority: "2"
    },
    {
        title: "Demo Todo 2",
        description: "This is some more demo description. Blah blah blah",
        "due": "2022-09-28", 
        priority: "1"
    },

];


saveTodo.addEventListener('click', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new URLSearchParams(new FormData(form).entries()));
    fd.push(data)
    addToDotoDOM()
    console.log(data);
})

cancelToDo.addEventListener('click', (e) => {
    e.preventDefault();
    modal.close();
})

const addToDotoDOM = () => {
    const todoGrid = document.querySelector(".todo-grid")

    let child = todoGrid.lastElementChild;
    while (child) {
        todoGrid.removeChild(child);
        child = todoGrid.lastElementChild;
    }

    fd.forEach(ele => {
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
        due.textContent = ele.due
        info.appendChild(priority)
        info.appendChild(due)
        todoCard.appendChild(h2)
        todoCard.appendChild(desc)
        todoCard.appendChild(info)
        todoGrid.appendChild(todoCard)
        console.log(fd);
    });
}
addToDotoDOM();