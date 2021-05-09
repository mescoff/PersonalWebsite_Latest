import React, { useEffect, useState } from 'react';
import { logInfo } from '../../utils/logging';
import MainView from './MainView';
import WelcomeMessage from './WelcomeMessage';

// interface MessagesToDisplay {
//   [id: string]: string;
// }

// const messagesToDisplay: MessagesToDisplay = {
//   1: "Hi There !",
//   2: "Let's see what we have in store"
// }

export const MainPageLoader: React.FC = () => {
  const logger = "WelcomePageLoader";
  const messagesToDisplay: string[] = ["Hi there !", "Let's see what we have in store ..."]
  const timeOut = 3000;

  const [msgToDisplay, setMsgToDisplay] = useState<string>("");
  const [doneWithIntroMsg, setDoneWithIntroMsg] = useState<boolean>(false);

  useEffect(() => {
    showMessages();
  }, []) // Run Once, when component mounts for first time

  const showMessages = () => {
    let i = 0;
    setMsgToDisplay(messagesToDisplay[i]); // Show initial message.
    i++;
    // Using setInterval to properly loop through intro messages. Once we've shown them all, we show our main view
    let interval = setInterval(() => {
      if (i < messagesToDisplay.length) {
        logInfo(logger, `Displaying ${messagesToDisplay[i]} at Index ${i}`)
        setMsgToDisplay(messagesToDisplay[i])
      }
      else if (i === messagesToDisplay.length) {
        setDoneWithIntroMsg(true);
      }
      else {
        clearInterval(interval);
      }
      i++;
    }, timeOut);
  }

  return (
    <>
      {doneWithIntroMsg ?
        <div className="Main-View">
          <MainView />
        </div>
        : <div className="Welcome-Msg-Container">
          <WelcomeMessage text={msgToDisplay} masterTimeOut={timeOut} />
        </div>
      }
    </>

  )

}