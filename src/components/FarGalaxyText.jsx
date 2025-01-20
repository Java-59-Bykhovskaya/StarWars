import { baseUrl } from '../utils/constants.js';
import { useEffect, useState } from 'react';

const FarGalaxyText = () => {
  const [openingCrawl, setOpeningCrawl] = useState('');
  const [spinnerClass, setSpinnerClass] = useState('spinner-border');

  const getRandomSeason = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const getOpeningCrawl = () => {
    const randomSeason = getRandomSeason(1, 6);
    const url = `${baseUrl}${randomSeason}`;
    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setOpeningCrawl(data.opening_crawl);
        setSpinnerClass('');
      })
      .catch((error) => console.error('Error:', error));
  };

  useEffect(() => {
    getOpeningCrawl();
  }, []);

  return <p className={`farGalaxy ${spinnerClass}`}>{openingCrawl}</p>;
};

export default FarGalaxyText;
