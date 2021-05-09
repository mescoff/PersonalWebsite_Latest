import { Fade } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Bubbles from '../Bubbles/Bubbles';
import AnimatedTitle from '../Title/AnimatedTitle';
import './MainView.css';

const MainView: React.FC = () => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  // TODO: Add stars? https://codepen.io/saransh/pen/BKJun

  // GOOEY effect https://codepen.io/lbebber/pen/RNgBPP, https://css-tricks.com/gooey-effect/

  return (
    <div className="Global-Container">
      <AnimatedTitle />
      {/* <h2>Welcome !</h2> */}
      <Fade in={fadeIn} timeout={2000}>
        <div className="Bubbles-Container">
          <Bubbles />
        </div>
      </Fade>

    </div>
  )
}

export default MainView;






