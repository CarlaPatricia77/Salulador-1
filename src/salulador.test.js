import saludar from "./salulador.js";

describe("Saludar", () => {
  it("deberia saludar con 'Hola Ok' ", () => {
    expect(saludar()).toEqual("Hola Ok");
  });
});