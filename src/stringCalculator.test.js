const { add } = require("./stringCalculator");

describe("Calculadora de cadenas", () => {
  test("cadena vacía retorna 0", () => {
    expect(add("")).toBe(0);
  });
});
test("cadena con un número retorna ese número", () => {
  expect(add("2")).toBe(2);
});
test("cadena con dos números separados por coma retorna la suma", () => {
  expect(add("1,2")).toBe(3);
});
test("cadena con varios números separados por coma retorna la suma", () => {
  expect(add("1,2,3")).toBe(6);
});
test("cadena con muchos números retorna la suma total", () => {
  expect(add("1,2,4,8")).toBe(15);
});
test("cadena con coma y guion retorna la suma", () => {
  expect(add("1-2,3")).toBe(6);
});