
import {
  saludar,
  saludarNombre
} from "./salulador.js";


const form = document.querySelector("#saludar-form");
const inputNombre = document.querySelector("#nombre-input");
const saludardiv = document.querySelector("#saludar-div");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const nombre = inputNombre.value; 
  saludardiv.innerHTML = "<p>" + saludarNombre(nombre) + "</p>";
});

saludardiv.innerHTML = "<p>" + saludar() + "</p>";