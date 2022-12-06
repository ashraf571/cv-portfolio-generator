import React , {useState } from 'react';
import {useNavigate} from "react-router-dom"
import { FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import SendIcon from '@mui/icons-material/Send';
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label': {
    color : '#22577a'
  },
  '& label.Mui-focused': {
    color: '#22577a',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#22577a',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#22577a',
    },
    '&:hover fieldset': {
      borderColor: "#22577a",
    },
    '&.Mui-focused fieldset': {
      borderColor: '#22577a',
    },
    
  },
});

function Contact(){
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email:'',
    name:'',
    subject: '',
    message: ''
  });
  const handleSubmit = async ()=>{
    console.log("hello")
    const {name,email,subject,message} = input
    const response = await fetch('http://localhost:4000/api/auth/user/contact', {
        
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         },
         body: JSON.stringify({name,email,subject,message})
   
      });
      const json = await response.json();
        console.log(json);
      if(json.error){
        alert(json.error.message)
      }else{
        navigate('/')
      }
    }
    const onInputChange = e => {
      const { name, value } = e.target;
      setInput(prev => ({
        ...prev,
        [name]: value
      }));
    }
    return(
        <div>
        <Navbar/>
        <MDBRow className="d-flex flex-column flex-lg-row px-5 py-5 position-relative "  style={{top:'65px' , backgroundColor : 'lightgray'}}>
        <MDBCol className="mb-5 col-12 col-lg-6 mx-auto py-5">
            <section className="text-start d-flex flex-columnn justify-content-center  lg:w-full lg:py-40 lg:text-left">
              
            <div className=" mt-md-5 mt-md-2 ">
                <h1 style = {{color : 'black'}} className=" px-5">Contact Us</h1>
                <p style = {{color : 'black'}} className="text-break px-5">
                Get in touch with us for further details and more queries. We will be very happy to know your feedback about us.
                </p>
              </div>
            </section>
          </MDBCol>
          <MDBCol className="mb-5 col-12 col-lg-6 mx-auto ">
            <section className="text-start d-flex flex-column lg:w-full lg:py-40 lg:text-left">
          
              
              <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <FormControl fullWidth   tag="form" >
      <CssTextField inputProps={{ style: { color: "#22577a" } }} fullWidth label="Name" id="name" className="my-2 " name="name" type="text" required autoComplete="off" onChange={onInputChange}/>
      <CssTextField inputProps={{ style: { color: "#22577a" } }} fullWidth label="Email" id="email" className="my-2 " type="email" name="email" required autoComplete="off" onChange={onInputChange}/>
      <CssTextField inputProps={{ style: { color: "#22577a" } }} fullWidth label="Write a Subject" id="subject"className="my-2 " type="text" name="subject" required autoComplete="off" onChange={onInputChange}/>
      <CssTextField inputProps={{ style: { color: "#22577a" } }} fullWidth label="Message" id="message"   multiline name="message"
          rows={4} className="my-2 " type="text" required autoComplete="off" onChange={onInputChange}/>
          <Button style={{width:'25%'}} variant="contained" sx = {{backgroundColor : '#22577a' , color : '#a9a9a9' , fontWeight : 'bold'}} endIcon={<SendIcon />} onClick={handleSubmit}>
  Send
</Button>
</FormControl>
    </Box>
            </section>
          </MDBCol>

          
        </MDBRow>
        <footer className=" text-center position-relative" style = {{backgroundColor : '#a9a9a9'}}>
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
               className="btn btn-outline-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f text-black"></i>
              </a>

              <a
                className="btn btn-outline-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter text-black"></i>
              </a>

              <a
                className="btn btn-outline-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-google text-black"></i>
              </a>

              <a
                className="btn btn-outline-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram text-black"></i>
              </a>

              <a
                className="btn btn-outline-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="btn btn-outline-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-github text-black"></i>
              </a>
            </section>
          </div>

          <div style = {{backgroundColor : '#22577a'}} className="text-center p-3 text-white">
            © 2023 Copyright:
            <a className="text-white" href="https://raisingskills.com/">
              Raisingskills.com
            </a>
          </div>
        </footer>
        </div>
    );
}
export default Contact;