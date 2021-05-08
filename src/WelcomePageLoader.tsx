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

// Dictionary with position  1(n=message), 2(message) and while keeping a sleep just transition from one to the other (and to the next etc)
// everytime set the current message

interface MessagesToDisplay {
  [id: string]: string;
}




export const WelcomePageLoader: React.FC = () => {
  // const [msgToDisplay, setMsgToDisplay] = useState<MessagesToDisplay>(defaultMessagesToDisplayState);
  // const messagesToDisplay: MessagesToDisplay = {
  //   1: "Hi There !",
  //   2: "Let's see what we have in store"
  // }
  const logger = "WelcomePageLoader";
  const messagesToDisplay: string[] = ["Hi There !", "Let's see what we have in store...", "Still Loading"]


  const [msgToDisplay, setMsgToDisplay] = useState<string>("");
  // const [msgStyle, setMsgStyle] = useState<any>()
  const [msgFadeIn, setMsgFadeIn] = useState<boolean>(false);

  const useStyles = makeStyles(() =>
    createStyles({
      message: {
        // transition: "visibility 0s, opacity 0.5s linear"
        opacity: 0.5
      }
    }));

  // const styles = {
  //   Message: {
  //     transition: "visibility 0s, opacity 0.5s linear"
  //   }
  // }

  const showMessage = async (index: number) => {
    // return new Promise(async (resolve) => {
    // setMsgFadeIn(false)
    // setTimeout(() => { setMsgFadeIn(!msgFadeIn) }, 1000);

    // setTimeout(() => { setMsgToDisplay(messagesToDisplay[index]); }, 1000);
    logInfo(logger, `Switching to message ${messagesToDisplay[index]}`);
    // setTimeout(() => { setMsgFadeIn(!msgFadeIn) }, 1000);
    // setMsgFadeIn(true);

    setMsgToDisplay(messagesToDisplay[index]);
    setMsgFadeIn(true);
    await sleep(3000);
    setMsgFadeIn(false);
    // setTimeout(() => { setMsgFadeIn(false) }, 3000);
    // })
  }

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    // SHOW FIRST MESSAGE
    // setMsgToDisplay(messagesToDisplay[0]);
    // setMsgFadeIn(true);
    // setTimeout(() => { setMsgFadeIn(false) }, 3000);
    // setTimeout(() => {
    //   setMsgToDisplay(messagesToDisplay[1]);
    //   setMsgFadeIn(true);
    //   setTimeout(() => { setMsgFadeIn(false) }, 3000);
    // }, 5000);

    // showMessage(0);
    // Show second msg after 5 seconds
    // for (let i = 1; i < Object.keys(messagesToDisplay).length; i++) {
    //   setTimeout(() => {
    //     showMessage(i);
    //   }, 5000)
    // }
    // await showMessage(i);
    setMsgToDisplay(messagesToDisplay[0])
    // logInfo(logger, `SettingMessageFor index ${i}`)
    setMsgFadeIn(true);
    // await sleep(1000)
    setTimeout(() => {
      setMsgFadeIn(false)
      logInfo(logger, "SetFadingFalse");
      setMsgToDisplay(messagesToDisplay[1])
      logInfo(logger, "SetMessage");
      setMsgFadeIn(true);
      setTimeout(() => {
        setMsgFadeIn(false)
      }, 2000)
    }, 2000);
    // setMsgFadeIn(false);
    // showMessage(i);
    // sleep(4000);


  }, [])

  logInfo(logger, "Rendering");
  return (
    <Fade in={msgFadeIn} timeout={1000}>
      <Typography variant="h2" className="Welcome-Msg-Container">
        <WelcomeMessage text={msgToDisplay} />
      </Typography>
    </Fade>

  )

}