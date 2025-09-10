import {
  saludar,
  saludarNombre,
  saludarPorHora,
  SaludarPorGenEdad
} from "./salulador.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#saludador-form");
  const inputNombre = document.querySelector("#nombre-input");
  const inputEdad = document.querySelector("#edad-input");
  const selectGenero = document.querySelector("#genero-select");
  const saludardiv = document.querySelector("#saludar-div");

  // Mostrar saludo inicial al cargar la página
  saludardiv.innerHTML = `
    <p>${saludar()}</p>
    <p>${saludarPorHora()}</p>
  `;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = inputNombre.value.trim();
    const edad = Number.parseInt(inputEdad.value);
    const genero = selectGenero.value;

    // Validar que se ingrese un nombre
    if (!nombre) {
      alert("Por favor, ingrese su nombre");
      return;
    }

    // Validar que se ingrese una edad válida
    if (isNaN(edad) || edad < 0) {
      alert("Por favor, ingrese una edad válida");
      return;
    }

    // Limpiar el div y mostrar todos los saludos
    saludardiv.innerHTML = `
      <p>${saludar()}</p>
      <p>${saludarPorHora()}</p>
      <p>${saludarNombre(nombre)}</p> 
      <p>${SaludarPorGenEdad(genero, edad)}${nombre}</p>
    `;
  });
});