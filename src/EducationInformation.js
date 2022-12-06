import React from 'react';
import  { Box , TextField, Typography } from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';
import { theme } from './components/Styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';  
import * as yup from 'yup';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TimePresent from './components/TimePresent';
import { useNavigate , useLocation } from "react-router-dom";
import swal from 'sweetalert';
import { Constants } from './helper/Constants';


const schema = yup.object().shape({
      
  professional : yup.string().required("Professional Required!") ,
  studyProgram : yup.string().required("StudyProgram Required!") ,
  iopoe : yup.string().required("Institution Required!") ,
  city2 : yup.string().required("City Required!") ,
  country : yup.string().required("Country Required!") ,
  gpa : yup.string().required("GPA Required!") ,

})


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


function App () {
  const navigate = useNavigate()
  const useLoc = useLocation()
  let objData = useLoc.state.data;
  const {register , handleSubmit , formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data, 'data console');
    if(data.professional === "" && data.studyProgram === "" && data.iopoe === "" && data.city2 === "" 
    && data.country === "" && data.gpa === "" ){
      swal("Error!", "Please fill the required fields!", "error");
    } else {
      let obj = {...objData,...data};
      navigate('/WorkExperience', {
        state:obj
        
      })
    }
  }

  const [education, setEducation] = useState([]);

  function handleAddEducation() { 
    
    const abc = [...education,[]]
    setEducation(abc) 
    
  }

  function handleDeleteEducation(i) {
      const deleteValue = [...education]
      deleteValue.splice(i , 1)
      setEducation(deleteValue)
  }


  return (
    <div>
      <form onSubmit = {handleSubmit(onSubmit)}> 
        <ThemeProvider theme={theme}>
        <Box
            boxShadow = {'5px 5px #22577a'}
            borderRadius = {6}
            padding = {3}
            margin = "auto"
            backgroundColor = {"lightgray"}
            minHeight={'92vh'}
            maxWidth={'96%'}
            >
          
          
          {/* Heading Component */}
          <Box margin = "auto" maxWidth = {'90%'} border = {5}  borderColor = {Constants.primaryColor} padding = {3} textAlign = "center">
          <Typography  color = {Constants.secondaryColor} fontWeight = "bold" variant = "h4" > Education Infomation </Typography>
          </Box>


          {/* Professional Component */}
          <Box margin={'auto'} flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{mr : {Bigmobile : 0.75} , mt : {smallmobile : 0.25 , mobile : 1} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} >Professional:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 0.75 , mobile : 1 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' {...register("professional")} type = "text" label="Professional" fullWidth
          sx={{ width: {smallmobile : 200 , mobile : 257 , Bigmobile : 430 } , mt : {smallmobile : 1.25} }}></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.professional ? errors.professional?.message : null}</Box>
          </Box>
          </Box>
          </Typography>
          </Box>


           {/* Education Component */}
           <Box margin = "auto" flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{ml : {smallmobile : 2 , mobile : 2.5 , Bigmobile : 2.5 , tablet : 2.5} , mt : {smallmobile : 0} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} , alignItems : {Bigmobile : 'center'} }} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"}>Education:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 1.5 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box sx = {{display : {Bigmobile : 'flex'}}} flexWrap = {"wrap"} justifyContent = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 202 , mobile : 258 , Bigmobile : 215 , tablet : 208} }} {...register("studyProgram")} type = "text" label="Study Program"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.studyProgram ? errors.studyProgram?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 202 , mobile : 258 , Bigmobile : 215 , tablet : 208} , ml : {tablet : 1.5} }} {...register("iopoe")} type = "text" label="Institution or Place of Education"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.iopoe ? errors.iopoe?.message : null}</Box>
          </Box>
          </Box>
          </Box>
          </Typography>
          </Box>


          <Box margin={'auto'} flexWrap={"wrap"}  >
          <Typography sx = {{justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , mt : {smallmobile : 1.5} , ml : {smallmobile : 14.75 , mobile : 17.5 , Bigmobile : 20.25 , tablet : 21}}} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} >
          <Box textAlign = {"center"}>
          <TimePresent />
          </Box>
          </Typography>
          </Box>


          <Box margin = "auto" flexWrap={"wrap"} >
          <Typography sx = {{ml : {smallmobile : 14.75 , mobile : 17.5 , Bigmobile : 19.75 , tablet : 21.5} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} >
          <Box  textAlign = {"center"}>
          <Box sx = {{display : {Bigmobile : 'flex'}}} flexWrap = {"wrap"} justifyContent = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ width : {smallmobile : 202 , mobile : 258 , Bigmobile : 125 , tablet : 120} , mt : {smallmobile : 1.25} }} {...register("city2")} type = "text" label="City"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.city2 ? errors.city2?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ width : {smallmobile : 202 , mobile : 258 , Bigmobile : 125 , tablet : 120} , ml : {tablet : 1.5} , mt : {smallmobile : 1.25} }} {...register("country")} type = "text" label="Country"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.country ? errors.country?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ width : {smallmobile : 150 , mobile : 205 , Bigmobile : 125 , tablet : 120} , ml : {tablet : 1.5} , mt : {smallmobile : 1.25} }} {...register("gpa")} type = "number" label="GPA"></CssTextField>
          <IconButton style = {{color : '#22577a'}} sx = {{ mt : {smallmobile : 1.5} }} onClick = {() => handleAddEducation()} aria-label="Add" size = "large" color = 'primary'> <AddCircleOutlineIcon fontSize="inherit" /> </IconButton>
          <Box sx = {{mr : {smallmobile : 6}}} color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.gpa ? errors.gpa?.message : null}</Box>
          </Box>
          
          </Box>
          </Box>
          </Typography>
          </Box>

           
        {education.map((data,i)=>{
        return(
            <>
          <Box margin = "auto" flexWrap={"wrap"} >
          <Typography sx = {{ml : {smallmobile : 13.75 , mobile : 16 , Bigmobile : 18 , tablet : 18.5} , mt : {smallmobile : 0} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"}>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 1.5 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box sx = {{display : {Bigmobile : 'flex'}}} flexWrap = {"wrap"} justifyContent = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 202 , mobile : 258 , Bigmobile : 215 , tablet : 208} }} {...register("studyProgram")} type = "text" label="Study Program"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.studyProgram ? errors.studyProgram?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 202 , mobile : 258 , Bigmobile : 215 , tablet : 208} , ml : {tablet : 1.5} }} {...register("iopoe")} type = "text" label="Institution or Place of Education"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.iopoe ? errors.iopoe?.message : null}</Box>
          </Box>
          </Box>
          </Box>
          </Typography>
          </Box>


          <Box margin={'auto'} flexWrap={"wrap"}  >
          <Typography sx = {{justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , mt : {smallmobile : 1.5} , ml : {smallmobile : 14.75 , mobile : 17.5 , Bigmobile : 20.25 , tablet : 21}}} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} >
          <Box textAlign = {"center"}>
          <TimePresent />
          </Box>
          </Typography>
          </Box>


          <Box margin = "auto" flexWrap={"wrap"} >
          <Typography sx = {{ml : {smallmobile : 14.75 , mobile : 17.5 , Bigmobile : 19.75 , tablet : 21.5} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} >
          <Box  textAlign = {"center"}>
          <Box sx = {{display : {Bigmobile : 'flex'}}} flexWrap = {"wrap"} justifyContent = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ width : {smallmobile : 202 , mobile : 258 , Bigmobile : 125 , tablet : 120} , mt : {smallmobile : 1.25} }} {...register("city2")} type = "text" label="City"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.city2 ? errors.city2?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ width : {smallmobile : 202 , mobile : 258 , Bigmobile : 125 , tablet : 120} , ml : {tablet : 1.5} , mt : {smallmobile : 1.25} }} {...register("country")} type = "text" label="Country"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.country ? errors.country?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ width : {smallmobile : 150 , mobile : 205 , Bigmobile : 125 , tablet : 120} , ml : {tablet : 1.5} , mt : {smallmobile : 1.25} }} {...register("gpa")} type = "number" label="GPA"></CssTextField>
          <IconButton sx = {{ mt : {smallmobile : 1.5} }} onClick = {() => handleDeleteEducation(i)} aria-label="delete" size = "large" color = 'error'> <DeleteIcon fontSize="inherit" /> </IconButton>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.gpa ? errors.gpa?.message : null}</Box>
          </Box>
          
          </Box>
          </Box>
          </Typography>
          </Box>
            </>
            
          );
        })} 



          {/* Submit Button Component */}
          <Box flexWrap={"wrap"} maxWidth = {"93%"}>
          <Typography sx = {{ mt : {smallmobile : 1.5 , Bigmobile : 10} }} alignItems={"center"} justifyContent = {"end"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} variant = "h5">
          <Box sx = {{ml : {mobile : 2} }} textAlign = {"center"}>
          <Box display = "flex" flexWrap = {"wrap"} justifyContent = {"center"}>
      
          <Box sx = {{ ml : {smallmobile : 2}}}>
          <Button type = 'submit' variant="contained" style = {{backgroundColor : '#22577a' , color : '' }}>
            Next
          </Button>
          </Box>
          </Box>
          </Box>
          </Typography>
          </Box>



          
        </Box>
        </ThemeProvider>
      </form>
    </div>
  );
}

export default App ;