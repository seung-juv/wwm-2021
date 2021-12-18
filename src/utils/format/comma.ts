export function removeDot(str: string): string {
  return str.replace(/(^0)(?=[^.])/, "");
}

export function replComma(str: string): string {
  return removeDot(str.replace(/(^[\d,]+\.(?:\d*[^0])?)(0*)$/, "$1").replace(/\.$/, ""));
}

export function addComma(str: string): string {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const formatComma = (number: number): string => {
  if (!number) {
    return "0";
  }
  const numbers = number.toString().split(".");
  numbers[0] = addComma(numbers[0]);

  if (typeof number === "number") {
    return number.toLocaleString();
  }
  if (typeof numbers[1] === "string") return replComma([numbers[0], numbers[1]].join("."));
  return replComma(numbers[0]);
};

export default formatComma;
