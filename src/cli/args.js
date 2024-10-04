const parseArgs = () => {
  const pairs = process.argv.reduce((acc, arg, index) => {
    if (arg.startsWith('--')) {
      acc.push({ key: arg.slice(2), value: process.argv[index + 1] });
    }
    return acc;
  }, []);

  pairs.forEach((pair) => console.log(`${pair.key} is ${pair.value}`));
};

parseArgs();
