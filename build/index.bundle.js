/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const listsContainer = document.querySelector('#tasks');\nconst newListForm = document.querySelector('[data-new-list-form]');\nconst newListInput = document.querySelector('[data-new-list-input]');\n\nconst lists = [];\n\nfunction createList(name) {\n  return {\n    id: Date.now().toString(), name, tasks: [],\n  };\n}\n\nfunction clearElement(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\nfunction render() {\n  clearElement(listsContainer);\n  lists.forEach((list) => {\n    const listElement = document.createElement('li');\n    listElement.dataset.listId = list.id;\n    listElement.classList.add('list-name');\n    listElement.innerText = list.name;\n    listsContainer.appendChild(listElement);\n  });\n}\n\nnewListForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const listName = newListInput.value;\n  if (listName == null || listName === '') return;\n  const list = createList(listName);\n  newListInput.value = null;\n  lists.push(list);\n  render();\n});\n\nrender();\n\n//         document.querySelector('#tasks').innerHTML += `\n//         <ul class=\"task\">\n//         <li id=\"taskname\">\n//         ${document.querySelector('#newtask input').value}\n//         </li>\n//         <button class='delete'><i class=\"fa-light fa-ellipsis-vertical\"></i></button>\n//         </ul>\n//         `;\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);