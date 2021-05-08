import { createStyles, Fade, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { logInfo } from './utils/logging';
import { WelcomeMessage } from './WelcomeMessage';

interface MessagesToDisplayOld {
  FirstMessage: { shouldShow: boolean, message: string },
  SecondMessage: { shouldShow: boolean, message: string },
  // ThirdMessage: { shouldShow: boolean, message: string },
}

const defaultMessagesToDisplayState: MessagesToDisplayOld = {
  FirstMessage: { shouldShow: true, message: "Hi There !" },
  SecondMessage: { shouldShow: false, message: "Let's see what we have in store" },
  // ThirdMessage: { shouldShow: false, message: string }
}

interface MessagesToDisplay {
  [id: string]: string;
}

// const [msgToDisplay, setMsgToDisplay] = useState<MessagesToDisplay>(defaultMessagesToDisplayState);
// const messagesToDisplay: MessagesToDisplay = {
//   1: "Hi There !",
//   2: "Let's see what we have in store"
// }
export const WelcomePageLoader: React.FC = () => {

  const logger = "WelcomePageLoader";
  const messagesToDisplay: string[] = ["Hi there !", "Let's see what we have in store ..."]
  const timeOut = 4000;

  const [msgToDisplay, setMsgToDisplay] = useState<string>("");
  const [doneWithIntroMsg, setDoneWithIntroMsg] = useState<boolean>(false);

  useEffect(() => {
    showMessages();
  }, []) // Run Once, when component mounts for first time

  const showMessages = () => {
    let i = 0;
    setMsgToDisplay(messagesToDisplay[i]);
    i++;
    // Using setInterval to properly loop through intro messages 
    let interval = setInterval(() => {
      logInfo(logger, `Displaying ${messagesToDisplay[i]} at Index ${i}`)
      setMsgToDisplay(messagesToDisplay[i])
      i++;
      if (i === messagesToDisplay.length) {
        clearInterval(interval);
        // setDoneWithIntroMsg(true);
      }
    }, timeOut);
    logInfo(logger, "Interval is Finished");
  }

  logInfo(logger, "Rendering");
  return (
    <div className="Welcome-Msg-Container">
      {doneWithIntroMsg ?
        <h2>Welcome !</h2>
        :
        <WelcomeMessage text={msgToDisplay} masterTimeOut={timeOut} />
      }
    </div>
  )

}