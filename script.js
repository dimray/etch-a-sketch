const container = document.querySelector(".container");

const grid = document.querySelector("#squares");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    setGrid(+ grid.value);
    console.log(grid.value);
})

gridValue = + grid.value;


function setGrid(gridValue) {


    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    for (let i = 0; i < (gridValue * gridValue); i++) {

        const box = document.createElement("div");
        box.classList.add("box");
        box.style.height = 720 / gridValue - 2 + "px";
        box.style.width = 720 / gridValue - 2 + "px";
        box.style.border = "1px solid black";
        box.style.margin = "0";
        box.style.padding = "0";
        container.appendChild(box);
    }

    const boxes = document.querySelectorAll(".box");

    boxes.forEach(function (box) {
        box.addEventListener("mouseover", function () {
            box.classList.add("pink");
        });
    });

}











