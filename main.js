const form = document.querySelector('.form');
const input = document.querySelector('.input');
const list = document.querySelector('.list');

const card = document.querySelector('.card');
const x = document.querySelector('.x');

form.addEventListener("submit", (e) => {
   e.preventDefault();
   const value = input.value;
   const elem = document.createElement('div');
    elem.textContent = value;
    elem.addEventListener("click", () => {
        if (elem.style.textDecoration === "line-through") {
            elem.style.textDecoration = "none";
        } else {
            elem.style.textDecoration = "line-through";
        }
    })
    elem.className = "element"
    list.append(elem)
    input.value = ""
})

x.addEventListener("click", () => {
    card.classList.toggle("des")
})