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

export default function StartTime() {
  return (
    <Box>
      <CssTextField sx = {{ width : {smallmobile : 200 , mobile : 258 , Bigmobile : 160 , tablet : 150} }} id="date" label="Start-Year" type="date" defaultValue="yyyy-mm-dd"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
}