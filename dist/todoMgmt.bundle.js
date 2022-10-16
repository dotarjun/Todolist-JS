"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["todoMgmt"],{

/***/ "./src/color.js":
/*!**********************!*\
  !*** ./src/color.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoCardColor": () => (/* binding */ todoCardColor)
/* harmony export */ });
const todoCardColor = () => {
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

/***/ }),

/***/ "./src/dateConverter.js":
/*!******************************!*\
  !*** ./src/dateConverter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateConverter": () => (/* binding */ dateConverter)
/* harmony export */ });
const dateConverter = (obj) => {
    const date = obj.due;
    if (date == '') {
        return date
    }
    const dateArr = date.split('-')
    const year = dateArr[0]
    const month = dateArr[1]
    const day = dateArr[2]
    const newDate = `${day}/${month}`
    return newDate;
}

/***/ }),

/***/ "./src/formData.js":
/*!*************************!*\
  !*** ./src/formData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formData": () => (/* binding */ formData)
/* harmony export */ });
const formData = [
    {
        title: "Status",
        description: "Todo status can be changed to completed or discarded by pressing the buttons below. The pencil icon edits the pre exisiting info. ",
        due: "2022-09-28",
        priority: "Low"
    },
    {
        title: "Priority!",
        description: "Each Todo have 3 levels of priority. You can set it when you add new todos or edit pre existing ones. Todos with different priorities look different.",
        due: "2022-09-28",
        priority: "Medium"
    },
    {
        title: "Due Date!",
        description: "You can add a todo date  if you want. It can be done when adding a new todo or editing pre exisiting ones.",
        due: "2022-09-28",
        priority: "High"
    },
];


/***/ }),

/***/ "./src/todoMgmt.js":
/*!*************************!*\
  !*** ./src/todoMgmt.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDotoDOM": () => (/* binding */ addToDotoDOM)
/* harmony export */ });
/* harmony import */ var _dateConverter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateConverter.js */ "./src/dateConverter.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./src/color.js");
/* harmony import */ var _formData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formData.js */ "./src/formData.js");




const addToDotoDOM = () => {
    const todoGrid = document.querySelector(".todo-grid")
    let child = todoGrid.lastElementChild;
    while (child) {
        todoGrid.removeChild(child);
        child = todoGrid.lastElementChild;
    }
    _formData_js__WEBPACK_IMPORTED_MODULE_2__.formData.forEach(ele => {
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
        due.textContent = (0,_dateConverter_js__WEBPACK_IMPORTED_MODULE_0__.dateConverter)(ele);
        info.appendChild(priority)
        info.appendChild(due)
        todoCard.appendChild(h2)
        todoCard.appendChild(desc)
        todoCard.appendChild(info)
        todoGrid.appendChild(todoCard)
    });
    (0,_color_js__WEBPACK_IMPORTED_MODULE_1__.todoCardColor)();
}


const form = document.querySelector('form');
const modal = document.querySelector('dialog')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new URLSearchParams(new FormData(form).entries()));
    _formData_js__WEBPACK_IMPORTED_MODULE_2__.formData.push(data);
    addToDotoDOM();
    modal.close();
})

const cancelToDo = form.querySelector('.cancel')
cancelToDo.addEventListener('click', (e) => {
    e.preventDefault();
    modal.close();
})

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todoMgmt.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb01nbXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ1pPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJLEdBQUcsTUFBTTtBQUNwQztBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1hPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CbUQ7QUFDUjtBQUNGOztBQUVsQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGFBQWE7QUFDeEQsMEJBQTBCLGdFQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLHdEQUFhO0FBQ2pCOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWE7QUFDakI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGF0ZUNvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvTWdtdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdG9kb0NhcmRDb2xvciA9ICgpID0+IHtcbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWNhcmQnKTtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5QXJyID0gY2FyZC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQuc3BsaXQoJyAnKVxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5QXJyW3ByaW9yaXR5QXJyLmxlbmd0aCAtIDFdXG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gJ0hpZ2gnKSB7XG4gICAgICAgICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1wcmlvcml0eS1jbHItMSknXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSAnTWVkaXVtJykge1xuICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcHJpb3JpdHktY2xyLTIpJ1xuICAgICAgICB9XG4gICAgfSlcbn0iLCJleHBvcnQgY29uc3QgZGF0ZUNvbnZlcnRlciA9IChvYmopID0+IHtcbiAgICBjb25zdCBkYXRlID0gb2JqLmR1ZTtcbiAgICBpZiAoZGF0ZSA9PSAnJykge1xuICAgICAgICByZXR1cm4gZGF0ZVxuICAgIH1cbiAgICBjb25zdCBkYXRlQXJyID0gZGF0ZS5zcGxpdCgnLScpXG4gICAgY29uc3QgeWVhciA9IGRhdGVBcnJbMF1cbiAgICBjb25zdCBtb250aCA9IGRhdGVBcnJbMV1cbiAgICBjb25zdCBkYXkgPSBkYXRlQXJyWzJdXG4gICAgY29uc3QgbmV3RGF0ZSA9IGAke2RheX0vJHttb250aH1gXG4gICAgcmV0dXJuIG5ld0RhdGU7XG59IiwiZXhwb3J0IGNvbnN0IGZvcm1EYXRhID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiU3RhdHVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRvZG8gc3RhdHVzIGNhbiBiZSBjaGFuZ2VkIHRvIGNvbXBsZXRlZCBvciBkaXNjYXJkZWQgYnkgcHJlc3NpbmcgdGhlIGJ1dHRvbnMgYmVsb3cuIFRoZSBwZW5jaWwgaWNvbiBlZGl0cyB0aGUgcHJlIGV4aXNpdGluZyBpbmZvLiBcIixcbiAgICAgICAgZHVlOiBcIjIwMjItMDktMjhcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiTG93XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUHJpb3JpdHkhXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkVhY2ggVG9kbyBoYXZlIDMgbGV2ZWxzIG9mIHByaW9yaXR5LiBZb3UgY2FuIHNldCBpdCB3aGVuIHlvdSBhZGQgbmV3IHRvZG9zIG9yIGVkaXQgcHJlIGV4aXN0aW5nIG9uZXMuIFRvZG9zIHdpdGggZGlmZmVyZW50IHByaW9yaXRpZXMgbG9vayBkaWZmZXJlbnQuXCIsXG4gICAgICAgIGR1ZTogXCIyMDIyLTA5LTI4XCIsXG4gICAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkR1ZSBEYXRlIVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJZb3UgY2FuIGFkZCBhIHRvZG8gZGF0ZSAgaWYgeW91IHdhbnQuIEl0IGNhbiBiZSBkb25lIHdoZW4gYWRkaW5nIGEgbmV3IHRvZG8gb3IgZWRpdGluZyBwcmUgZXhpc2l0aW5nIG9uZXMuXCIsXG4gICAgICAgIGR1ZTogXCIyMDIyLTA5LTI4XCIsXG4gICAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIlxuICAgIH0sXG5dO1xuIiwiaW1wb3J0IHsgZGF0ZUNvbnZlcnRlciB9IGZyb20gXCIuL2RhdGVDb252ZXJ0ZXIuanNcIjtcbmltcG9ydCB7IHRvZG9DYXJkQ29sb3IgfSBmcm9tIFwiLi9jb2xvci5qc1wiO1xuaW1wb3J0IHsgZm9ybURhdGEgfSBmcm9tIFwiLi9mb3JtRGF0YS5qc1wiO1xuXG5leHBvcnQgY29uc3QgYWRkVG9Eb3RvRE9NID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWdyaWRcIilcbiAgICBsZXQgY2hpbGQgPSB0b2RvR3JpZC5sYXN0RWxlbWVudENoaWxkO1xuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICB0b2RvR3JpZC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIGNoaWxkID0gdG9kb0dyaWQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG4gICAgZm9ybURhdGEuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICBjb25zdCB0b2RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgndG9kby1jYXJkJylcbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSBlbGUudGl0bGVcbiAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IGVsZS5kZXNjcmlwdGlvblxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eSAke2VsZS5wcmlvcml0eX1gXG4gICAgICAgIGR1ZS50ZXh0Q29udGVudCA9IGRhdGVDb252ZXJ0ZXIoZWxlKTtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChkdWUpXG4gICAgICAgIHRvZG9DYXJkLmFwcGVuZENoaWxkKGgyKVxuICAgICAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChkZXNjKVxuICAgICAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChpbmZvKVxuICAgICAgICB0b2RvR3JpZC5hcHBlbmRDaGlsZCh0b2RvQ2FyZClcbiAgICB9KTtcbiAgICB0b2RvQ2FyZENvbG9yKCk7XG59XG5cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJylcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBVUkxTZWFyY2hQYXJhbXMobmV3IEZvcm1EYXRhKGZvcm0pLmVudHJpZXMoKSkpO1xuICAgIGZvcm1EYXRhLnB1c2goZGF0YSk7XG4gICAgYWRkVG9Eb3RvRE9NKCk7XG4gICAgbW9kYWwuY2xvc2UoKTtcbn0pXG5cbmNvbnN0IGNhbmNlbFRvRG8gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKVxuY2FuY2VsVG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1vZGFsLmNsb3NlKCk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==