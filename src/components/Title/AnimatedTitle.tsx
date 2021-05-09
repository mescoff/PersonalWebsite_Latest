import { useEffect, useState } from "react";
import { logInfo } from "../../utils/logging";
import CustomTitle from './CustomTitle';

const styles = {
  alignSelf: "start",
  fontSize: "4.5em",
  letterSpacing: ".1rem",
  margin: 0
};

const AnimatedTitle: React.FC = () => {
  const logger = "AnimatedTitle";
  const timeOut = 350;
  const [title, setTitle] = useState<string>("");

  const baseTitle = "Manon Escoffier";
  useEffect(() =>
    writeTitle()
    , []);

  const writeTitle = () => {
    let completedTitle = "";
    const toCharArray = baseTitle.split('');
    let i = 0;
    // let completedTitle = toCharArray[i];
    // setTitle(completedTitle); // Show initial message.
    // i++;
    // Using setInterval to properly loop through intro messages. Once we've shown them all, we show our main view
    let interval = setInterval(() => {
      if (i < toCharArray.length) {
        logInfo(logger, `Displaying ${toCharArray[i]} at Index ${i}`)
        completedTitle += toCharArray[i] // copying to new string
        logInfo(logger, `Title is now ${title}`);
        setTitle(completedTitle);
      }
      // else if (i === messagesToDisplay.length) {
      //   setDoneWithIntroMsg(true);
      // }
      else {
        clearInterval(interval);
      }
      i++;
    }, timeOut);
  }

  return (
    <h1 style={styles}>
      {title}
    </h1>
    // <CustomTitle text={title} masterTimeOut={timeOut} />
  )
}

export default AnimatedTitle;