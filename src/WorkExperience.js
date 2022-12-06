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
import { Constants } from './helper/Constants';


const schema = yup.object().shape({
    
  title : yup.string().required("Title Required!") ,
  workPlace : yup.string().required("Work Place Required!") ,
  city1 : yup.string().required("City Required!") ,
  country1 : yup.string().required("Country Required!") ,
  task : yup.string().required("Task Required!") ,
  skill : yup.string().required("Skill Required!") ,
  certificate : yup.string().required("Certificate Required!"),

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

  const navigate = useNavigate();
  const useLoc = useLocation();

 let objData = useLoc.state;
  
  const {register , handleSubmit , formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
      let obj = {...objData,...data};
      console.log(obj);
      navigate('/cvDemi',{state:obj})
  
  }


  const [workexperience, setWorkExperience] = useState([]);
  
    function handleAddWorkExperience() { 
      
      const abc = [...workexperience,[]]
      setWorkExperience(abc) 
      
    }
  
    function handleDeleteWorkExperience(i) {
        const deleteValue = [...workexperience]
        deleteValue.splice(i , 1)
        setWorkExperience(deleteValue)
    }

    const [skills, setSkills] = useState([]);

  function handleAddSkills() { 
    
    const abc = [...skills,[]]
    setSkills(abc) 
    
  }


  function handleDeleteSkills(i) {
      const deleteValue = [...skills]
      deleteValue.splice(i , 1)
      setSkills(deleteValue)
  }


  const [certificate, setCertificate] = useState([]);   
  
  function handleAddCertificate() { 
    
    const abc = [...certificate,[]]
    setCertificate(abc) 
    
  }


  function handleDeleteCertificate(i) {
      const deleteValue = [...certificate]
      deleteValue.splice(i , 1)
      setCertificate(deleteValue)
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
            maxWidth={'96%'}
            minHeight = {'96.5vh'}
            >
          
          
          {/* Heading Component */}
          <Box margin = "auto" maxWidth = {'90%'} border = {5}  borderColor = {Constants.primaryColor} padding = {3} textAlign = "center">
          <Typography  color = {Constants.secondaryColor} fontWeight = "bold" variant = "h4" > Work Experience </Typography>
          </Box>



          {/* Work Experience Component */}
          <Box margin = "auto" flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{ml : {smallmobile : 7 , mobile : 8 , Bigmobile : 9} , mt : {smallmobile : 2} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} , alignItems : {Bigmobile : 'center'} }} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"}>Work:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 1.5 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box sx = {{display : {Bigmobile : 'flex'}}} flexWrap = {"wrap"} justifyContent = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 202 , mobile : 258 , Bigmobile : 213 , tablet : 208} }} {...register("title")} type = "text" label="Title / Position"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.title ? errors.title?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 202 , mobile : 258 , Bigmobile : 213 , tablet : 208} , ml : {tablet : 1.5} }} {...register("workPlace")} type = "text" label="Workplace / Company"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.workPlace ? errors.workPlace?.message : null}</Box>
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
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ width : {smallmobile : 202 , mobile : 258 , Bigmobile : 125 , tablet : 120} , mt : {smallmobile : 1.25} }} {...register("city1")} type = "text" label="City"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.city1 ? errors.city1?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ width : {smallmobile : 202 , mobile : 258 , Bigmobile : 125 , tablet : 120} , ml : {tablet : 1.5} , mt : {smallmobile : 1.25} }} {...register("country1")} type = "text" label="Country"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.country1 ? errors.country1?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ width : {smallmobile : 150 , mobile : 205 , Bigmobile : 125 , tablet : 120} , ml : {tablet : 1.5} , mt : {smallmobile : 1.25} }} {...register("task")} type = "text" label="Tasks"></CssTextField>
          <IconButton style = {{color : '#22577a'}} sx = {{ mt : {smallmobile : 1.5} }} onClick = {() => handleAddWorkExperience()} aria-label="Add" size = "large" color = 'primary'> <AddCircleOutlineIcon fontSize="inherit" /> </IconButton>
          <Box sx = {{mr : {smallmobile : 6}}} color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.task ? errors.task?.message : null}</Box>
          </Box>
          
          </Box>
          </Box>
          </Typography>
          </Box>


           
          {workexperience.map((data,i)=>{
            return(
          <>
          <Box margin = "auto" flexWrap={"wrap"} >
          <Typography sx = {{ml : {smallmobile : 13.75 , mobile : 16 , Bigmobile : 18 , tablet : 18.5} , mt : {smallmobile : 0} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"}>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 1.5 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box sx = {{display : {Bigmobile : 'flex'}}} flexWrap = {"wrap"} justifyContent = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 202 , mobile : 258 , Bigmobile : 215 , tablet : 208} }} {...register("title")} type = "text" label="Title / Position"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.title ? errors.title?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 202 , mobile : 258 , Bigmobile : 215 , tablet : 208} , ml : {tablet : 1.5} }} {...register("workPlace")} type = "text" label="Workplace / Company"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.workPlace ? errors.workPlace?.message : null}</Box>
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
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ width : {smallmobile : 202 , mobile : 258 , Bigmobile : 125 , tablet : 120} , mt : {smallmobile : 1.25} }} {...register("city1")} type = "text" label="City"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.city1 ? errors.city1?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ width : {smallmobile : 202 , mobile : 258 , Bigmobile : 125 , tablet : 120} , ml : {tablet : 1.5} , mt : {smallmobile : 1.25} }} {...register("country1")} type = "text" label="Country"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.country1 ? errors.country1?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ width : {smallmobile : 150 , mobile : 205 , Bigmobile : 125 , tablet : 120} , ml : {tablet : 1.5} , mt : {smallmobile : 1.25} }} {...register("task")} type = "text" label="Tasks"></CssTextField>
          <IconButton sx = {{ mt : {smallmobile : 1.5} }} onClick = {() => handleDeleteWorkExperience(i)} aria-label="delete" size = "large" color = 'error'> <DeleteIcon fontSize="inherit" /> </IconButton>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.task ? errors.task?.message : null}</Box>
          </Box>
          
          </Box>
          </Box>
          </Typography>
          </Box>

            </>
          );
        })} 



          {/* Skills Component */}
          <Box margin = "auto" flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{mr : {Bigmobile : 10.25} , ml : {smallmobile : 7 , mobile : 7.75 , Bigmobile : 0} , mt : {smallmobile : 0 , mobile : 0} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"}>Skills:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 1.5 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width: {smallmobile : 149 , mobile : 200 , Bigmobile : 223 } }} {...register("skill")} type = "text" label="Skill"></CssTextField>
          <IconButton style = {{color : '#22577a'}} sx = {{ mt : {smallmobile : 1.5} }} onClick = {() => handleAddSkills()} aria-label="Add" size = "large" color = 'primary'> <AddCircleOutlineIcon fontSize="inherit" /> </IconButton>
          <Box sx = {{mr : {smallmobile : 6}}} color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.skill ? errors.skill?.message : null}</Box>
          </Box>
          </Box>
          </Typography>
          </Box>

          
          {skills.map((data,i)=>{
            return(
              <Box margin = "auto" flexWrap={"wrap"} >
              <Typography sx = {{ justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , ml : {smallmobile : 15.25 , mobile : 17.5 , Bigmobile : 1.25} }} alignItems={"end"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} variant = "h5">
              <Box textAlign = {"center"}>
              <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width: {smallmobile : 149 , mobile : 200 , Bigmobile : 223 } }} {...register("skill")}  type = "text" label="Skill" variant="outlined" />
              <IconButton sx = {{ mt : {smallmobile : 1.5} }} onClick = {() => handleDeleteSkills(i)} aria-label="delete" size = "large" color = 'error' > <DeleteIcon fontSize="inherit" /> </IconButton>
              <Box sx = {{ mr : { smallmobile : 6 }}} color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.interest ? errors.interest?.message : null}</Box>              
              </Box>
              </Typography>
              </Box>
          );
           })}



           {/* Certificates Component */}
           <Box margin = "auto" flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{mr : {Bigmobile : 18.25} , ml : {smallmobile : 1.25 , mobile : 1 , Bigmobile : 0} , mt : {smallmobile : 0 , mobile : 0} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"}>Certificates:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 1.5 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width: {smallmobile : 149 , mobile : 200 , Bigmobile : 223 } }} {...register("certificate")} type = "text" label="Certificate"></CssTextField>
          <IconButton style = {{color : '#22577a'}} sx = {{ mt : {smallmobile : 1.5} }} onClick = {() => handleAddCertificate()} aria-label="Add" size = "large" color = 'primary'> <AddCircleOutlineIcon fontSize="inherit" /> </IconButton>
          <Box sx = {{mr : {smallmobile : 6}}} color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.certificate ? errors.certificate?.message : null}</Box>
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

           
          {certificate.map((data,i)=>{
            return(
            <>
            <Box margin = "auto" flexWrap={"wrap"} >
            <Typography sx = {{ justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , ml : {smallmobile : 14.75 , mobile : 17.5 , Bigmobile : 1.25} }} alignItems={"end"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} variant = "h5">
            <Box textAlign = {"center"}>
            <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width: {smallmobile : 149 , mobile : 200 , Bigmobile : 223 } }} {...register("certificate")} type = "text" label="Certificate" variant="outlined" />
            <IconButton sx = {{ mt : {smallmobile : 1.5} }} onClick = {() => handleDeleteCertificate(i)} aria-label="delete" size = "large" color = 'error' > <DeleteIcon fontSize="inherit" /> </IconButton>
            <Box sx = {{ mr : { smallmobile : 6 }}} color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.certificate ? errors.certificate?.message : null}</Box>              
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

            </>
          );
        })} 
          


          {/* Submit Button Component */}
          <Box margin = "auto" flexWrap={"wrap"} maxWidth = {"90%"}>
          <Typography sx = {{ mt : {smallmobile : 1.5} }} alignItems={"center"} justifyContent = {"end"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} variant = "h5">
          <Box sx = {{ml : {mobile : 2} }} textAlign = {"center"}>
          <Box display = "flex" flexWrap = {"wrap"} justifyContent = {"center"}>
          
          <Box sx = {{ ml : {smallmobile : 2}}}>
          <Button type = 'submit' variant="contained" style = {{backgroundColor : '#22577a' , color : 'white' }}>
            Submit CV
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