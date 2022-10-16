"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["dateConverter"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dateConverter.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZUNvbnZlcnRlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJLEdBQUcsTUFBTTtBQUNwQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGF0ZUNvbnZlcnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZGF0ZUNvbnZlcnRlciA9IChvYmopID0+IHtcbiAgICBjb25zdCBkYXRlID0gb2JqLmR1ZTtcbiAgICBpZiAoZGF0ZSA9PSAnJykge1xuICAgICAgICByZXR1cm4gZGF0ZVxuICAgIH1cbiAgICBjb25zdCBkYXRlQXJyID0gZGF0ZS5zcGxpdCgnLScpXG4gICAgY29uc3QgeWVhciA9IGRhdGVBcnJbMF1cbiAgICBjb25zdCBtb250aCA9IGRhdGVBcnJbMV1cbiAgICBjb25zdCBkYXkgPSBkYXRlQXJyWzJdXG4gICAgY29uc3QgbmV3RGF0ZSA9IGAke2RheX0vJHttb250aH1gXG4gICAgcmV0dXJuIG5ld0RhdGU7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9