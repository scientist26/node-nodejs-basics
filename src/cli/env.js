const parseEnv = () => {
  const RSSvariables = Object.entries(process.env).filter((variable) => variable[0].includes('RSS'));
  RSSvariables.forEach((variable) => console.log(variable[1]));
};

parseEnv();
