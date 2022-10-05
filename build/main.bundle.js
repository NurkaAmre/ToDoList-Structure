/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpacksetup"] = self["webpackChunkwebpacksetup"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class newTask {\r\n    constructor(description, completed = false, index) {\r\n      this.description = description;\r\n      this.completed = completed;\r\n      this.index = index;\r\n    }\r\n  }\r\n\r\nconst addNew = document.querySelector('#newtask');\r\nconst addBtn = document.querySelector('#push');\r\nconst taskList = document.querySelector('#tasks');\r\nconst clearComplited = document.querySelector('#removed');\r\n\r\n// Clear flieds\r\nconst formClear = (task) => {\r\n    task.value = '';\r\n  };\r\n\r\n// Adding validation for empty input field\r\naddNew.onclick = function () {\r\n    if(document.querySelector('#newtask input').value.length == 0){\r\n        alert('Please enter a task');\r\n    }\r\n    // Adding a new task\r\n    else {\r\n        document.querySelector('#tasks').innerHTML += `\r\n        <ul class=\"task\">\r\n        <li id=\"taskname\">\r\n        ${document.querySelector('#newtask input').value}\r\n        </li>\r\n        <button clas='delete'><i class=\"fa-light fa-ellipsis-vertical\"></i></button>\r\n        </ul>\r\n        `;\r\n    }\r\n\r\n    document.querySelector('#newtask input')\r\nvalue = '';\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpacksetup/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);