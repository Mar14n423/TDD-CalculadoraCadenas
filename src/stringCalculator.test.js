const { add } = require("./stringCalculator");

describe("Calculadora de cadenas", () => {
  test("cadena vacía retorna 0", () => {
    expect(add("")).toBe(0);
  });
});