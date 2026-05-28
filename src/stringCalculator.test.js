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
test("cadena con delimitador personalizado punto y coma retorna la suma", () => {
  expect(add("//[;] 6;7;4")).toBe(17);
});
test("cadena con delimitador personalizado y separadores mixtos retorna la suma", () => {
  expect(add("//[;] 6,3-2;1")).toBe(12);
});
test("delimitador de varios caracteres retorna la suma", () => {
  expect(add("//[***] 1***2***3")).toBe(6);
});
test("números mayores a 1000 son ignorados", () => {
  expect(add("2,1001")).toBe(2);
});