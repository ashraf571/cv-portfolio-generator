import React from 'react';
import  { Box , TextField, Typography } from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';
import { theme } from './components/Styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';  
import * as yup from 'yup';
import AutoCountry from './components/AutoCountry';
import AreaCode from './components/AreaCode';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Dateofbirth from './components/Dateofbirth';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { Constants } from './helper/Constants';


const schema = yup.object().shape({
    
  firstName : yup.string().required("First Required!") ,
  lastName : yup.string().required("Last Required!") ,
  address : yup.string().required("Address Required!") ,
  city : yup.string().required("City Required!") ,
  district : yup.string().required("District Require!") ,
  postalCode : yup.number().positive().integer().required("Postal Code Required!") ,
  telephoneNumber : yup.number().positive().integer().required("Telephone Number Required!") ,
  email : yup.string().email().required("Email Required!") ,
  nationality : yup.string().required("Nationality Required!") ,
  gender : yup.string().required("Gender Required!"),
  aboutYourself : yup.string().required("About Yourself Required!") ,
  professionalProficiency : yup.string().required("Language Required!") ,
  interest : yup.string().required("Interest Required!") ,
  picture : [['featured_image']] ,
  country : yup.string().required(''),

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


const PersonalInformation = () => {

  const navigate = useNavigate()

  const [interests, setInterests] = useState([]);

  const {register , handleSubmit ,  formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data, 'data console');
    if(data.firstName === "" && data.lastName === "" && data.address === "" && data.city === "" 
    && data.district === "" && data.postalCode === "" && data.telephoneNumber === "" && data.email === "" 
    && data.nationality === ""  && data.aboutYourself === "" && data.professionalProficiency === ""
    && data.interest === "" ){
      swal("Error!", "Please fill the required fields!", "error");
    } else {
      navigate('/EducationInformation', {
        state:{
          data:data
        }
      })
    }
  }


  
  function handleAddInterests() { 
    
    const abc = [...interests, []]
    setInterests(abc) 
    
  }


  function handleDeleteInterests(i) {
      const deleteValue = [...interests]
      deleteValue.splice(i , 1)
      setInterests(deleteValue)
  }

  const [languages, setLanguages] = useState([]);
  
  function handleAddLanguages() { 
    
    const abc = [...languages,[]]
    setLanguages(abc) 
    
  }


  function handleDeleteLanguages(i) {
      const deleteValue = [...languages]
      deleteValue.splice(i , 1)
      setLanguages(deleteValue)
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
          <Typography color = {Constants.secondaryColor} fontWeight = "bold" variant = "h4" > Personal Infomation </Typography>
          </Box>



          {/* FullName Component */}
          <Box margin = "auto" flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{ml : {Bigmobile : 0.5 , tablet : 0} , mt : {smallmobile : 1.5} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} >Full Name:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 1.5 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box display = "flex" flexWrap = {"wrap"} justifyContent = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 110 , mobile : 130 , Bigmobile : 223 , tablet : 215} }} {...register("firstName")} type = "text" label="First Name"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.firstName ? errors.firstName?.message : null}</Box>
          </Box>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 110 , mobile : 130 , Bigmobile : 223 , tablet : 215} , ml : {tablet : 1.5} }} {...register("lastName")} type = "text" label="Last Name"></CssTextField>          
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.lastName ? errors.lastName?.message : null}</Box>
          </Box>
          </Box>
          </Box>
          </Typography>
          </Box>

          <Box display = "flex" flexWrap = {"wrap"} textAlign={"center"} color = {'red'} fontSize = {"14px"} fontWeight = "bold">
          </Box>
          


          {/* Address Component */}
          <Box margin={'auto'} flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{ml : {smallmobile : 1.75 , mobile : 1.75 , Bigmobile : 2.5} , mt : {smallmobile : 0 , mobile : 0} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"}>Address:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 1.5 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no'  {...register("address")} type = "text" label="Address" fullWidth
          sx={{ width: {smallmobile : 218 , mobile : 260 , Bigmobile : 445 } , mt : {smallmobile : 1.25} }}></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.address ? errors.address?.message : null}</Box>
          </Box>
          </Box>
          </Typography>
          </Box>


          <Box margin = "auto" flexWrap={"wrap"} >
          <Typography sx = {{ justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} }} alignItems={"center"}  display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} variant = "h5">
          <Box textAlign = {"center"}>
          <Box sx = {{ml : {smallmobile : 12.6, mobile : 15 , Bigmobile : 18 , tablet : 17.75}}} display = "flex" flexWrap = {"wrap"} justifyContent = {"center"}>
          <Box >
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no'  sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 110 , mobile : 130 , Bigmobile : 223 , tablet : 215} }} {...register("city")} type = "text" label="City"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.city ? errors.city?.message : null}</Box>
          </Box>
          <Box >
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 110 , mobile : 130 , Bigmobile : 223 , tablet : 215} , ml : {tablet : 1.5}}} {...register("district")} type = "text" label="District"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.district ? errors.district?.message : null}</Box>
          </Box>
          </Box>
          </Box>
          </Typography>
          </Box>


          <Box margin = "auto" flexWrap={"wrap"} >
          <Typography sx = {{ justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} variant = "h5">
          <Box sx = {{ ml : {smallmobile : 12.6 , mobile : 15 , Bigmobile : 18 } , width : {smallmobile : 110 , mobile : 130 , Bigmobile : 223 , tablet : 215} }} textAlign = {"center"}>
          <Box >
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no'  sx = {{ mt : {smallmobile : 1.5 , mobile : 1.25} }} {...register("postalCode")} type = "number" label="Postal Code"></CssTextField>
          {/* <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.postalCode ? errors.postalCode?.message : null}</Box> */}
          </Box>
          </Box>
          <AutoCountry />
          </Typography>
          </Box>



          {/* Telephone Number Component */}
          <Box margin = "auto" flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{ml : {Bigmobile : 0} , mt : {smallmobile : 0.25 , mobile : 0} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"}>Telephone:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 0.75 , mobile : 1.25 , Bigmobile : 2} }} display = "flex" flexWrap = {"wrap"} justifyContent = {"center"}>
          <AreaCode />
          <Box textAlign = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width : {smallmobile : 110 , mobile : 130 , Bigmobile : 223 , tablet : 215} , ml : {tablet : 1.5} }} {...register("telephoneNumber")} type = "number" label="Telephone Number"></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.telephoneNumber ? errors.telephoneNumber.message && "Number is Required!" : null}</Box>
          </Box>
          </Box>
          </Box>
          </Typography>
          </Box>

        


          {/* Email Component */}
          <Box margin={'auto'} flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{ml : {smallmobile : 4.5 , mobile : 5.5 , Bigmobile : 6.5} , mt : {smallmobile : 0.25 , mobile : 0} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} >Email:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 1.25 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' {...register("email")} type = "email" label="E-mail" fullWidth
          sx={{ width: {smallmobile : 218 , mobile : 260 , Bigmobile : 445 } , mt : {smallmobile : 1.25} }}></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.email ? errors.email?.message : null}</Box>
          </Box>
          </Box>
          </Typography>
          </Box>



          {/* Nationality Component */}
          <Box margin={'auto'} flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{ mt : {smallmobile : 0.25 , mobile : 0} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} >Nationality:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 0.75 , mobile : 1 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' {...register("nationality")} type = "text" label="Nationality" fullWidth
          sx={{ width: {smallmobile : 216 , mobile : 260 , Bigmobile : 445 } , mt : {smallmobile : 1.25} }}></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.nationality ? errors.nationality?.message : null}</Box>
          </Box>
          </Box>
          </Typography>
          </Box>



          {/* Upload Picture Component */}
          <Box margin={'auto'} flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{mr : {Bigmobile : 28} , ml : {smallmobile : 4 , mobile : 4.75 , Bigmobile : 0} , mt : {smallmobile : 1.25 , mobile : 1.25} , justifyContent : {smallmobile : 'flex-start', Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} >Profile:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 1.25 , Bigmobile : 2} }} textAlign = {"center"}>
          <Button style = {{backgroundColor : '#22577a' , color : ''}} variant="contained" component="label" endIcon = {<PhotoCamera />} >
            Upload Photo
            <input hidden accept="image/*" multiple type="file" {...register("picture")}/>
          </Button>
          </Box>
          </Typography>
          </Box>




          {/* Date Of Birth Component */}
          <Box margin={'auto'} flexWrap={"wrap"}  >
          <Typography color = {Constants.secondaryColor} sx = {{mr : {Bigmobile : 33} , ml : {smallmobile : 0.85 , mobile : 0.5 , Bigmobile : 0} , mt : {smallmobile : 2 , mobile : 1.25} , justifyContent : {smallmobile : 'flex-start', Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"}>Date Birth:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 1.5 , Bigmobile : 2} }} textAlign = {"center"}>
          <Dateofbirth />
          </Box>
          </Typography>
          </Box>



          {/* Gender Component */}
          <Box margin={'auto'} flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{mr : {Bigmobile : 18.5} , ml : {smallmobile : 0.5 , mobile : 3.5 , Bigmobile : 0} , mt : {smallmobile : 2 , mobile : 0.5 , Bigmobile : 1.25} , justifyContent : {smallmobile : 'flex-start', Bigmobile : 'center'} , fontSize : {smallmobile : '15px' , mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} >Gender:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 0.75 , mobile : 1.5 , Bigmobile : 2} }} textAlign = {"center"}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
          <RadioGroup {...register("gender")} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" required>
          <FormControlLabel value="female" control={<Radio sx={{'& .MuiSvgIcon-root':  {fontSize : 16 , color : '#22577a'}  }} />} label="Female" {...register("gender")} />
          <FormControlLabel value="male" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize : 16 , color : '#22577a'} }} />} label="Male" {...register("gender")} />
          <FormControlLabel value="other" control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize : 16 , color : '#22577a'} }} />} label="Other" {...register("gender")} />
          </RadioGroup>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.gender ? errors.gender.message && "Gender is Required!" : null}</Box>
          </FormControl>
          </Box>
          </Typography>
          </Box>

          

            {/* Interests Components */}
          <Box margin = "auto" flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{mr : {Bigmobile : 17} , ml : {smallmobile : 2 , mobile : 2 , Bigmobile : 0} , mt : {smallmobile : 0 , mobile : 0} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"}>Interests:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 1.5 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width: {smallmobile : 160 , mobile : 180 , Bigmobile : 223 } }} {...register("interest")} type = "text" label="Interest"></CssTextField>
          <IconButton style = {{color : '#22577a'}} sx = {{ mt : {smallmobile : 1.5} }} onClick = {() => handleAddInterests()} aria-label="Add" size = "large" color = 'primary'> <AddCircleOutlineIcon fontSize="inherit" /> </IconButton>
          <Box sx = {{mr : {smallmobile : 6}}} color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.interest ? errors.interest?.message : null}</Box>
          </Box>
          </Box>
          </Typography>
          </Box>


          
          {interests.map((data,i)=>{
            return(
              <Box margin = "auto" flexWrap={"wrap"} >
              <Typography sx = {{ justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , mr : {Bigmobile : 1} , ml : {smallmobile : 13.25 , mobile : 15.5 , Bigmobile : 0} }} alignItems={"end"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} variant = "h5">
              <Box textAlign = {"center"}>
              <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25} , width: {smallmobile : 160 , mobile : 180 , Bigmobile : 223 } }} {...register("interest")}  type = "text" label="Interest" variant="outlined" />
              <IconButton sx = {{ mt : {smallmobile : 1.5} }} onClick = {() => handleDeleteInterests(i)} aria-label="delete" size = "large" color = 'error' > <DeleteIcon fontSize="inherit" /> </IconButton>
              <Box sx = {{ mr : { smallmobile : 6 }}} color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.interest ? errors.interest?.message : null}</Box>              
              </Box>
              </Typography>
              </Box>
          );
           })}




           {/* Languages Component */}
           <Box margin = "auto" flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{mr : {Bigmobile : 19.5} , ml : {mobile : 0 , Bigmobile : 0} , mt : {smallmobile : 0 , mobile : 0.25 , Bigmobile : 1.25} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {mobile : '19px' , Bigmobile : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"}>Languages:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 0.75 , mobile : 1 , Bigmobile : 2} }} textAlign = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.25 , Bigmobile : 0} , width: {smallmobile : 160 , mobile : 180 , Bigmobile : 223 } }} {...register("professionalProficiency")} type = "text" label="Professional Proficiency"></CssTextField>
          <IconButton style = {{color : '#22577a'}} sx = {{ mt : {smallmobile : 1.5} }} onClick = {() => handleAddLanguages()} aria-label="Add" size = "large" color = 'primary'> <AddCircleOutlineIcon fontSize="inherit" /> </IconButton>
          <Box sx = {{mr : {smallmobile : 6}}} color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.professionalProficiency ? errors.professionalProficiency?.message : null}</Box>
          </Box>
          </Box>
          </Typography>
          </Box>


          
          {languages.map((data,i)=>{
            return(
              <Box margin = "auto" flexWrap={"wrap"} >
              <Typography sx = {{ justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , mr : {Bigmobile : 0.5} , ml : {smallmobile : 13.25 , mobile : 15.75 , Bigmobile : 0} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} variant = "h5">
              <Box textAlign = {"center"}>
              <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' sx = {{ mt : {smallmobile : 1.5 , Bigmobile : 0.25} , width: {smallmobile : 160 , mobile : 180 , Bigmobile : 223 } }} {...register("professionalProficiency")} type = "text" label="Professional Proficiency" />
              <IconButton sx = {{ mt : {smallmobile : 0.5} }} onClick = {() => handleDeleteLanguages(i)} aria-label="delete" size = "large" color = 'error' > <DeleteIcon fontSize="inherit" /> </IconButton>
              <Box sx = {{ mr : { smallmobile : 6 }}} color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.professionalProficiency ? errors.professionalProficiency?.message : null}</Box>
              </Box>
              </Typography>
              </Box>
          );
           })}
          



          {/* AboutYourself Component */}
          <Box margin={'auto'} flexWrap={"wrap"} >
          <Typography color = {Constants.secondaryColor} sx = {{mr : {Bigmobile : 4.5 , tablet : 3} , ml : {mobile : 0 , Bigmobile : 0} , mt : {smallmobile : 0 , mobile : 0.25 , Bigmobile : 0} , justifyContent : {smallmobile : 'flex-start' , Bigmobile : 'center'} , fontSize : {smallmobile : '12px' , mobile : '15px' , Bigmobile : '19px' , tablet : '22px'} }} alignItems={"center"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"}>About Yourself:
          <Typography fontWeight = {"bold"} variant = "h5" color = "error">*</Typography>
          <Box sx = {{ml : {smallmobile : 1 , mobile : 0.75 , Bigmobile : 2 } }} textAlign = {"center"}>
          <Box>
          <CssTextField inputProps={{ style: { color: "#22577a" } }} autoComplete='no' multiline rows={4} {...register("aboutYourself")} type = "text" label="About Yourself" fullWidth
          sx={{ width: {smallmobile : 215 , mobile : 260 , Bigmobile : 410 , tablet : 445 } , mt : {smallmobile : 1.25 , Bigmobile : 0.5} }}></CssTextField>
          <Box color = {'red'} fontSize = {"14px"} fontWeight = "bold">{errors.aboutYourself ? errors.aboutYourself?.message : null}</Box>
          </Box>
          </Box>
          </Typography>
          </Box>
        
          


          {/* Submit Button Component */}
          <Box margin = "auto" flexWrap={"wrap"} maxWidth = {"90%"}>
          <Typography sx = {{ mt : {smallmobile : 1.5} }} alignItems={"center"} justifyContent = {"end"} display = "flex" flexWrap={"wrap"} fontWeight = {"bold"} variant = "h5">
          <Box sx = {{ml : {mobile : 2} }} textAlign = {"center"}>
          <Button type = 'submit' variant="contained" style = {{backgroundColor : '#22577a' , color : '' }}>
            Next
          </Button>
          </Box>
          </Typography>
          </Box>



          
        </Box>
        </ThemeProvider>
      </form>
    </div>
  );
}

export default PersonalInformation ;