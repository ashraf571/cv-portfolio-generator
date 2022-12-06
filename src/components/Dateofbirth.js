import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Constants } from '../helper/Constants';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: Constants.primaryColor,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: Constants.primaryColor,
    },
    '&:hover fieldset': {
      borderColor: "green",
    },
    '&.Mui-focused fieldset': {
      borderColor: Constants.primaryColor,
    },
  },
});

export default function NativePickers() {
  return (
    <Stack component="form" noValidate spacing={3}>
      <CssTextField id="date" label="Birthday" type="date" defaultValue="yyyy-MM-dd"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
}