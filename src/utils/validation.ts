const normalize = (s: string) => (s ?? "").replace(/\S|-/g, "");
const isValid7Or8Digit = (car: string) => {
  // if (!/^\d{7}$/.test(card) || !/^\d{8}$/.test(card)) return false;
  const card = normalize(car);
  const len: number = card.length;
  const weightLayers: { [len: number]: number[] } = {
    7: [29, 23, 19, 17, 13, 11],
    8: [29, 23, 19, 17, 13, 11, 9],
  };
  const weights = weightLayers[len];
  // const digits = card.split("").map(Number);
  const digits = [...card].map(Number);
  const lastDigit = digits[len - 1];

  const result = digits.reduce((sum, w, idx) => sum + w * weights[idx], 0);

  return result % 10 === lastDigit;
};
