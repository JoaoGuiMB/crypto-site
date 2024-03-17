export const formatBalance = (rawBalance: string) => {
  return (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
};
