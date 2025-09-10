import {
  saludar,
  saludarNombre
} from "./salulador.js";

describe("Funciones de Saludador", () => {
  it("deberia saludar con 'Hola Ok' ", () => {
    expect(saludar()).toEqual("Hola Ok");
  });
  const nombre = "Carla"
  it("deberia saludar con 'Hola Carla'", () => {
    expect(saludarNombre(nombre)).toEqual("Hola Carla");
  });
});