const iconClasses = ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"];

const iconContainer = document.querySelector(".review_icons_container");
iconClasses.forEach((iconClass) => {
  const iconElement = document.createElement("i");
  iconElement.classList.add("fa", iconClass);
  iconElement.setAttribute("aria-hidden", "true");
  iconContainer.appendChild(iconElement);
});
