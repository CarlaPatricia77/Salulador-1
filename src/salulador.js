function saludar() {
  return "Hola Ok"
}
function saludarNombre(nombre) {
  return "Hola " + nombre
}
function saludarPorHora() {
  const hora = new Date().getHours();
  let res = "";
  if (hora < 12) {
    res = "Buenos dias"
  } else if (hora < 18) {
    res = "Buenas tardes"
  } else {
    res = "Buenas noches"
  }
  return res
}
function SaludarPorGenEdad(genero, edad) {
  if (genero === "femenino") {
    if (edad > 30)
      return "Señora:  "
    else
      return "Señorita "
  } else {
    if (edad > 30)
      return "Señor "
    else
      return "Caballero "
  }
}
export {
  saludar,
  saludarNombre,
  saludarPorHora,
  SaludarPorGenEdad
};