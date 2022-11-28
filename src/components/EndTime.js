import * as React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'purple',
    },
    '&:hover fieldset': {
      borderColor: 'blue',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

export default function EndTime() {
  return (
    <Box flexWrap = {"wrap"}>
      
      <CssTextField sx = {{ width : {smallmobile : 200 , mobile : 258 , Bigmobile : 160 , tablet : 150} , ml : {tablet : 1.5} , mt : {smallmobile : 1.5 , Bigmobile : 0}}} id="date" label="End-Year" type="date" defaultValue="yyyy-mm-dd"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
}