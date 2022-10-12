import "nes.css/css/nes.min.css";
import './style.css';

const form = document.querySelector('form');
const modal = document.querySelector('dialog')
// const saveTodo = form.querySelector('.save')
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


form.addEventListener('submit', (e) => {
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
        due.textContent = dateConverter(ele);
        // todoCardColor()
        info.appendChild(priority)
        info.appendChild(due)
        todoCard.appendChild(h2)
        todoCard.appendChild(desc)
        todoCard.appendChild(info)
        todoGrid.appendChild(todoCard)
    });
    todoCardColor();
}

const dateConverter = (obj) => {

    const date = obj.due;
    console.log(date);
    if (date == '') {
        return date
    }
    const dateArr = date.split('-')
    // date dateArr = [2022,09,28]
    const year = dateArr[0]
    const month = dateArr[1]
    const day = dateArr[2]
    const newDate = `${day}/${month}`
    return newDate;
}

console.log(dateConverter(fd[0]))

const todoCardColor = () => {
    const cards = document.querySelectorAll('.todo-card');
    console.log('working');
    cards.forEach((card) => {
        const priorityArr = card.childNodes[2].childNodes[0].textContent.split('')
        const priority = priorityArr[priorityArr.length - 1]
        console.log(priority);
        if (priority === '1') {
            card.style.backgroundColor = 'var(--priority-clr-1)'
            console.log('working2');
        }
        if (priority === '2') {
            card.style.backgroundColor = 'var(--priority-clr-2)'
            console.log('working2');
        }
        console.log('working2');
    })
}

const hamburgerMenu = () => {

}

// const siteIcon = document.getElementById('site-icon');
// siteIcon.style.src = "./assets/images/icon.png";




addToDotoDOM();

const audioSFX = (btn, sfx) => {
    const button = document.getElementById(`${btn}`);
    button.addEventListener('click', () => {
        const sfxAudio = new Audio();
        sfxAudio.src = `./assets/audio/${sfx}.mp3`
        sfxAudio.play();
    })
    console.log('sound!!');
}

audioSFX('add-btn', 'game-start');







// // Select the button
// const btn = document.querySelector(".btn-toggle");
// // Check for dark mode preference at the OS level
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");


// // Get the user's theme preference from local storage, if it's available
// const currentTheme = localStorage.getItem("theme");
// // If the user's preference in localStorage is dark...
// if (currentTheme == "dark") {
//     // ...let's toggle the .dark-theme class on the body
//     document.body.classList.toggle("dark-mode");
//     // Otherwise, if the user's preference in localStorage is light...
// } else if (currentTheme == "light") {
//     // ...let's toggle the .light-theme class on the body
//     document.body.classList.toggle("light-mode");
// }
// // ---------- //

// // Listen for a click on the button 
// btn.addEventListener("click", function () {
//     // If the user's OS setting is dark and matches our .dark-mode class...
//     if (prefersDarkScheme.matches) {
//         // ...then toggle the light mode class
//         document.body.classList.toggle("light-mode");
//         // ...but use .dark-mode if the .light-mode class is already on the body,
//         var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
//     } else {
//         // Otherwise, let's do the same thing, but for .dark-mode
//         document.body.classList.toggle("dark-mode");
//         var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
//     }
//     //  Finally, let's save the current preference to localStorage to keep using it
//     localStorage.setItem("theme", theme);
// });