const form = document.querySelector('.form');
const input = document.querySelector('.input');
const list = document.querySelector('.list');

const card = document.querySelector('.card');
const x = document.querySelector('.x');

form.addEventListener("submit", (e) => {
   e.preventDefault();

   const elem = document.createElement('div');

   const elem2 = document.createElement('div');
   const value = input.value;

   elem.textContent = value;
   elem2.textContent = "␡ELIMINATE";
    elem.addEventListener("click", () => {
        if (elem.style.textDecoration === "line-through") {
            elem.style.textDecoration = "none";
        } else {
            elem.style.textDecoration = "line-through";
        }
    })
    elem.className = "element"
    elem2.className = "delElem"
    list.append(elem)
    list.append(elem2)

    elem2.addEventListener("click", () => {
        elem.remove()
        elem2.remove()
    })

    input.value = ""
})



x.addEventListener("click", () => {
    card.classList.toggle("des")
})