export const formatNumber = (num: number): string => {
  // console.log(num & 10);
  if (num < 10 && Number.isInteger(num)) {
    return `0${num}`;
  }

  return `${num}`;
};
