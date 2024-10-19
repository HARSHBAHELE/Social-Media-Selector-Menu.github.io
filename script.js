let menu = document.querySelector(".menu");
let para = document.querySelector("#para");
let container = document.querySelector(".container");
let li = document.querySelectorAll(".container li");

menu.addEventListener("click",()=> {
    container.classList.toggle("hide");
    menu.classList.toggle("rotate");
})
li.forEach((lis) => {
    lis.addEventListener("click",()=> {
        para.innerHTML = lis.innerHTML;
        container.classList.add("hide");
        menu.classList.add("rotate")
    });
});