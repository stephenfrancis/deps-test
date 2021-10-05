export const shortify = (str: string) => {
  return `${str.substr(0, 2)}...${str.substr(-2)}`;
};
