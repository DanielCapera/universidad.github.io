const boton = document.querySelector("#button1");

boton.addEventListener("click", function () {
  document.querySelector(".wrapper").style.backgroundColor = "#000000";
  document.querySelector("#button1").style.display = "none";
  document.querySelector("p").style.color = "#ffffff";
});
