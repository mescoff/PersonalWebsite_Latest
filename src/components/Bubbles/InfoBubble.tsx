import { pink } from "@material-ui/core/colors";

const styles = {
  width: "30vw",
  height: "30vh",
  boxShadow: "0em 0em 0.5em white",
  borderRadius: "1em",
  borderColor: "pink",
}


// TODO: gradient borders: https://css-tricks.com/gradient-borders-in-css/ in InfoBubble.css

const InfoBubble: React.FC = () => {


  return (
    <div style={styles}>
      YES
    </div>
  )
}


export default InfoBubble;