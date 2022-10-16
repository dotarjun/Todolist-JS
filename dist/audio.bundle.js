"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["audio"],{

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audioSFX": () => (/* binding */ audioSFX)
/* harmony export */ });
const audioSFX = (btn, sfx) => {
    const button = document.getElementById(`${btn}`);
    button.addEventListener('click', () => {
        const sfxAudio = new Audio();
        sfxAudio.src = `./assets/audio/${sfx}.mp3`
        sfxAudio.play();
    })
    console.log('sound!!');
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/audio.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQLDhDQUE4QyxJQUFJO0FBQ2xEO0FBQ0E7QUFDQSx5Q0FBeUMsSUFBSTtBQUM3QztBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYXVkaW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGF1ZGlvU0ZYID0gKGJ0biwgc2Z4KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YnRufWApO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2Z4QXVkaW8gPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgc2Z4QXVkaW8uc3JjID0gYC4vYXNzZXRzL2F1ZGlvLyR7c2Z4fS5tcDNgXG4gICAgICAgIHNmeEF1ZGlvLnBsYXkoKTtcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKCdzb3VuZCEhJyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9