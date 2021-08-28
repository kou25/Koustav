import data from './technologies.json';

export const getTechnologies = () => {
  return data;
};

export default (req, res) => {
  const technologies = getTechnologies();
  res.json(technologies);
};
