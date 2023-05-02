const textField = document.getElementById("text-field");
const sidebar = document.getElementById("sidebar");

textField.addEventListener("focus", () => {
  sidebar.appendChild(document.createElement("div"));
});

textField.addEventListener("blur", () => {
  sidebar.removeChild(sidebar.lastChild);
});
