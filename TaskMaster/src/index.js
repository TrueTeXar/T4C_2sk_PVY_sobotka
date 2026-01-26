import { initialize } from './modules/quoutes.js'
import {initializeTaskListListeners} from "./modules/tasks";

initialize();

import {InitializeFormData} from "./modules/forms.js";

InitializeFormData();

initializeTaskListListeners();

/*
document.addEventListener("keydown", () => {
  const name = prompt("Jaké je vaše jméno?");
  alert(name);
});
*/