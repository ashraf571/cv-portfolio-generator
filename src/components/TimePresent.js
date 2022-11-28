import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import StartTime from './StartTime';
import EndTime from './EndTime';
import TextTimePresent from './TextTimePresent';
import { useState } from "react";
import { Box } from '@mui/material';

const TimePresent = () => {

  const [isChecked, setIsChecked] = useState(false);

  return (

    <Box  flexWrap = {"wrap"} >
      <Box flexWrap = {"wrap"}
      sx = {{ justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , display : {Bigmobile : 'flex'}}}>
      <StartTime />
        {isChecked ? <TextTimePresent /> : <EndTime />}
        
      <Box sx = {{ ml : {smallmobile : 0 , mobile : 0 , Bigmobile : 1 , tablet : 2} , mt : {mobile : 0 , Bigmobile : 1}}}>
      <FormGroup  >
      <FormControlLabel control = {<Checkbox checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} undefaultChecked />} label="Present" />
      </FormGroup>
      </Box>
      </Box>
    
    </Box>
    
    );
}

export default TimePresent