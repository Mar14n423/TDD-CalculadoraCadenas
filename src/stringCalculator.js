function add(input) {
  if (input === "") {
    return 0;
  }

  return input
    .split(/,|-/)
    .map((numberText) => Number(numberText))
    .reduce((sum, number) => sum + number, 0);
}

module.exports = { add };