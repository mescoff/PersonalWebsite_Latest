import { Box, Typography } from '@material-ui/core';
import React from 'react';






export const WelcomeMessage : React.FC<{text:string}> = (props) => {
  return (
    // <Box display="flex" justifyContent="center" alignItems="center">
      <span className="Welcome-Msg">
        {props.text}
      </span>
    // </Box>
  )
}

