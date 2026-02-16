const addTextInput = document.getElementById("item-text");
const submitButton = document.getElementById("add-btn");
const listBox = document.getElementById("list-box");

submitButton.addEventListener("click", () => {
    const inputContent = addTextInput.value;


    const newChildFinished = document.createElement("li");
    newChildFinished.innerText = inputContent;

    if (inputContent === "") {
        return;
    }

    listBox.appendChild(newChildFinished);

})

const upArrows = document.querySelectorAll(".up-arrow")
const downArrows = document.querySelectorAll(".down-arrow");



upArrows.forEach((btn) => {
    btn.addEventListener("click", () => {

        const li = btn.closest("li");       //najde nejbližší li element od buttonu
        const prev = li.previousElementSibling;            //předchozí sourozenec o jedna zpět

        if (prev) {
            li.parentNode.insertBefore(li, prev);               //1. parentNode - vrátí přímého rodiče elementu li (vrátí tedy ul). Musíme k němu přistupovat, protože pořadí childů smí měnit jen jeho parent
        }                                                       //2. - insertBefore - vloží element (li) před referenční element
    })
})



downArrows.forEach((btn) => {
    btn.addEventListener("click", () => {
        const li = btn.closest("li");

        const next = li.nextElementSibling;

        if (next) {
            li.parentNode.insertBefore(next, li);
        }
    })
})



let date = new Date();

date.toISOString()




