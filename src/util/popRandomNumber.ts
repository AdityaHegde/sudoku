export function popRandomNumber(array: Array<number>): number {
  const idx = Math.round(Math.random() * (array.length - 1));
  return array.splice(idx, 1)[0];
}
