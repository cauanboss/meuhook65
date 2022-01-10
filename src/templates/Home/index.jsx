import { useEffect, useState } from 'react';

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(Boolean(matchMedia.matches));
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

const Home = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const small = useMediaQuery('(max-width: 979px)');
  const background = huge ? 'green' : small ? 'red' : null;

  console.log(background, huge);

  return <div style={{ fontSize: '60px', background }}>Oi</div>;
};

export default Home;
