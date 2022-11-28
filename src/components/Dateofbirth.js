import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

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