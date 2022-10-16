export const todoCardColor = () => {
    const cards = document.querySelectorAll('.todo-card');
    cards.forEach((card) => {
        const priorityArr = card.childNodes[2].childNodes[0].textContent.split(' ')
        const priority = priorityArr[priorityArr.length - 1]
        if (priority === 'High') {
            card.style.backgroundColor = 'var(--priority-clr-1)'
        }
        if (priority === 'Medium') {
            card.style.backgroundColor = 'var(--priority-clr-2)'
        }
    })
}