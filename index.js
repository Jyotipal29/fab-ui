const modal = document.getElementById("modal");
const showModel = document.getElementById("op-mod");
const hideModel = document.getElementById("cl-mod");

showModel.addEventListener("click", () => {
  modal.classList.remove("hide");
});
hideModel.addEventListener("click", () => {
  modal.classList.add("hide");
});
