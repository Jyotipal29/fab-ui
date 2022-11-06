const modal = document.getElementById("modal");
const showModel = document.getElementById("op-mod");
const hideModel = document.getElementById("cl-mod");

const links = document.querySelectorAll(".scroll_to");

links.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

showModel.addEventListener("click", () => {
  modal.classList.remove("hide");
});
hideModel.addEventListener("click", () => {
  modal.classList.add("hide");
});
