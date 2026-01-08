import { initialize } from './modules/quoutes.js'

initialize();



document.addEventListener("keydown", () => {
  const name = prompt("Jaké je vaše jméno?");
  alert(name);
});
