import {
  saludar,
  saludarNombre,
  saludarPorHora
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

describe("Funciones de Saludador", () => {
  
  describe("saludarPorHora", () => {
    it("deberia saludar con 'Buenos dias' en la mañana (antes de las 12)", () => {
      // Mock de la hora para que sea 9 AM
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(9);
      expect(saludarPorHora()).toEqual("Buenos dias");
      Date.prototype.getHours.mockRestore();
    });

    it("deberia saludar con 'Buenos dias' exactamente a las 0 horas", () => {
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(0);
      expect(saludarPorHora()).toEqual("Buenos dias");
      Date.prototype.getHours.mockRestore();
    });

    it("deberia saludar con 'Buenos dias' exactamente a las 11:59", () => {
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(11);
      expect(saludarPorHora()).toEqual("Buenos dias");
      Date.prototype.getHours.mockRestore();
    });

    it("deberia saludar con 'Buenas tardes' en la tarde (12-17)", () => {
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(15);
      expect(saludarPorHora()).toEqual("Buenas tardes");
      Date.prototype.getHours.mockRestore();
    });

    it("deberia saludar con 'Buenas tardes' exactamente a las 12", () => {
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(12);
      expect(saludarPorHora()).toEqual("Buenas tardes");
      Date.prototype.getHours.mockRestore();
    });

    it("deberia saludar con 'Buenas tardes' exactamente a las 17", () => {
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(17);
      expect(saludarPorHora()).toEqual("Buenas tardes");
      Date.prototype.getHours.mockRestore();
    });

    it("deberia saludar con 'Buenas noches' en la noche (18 en adelante)", () => {
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(20);
      expect(saludarPorHora()).toEqual("Buenas noches");
      Date.prototype.getHours.mockRestore();
    });

    it("deberia saludar con 'Buenas noches' exactamente a las 18", () => {
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(18);
      expect(saludarPorHora()).toEqual("Buenas noches");
      Date.prototype.getHours.mockRestore();
    });

    it("deberia saludar con 'Buenas noches' a las 23", () => {
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(23);
      expect(saludarPorHora()).toEqual("Buenas noches");
      Date.prototype.getHours.mockRestore();
    });
  });

});