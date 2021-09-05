export const searchByName = (data, keyword) => {
  const lowerCaseKeyword = keyword.toLowerCase();

  const seachedCities = data.filter((item) =>
    item.name.toLowerCase().includes(lowerCaseKeyword)
  );

  return seachedCities.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};
