let date = new Date();

const date1 = date.toLocaleString();
const date2 = date.toISOString();
const date3 = date.toLocaleDateString();


const month = date.getMonth() +1;

console.log(date1, date2, date3);

console.log(month);



const website = document.querySelector("html");


website.addEventListener("click", () => {
     setInterval(window.location.href = "https://www.sssvt.cz", 10000);
})

website.addEventListener("keydown", () => {
    window.location.href = "https://www.sssvt.cz/";
})


website.addEventListener("scroll", () => {
    window.location.href = "https://www.sssvt.cz/"
})

window.addEventListener("mousemove", () => {
    setInterval(window.location.href = "https://www.sssvt.cz/", 10000);
})
