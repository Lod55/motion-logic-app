export const parserDataCity = (data) => {
  if (!data) return null;

  return data.map((city, index) => {
    const newData = {
      id: index + 1,
      isSave: false,
      district: city.district,
      name: city.name,
      population: city.population,
      subject: city.subject,
    };

    return newData;
  });
};
