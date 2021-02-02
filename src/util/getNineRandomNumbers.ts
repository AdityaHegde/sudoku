import { popRandomNumber } from "./popRandomNumber";

export function getNineRandomNumbers() {
  const nineNumbers = new Array<number>();
  for (let i = 0; i < 9; i++) {
    nineNumbers.push(i + 1);
  }

  const randomNumbers = new Array<number>();

  for (let i = 0; i < 9; i++) {
    randomNumbers.push(popRandomNumber(nineNumbers));
  }

  return randomNumbers;
}
