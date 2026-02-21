import React, { useEffect } from 'react';
import Home from './pages/Home';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 0,
    });

  }, []);

  return (
    <div className="overflow-x-hidden">
      <Home />
    </div>
  );
};

export default App;