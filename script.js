const container = document.querySelector("div.container");


const box = document.createElement("div");
box.classList = ".box";
box.style.backgroundColor = "white";
box.style.height = "70px";
box.style.width = "70px"
box.style.border = "1px solid black";
box.style.margin = "0";
box.style.padding = "0";


for (let i = 0; i < 100; i++) {
    container.appendChild(box.cloneNode(true));
}
















