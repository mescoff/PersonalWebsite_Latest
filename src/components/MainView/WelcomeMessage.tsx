import { Fade } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { logInfo } from '../../utils/logging';

const WelcomeMessage: React.FC<{ text: string, masterTimeOut: number }> = (props) => {
  const logger = "WelcomeMessage";
  const fadingTime = props.masterTimeOut / 3;
  const showingTime = props.masterTimeOut / 2;
  // INFO: masterTimeOut is the time during which the WelcomeMessage will be shown (aka: allocated time). It will be divided as such:  
  // (1) FadeIn time will be 1/4 of allocated time since it happens twice (in and out). (2) And showing time will be 1/2 time, so it shows long enough to view correctly
  const [msgFadeIn, setMsgFadeIn] = useState<boolean>(false);



  useEffect(() => {
    if (props.text.length > 0) {
      logInfo(logger, `Welcome Message Changed to ${props.text}. Changing Fade in to true.`);
      // When message is changed
      setMsgFadeIn(true); // show message
      setTimeout(() => setMsgFadeIn(false), showingTime);
    }
  }, [props.text])

  return (
    <Fade in={msgFadeIn} timeout={fadingTime}>
      <h2 className="Welcome-Msg">
        {props.text}
      </h2>
    </Fade>
  )
}

export default WelcomeMessage;
