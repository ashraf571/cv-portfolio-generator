import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
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

export default function TextTimePresent() {
    return (
      
      
        <Typography variant = "h4"> 
          <Box>    
          <CssTextField sx = {{ width : {smallmobile : 200 , mobile : 258 , Bigmobile : 160 , tablet : 150} , ml : {tablet : 1.5} , mt : {smallmobile : 1.5 , Bigmobile : 0}}} id="standard-read-only-input" label="Read Only" defaultValue="Present"
            InputProps={{
              readOnly: true,
            }}
            variant="standard" />
          </Box>  
          </Typography>
          
    );
  }  