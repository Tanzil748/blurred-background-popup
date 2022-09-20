const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popEl = document.querySelector(".pop-container");
const closeEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", function () {
  containerEl.classList.add("active");
  popEl.classList.remove("active");
});

closeEl.addEventListener("click", function () {
  containerEl.classList.remove("active");
  popEl.classList.add("active");
});
