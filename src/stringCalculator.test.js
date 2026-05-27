const { add } = require("./stringCalculator");

describe("Calculadora de cadenas", () => {
  test("cadena vacía retorna 0", () => {
    expect(add("")).toBe(0);
  });
});
test("cadena con un número retorna ese número", () => {
  expect(add("2")).toBe(2);
});