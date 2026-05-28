function add(input) {
  if (input === "") {
    return 0;
  }

  let numbersSection = input;
  let delimiters = [",", "-"];

  const customDelimiterMatch = input.match(/^\/\/\[(.*)\]\s(.*)$/);

  if (customDelimiterMatch) {
    delimiters.push(customDelimiterMatch[1]);
    numbersSection = customDelimiterMatch[2];
  }

  const regex = new RegExp(delimiters.join("|"));

  return numbersSection
    .split(regex)
    .map((numberText) => Number(numberText))
    .reduce((sum, number) => sum + number, 0);
}

module.exports = { add };