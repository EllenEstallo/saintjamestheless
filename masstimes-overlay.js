function closeOverlay() {
  document.getElementById("masstimes").style.display = "none";
}

function openOverlay() {
  document.getElementById("masstimes").style.display = "flex";
}

document
  .querySelector(".masstimes-and-directions-link a")
  .addEventListener("click", openOverlay);
