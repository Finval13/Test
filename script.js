"use strict";

const ul = document.querySelector("ul");

ul.addEventListener("click", function (event) {
  // Приклад, як потрібно виконати кожне завдання:
  // 0. Вивести повну інформацію про подію та вказати тип даних
  event.preventDefault();
  console.dir(event); //Object

  // 1. Вивести інформацію про тип події
  console.log(event.type);

  // 2. Вивести інформацію про цільовий об'єкт, на якому сталася подія
  console.log(event.target);

  // 3. Вивести інформацію про батьківский по відношенню до цільового об'єкт
  console.log(event.target.parentElement);

  // 4. Вивести інформацію про те, чи було натиснуто при виникненні події клавішу Ctrl
  console.log(event.ctrlKey);

  // 5. Вивести інформацію про те, чи було натиснуто при виникненні події клавішу Shift

  console.log(event.shiftKey);

  // 6. Вивести інформацію про те, чи було натиснуто при виникненні події клавішу Alt
  console.log(event.altKey);

  // 7. Вивести інформацію про координати миші відносно лівого краю браузера в момент виникнення події
  console.log(event.clientX);

  // 8. Вивести інформацію про координати миші відносно лівого краю монітора в момент виникнення події

  console.log(event.screenX);

  // 9. Вивести інформацію про те, чи призупинено стандартну поведінку браузера
  console.log(event.defaultPrevented);

  // 10. Вивести інформацію про напрямок обробки події (спливання чи захоплення)
  console.log(event.eventPhase === Event.CAPTURING_PHASE ? "Захоплення" : "Спливання");
});
