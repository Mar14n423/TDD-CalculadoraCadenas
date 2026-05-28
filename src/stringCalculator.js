function add(input) {
  if (input === "") {
    return 0;
  }

  let numbersSection = input;
  let delimiters = [",", "-"];
  const customDelimiterMatch = input.match(/^\/\/(.+)\s(.*)$/);
  
  if (customDelimiterMatch) {
        numbersSection = customDelimiterMatch[2];
        const delimiterSection = customDelimiterMatch[1];

        const foundDelimiters = [...delimiterSection.matchAll(/\[(.*?)\]/g)].map(
            (match) => match[1]
        );

        delimiters.push(...foundDelimiters);
   }

  const escapedDelimiters = delimiters.map((delimiter) =>
  delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
);

const regex = new RegExp(escapedDelimiters.join("|"));

  return numbersSection
    .split(regex)
    .map((numberText) => Number(numberText))
    .filter((number) => number <= 1000)
    .reduce((sum, number) => sum + number, 0);
}

module.exports = { add };