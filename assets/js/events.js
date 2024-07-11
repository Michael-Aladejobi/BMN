// ...
let next = document.querySelector(".new-next");
let prev = document.querySelector(".new-prev");

next.addEventListener("click", function () {
    let items = document.querySelectorAll(".new-item");
    document.querySelector(".new-slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
    let items = document.querySelectorAll(".new-item");
    document.querySelector(".new-slide").prepend(items[items.length - 1]);
});
