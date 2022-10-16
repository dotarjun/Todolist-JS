"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["color"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/color.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29sb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRvZG9DYXJkQ29sb3IgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1jYXJkJyk7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBwcmlvcml0eUFyciA9IGNhcmQuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50LnNwbGl0KCcgJylcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eUFycltwcmlvcml0eUFyci5sZW5ndGggLSAxXVxuICAgICAgICBpZiAocHJpb3JpdHkgPT09ICdIaWdoJykge1xuICAgICAgICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tcHJpb3JpdHktY2xyLTEpJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gJ01lZGl1bScpIHtcbiAgICAgICAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLXByaW9yaXR5LWNsci0yKSdcbiAgICAgICAgfVxuICAgIH0pXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9