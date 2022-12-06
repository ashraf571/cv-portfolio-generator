import profile from "./img/profile.jpg";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import bg from "./img/bg.jpg";
import React from "react";
import Typewriter from "typewriter-effect";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Navbar from "./Navbar";
import { useLocation , useNavigate } from "react-router-dom";

const CssTextField = styled(TextField)({
  '& label': {
    color : 'white'
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: "white",
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
    
  },
});

function Portfolio() {

    const useLoc = useLocation();
    const ref = React.createRef();
    const navigate = useNavigate();
    

    let data = useLoc.state;
    console.log(data);

  const [value, setValue] = React.useState('Main_Skills');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style = {{backgroundColor : 'lightgray' , height : '450vh'}}>
    <Navbar/>
      <div className="  gradient-form position-relative " style={{top:'60px'}}>
        <MDBRow style = {{backgroundColor : 'lightgray'}} className="profileBg d-flex flex-column flex-lg-row px-5 py-5">
          <MDBCol  className="mb-5 col-12 col-lg-4 mx-auto ">
            <section className="text-start d-flex flex-columnn justify-content-center lg:w-full lg:py-40 lg:text-left">
              <div className="">
                <img
                  src={profile}
                  alt="profile.jpg"
                  className="shadow-4-strong w-100 h-100  my-5 mx-auto rounded-circle border border-5 "
                />
              </div>
            </section>
          </MDBCol>

          <MDBCol className="mb-5 col-12 col-lg-8 mx-auto">
            <section className="text-start d-flex flex-columnn justify-content-center lg:w-full lg:py-40 lg:text-left">
              <div className="p-4 mt-md-5 mt-md-2 ">
                <h3>Welcome To My World</h3>
                <h1 className="text-break my-5">
                  <span
                    className="profileheading "
                    style={{
                      
                      fontWeight: "bold",
                    }}
                  >
                    Hi I am {data.firstName} {data.lastName}
                  </span>
                  <br />

                  <Typewriter
                    className="typewriter"
                    options={{
                      strings: ["Hacker", "Developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />

                  
                  <span
                    className="text-wrap profileheading"
                    style={{
                      
                      fontWeight: "bold",
                    }}
                  >
                    based In Pakistan
                  </span>
                </h1>
              </div>
            </section>
          </MDBCol>
        </MDBRow>
        <MDBRow className="aboutprofile d-flex flex-column flex-lg-row px-3 py-5">
          <MDBCol className="mb-5 col-12 col-lg-6 mx-auto ">
            <section className="text-start d-flex flex-column lg:w-full lg:py-40 lg:text-left">
            <div className=" mt-md-5 mt-md-2 ">
                <h1 className="text-white">About Me</h1>
                <p className="text-break text-white">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#" style={{ color:'red' }}>alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                </p>
              </div>
              
              
              <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList TabIndicatorProps={{style: {background:'#a9a9a9'}}} onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Education" value="Main_Skills" className="text-white"/>
            <Tab label="Experience" value="Main_Awards" className="text-white"/>
            <Tab label="Skills" value="Experience" className="text-white"/>
            <Tab label="Certificates" value="Certificates" className="text-white"/>
          </TabList>
        </Box>
        <TabPanel value="Main_Skills" className="p-2">  <ul className="ps-0">
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a style={{color:'white', fontWeight:'bold'}}> {data.studyProgram} </a><br/> {data.iopoe} </li>
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a style={{color:'white', fontWeight:'bold'}}> {data.city2} </a><br/> {data.country} </li>
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a style={{color:'white', fontWeight:'bold'}}> GPA : </a> {data.gpa} </li>
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a style={{color:'white', fontWeight:'bold'}}> Start Date : </a> 15/09/2014 </li>
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a style={{color:'white', fontWeight:'bold'}}> End Date : </a> 11/05/2018 </li>
                   </ul></TabPanel>
        <TabPanel value="Main_Awards" className="p-2"> <ul className="ps-0">
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a href="#" style={{color:'white', fontWeight:'bold'}}> {data.title} </a><br/> {data.workPlace} </li>
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a href="#" style={{color:'white', fontWeight:'bold'}}> {data.city1} </a><br/> {data.country1} </li>
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a href="#" style={{color:'white', fontWeight:'bold'}}> {data.task} </a><br/>2021- 2025</li>
                   </ul></TabPanel>
        <TabPanel value="Experience" className="p-2"> <ul className="ps-0">
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a href="#" style={{color:'white', fontWeight:'bold'}}> {data.skill} </a><br/>2018 - Current</li>
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a href="#" style={{color:'white', fontWeight:'bold'}}>Front-end Engineer - Microsoft</a><br/>2017 - 2018</li>
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a href="#" style={{color:'white', fontWeight:'bold'}}>Software Engineer - Alibaba</a><br/>2013- 2014</li>
                   </ul></TabPanel>
                   <TabPanel value="Certificates" className="p-2"> <ul className="ps-0">
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a href="#" style={{color:'white', fontWeight:'bold'}}> {data.certificate} </a><br/>2018</li>
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a href="#" style={{color:'white', fontWeight:'bold'}}>Diploma in Computer Science - Gamma Technical Institute</a><br/>2009</li>
                    <li className="my-3" style={{listStyle:'none', color:'red' }}><a href="#" style={{color:'white', fontWeight:'bold'}}>Graphic Designer - ABC Institute, Los Angeles, CA</a><br/>2007</li>
                   </ul></TabPanel>
      </TabContext>
    </Box>
            </section>
          </MDBCol>

          <MDBCol className="mb-5 col-12 col-lg-6 mx-auto">
            <section className="text-start d-flex flex-columnn justify-content-center  lg:w-full lg:py-40 lg:text-left">
              
              <div className="mx-auto">
                <img
                  src={profile}
                  alt="profile.jpg"
                  className="shadow-4-strong w-100 h-100  my-5 mx-auto rounded-4 border border-5 "
                />
              </div>
            </section>
          </MDBCol>
        </MDBRow>
        <MDBRow style = {{backgroundColor : '#22577a'}} className="projectList mx-auto p-0 py-md-3 px-md-5 my-5">
          <div className="">
            <ul className="list-group list-group-light mb-0  d-flex flex-col flex-sm-row flex-wrap justify-content-center" style={{listStyle:'none'}}>
              <li style = {{backgroundColor : '#a9a9a9'}} className="list-group-item p-3 border border-1 text-break ">
               <button style={{border:'none'}}> All Projects</button>
              </li>
              <li style = {{backgroundColor : '#a9a9a9'}} className="list-group-item p-3 border border-1 text-break ">
              <button style={{border:'none'}}>  Web Projects</button>
              </li>
              <li style = {{backgroundColor : '#a9a9a9'}} className=" list-group-item p-3 border border-1 text-break ">
               <button style={{border:'none'}}> Web Designs</button>
              </li>
              <li style = {{backgroundColor : '#a9a9a9'}} className="list-group-item p-3 border border-1 text-break ">
               <button style={{border:'none'}}> Logo Designs</button>
              </li>
            </ul>
          </div>
        </MDBRow>
        <div className="pb-4  mx-auto " style={{ top: "100px" }}>
          <div className="my-3 mx-3 d-flex flex-row justify-content-around flex-wrap">
            <div className="card mx-2 ">
              <div className="bg-image hover-zoom">
              <img src={bg} alt="CV" style={{ width: "100%" }} />
              <div className="container">
                <a href="#">
                <h4>
                  <b style = {{color : '#22577a'}}>John Doe</b>
                </h4>
                <p style = {{color : '#22577a'}}>Architect & Engineer</p></a>
              </div>
              </div>
            </div>
            <div className="card mx-2 ">
              <div className="bg-image hover-zoom">
              <img src={bg} alt="CV" style={{ width: "100%" }} />
              <div className="container">
                <a href="#">
                <h4>
                  <b style = {{color : '#22577a'}}>John Doe</b>
                </h4>
                <p style = {{color : '#22577a'}}>Architect & Engineer</p></a>
              </div>
              </div>
            </div>
            <div className="card mx-2 ">
              <div className="bg-image hover-zoom">
              <img src={bg} alt="CV" style={{ width: "100%" }} />
              <div className="container">
                <a href="#">
                <h4>
                  <b style = {{color : '#22577a'}}>John Doe</b>
                </h4>
                <p style = {{color : '#22577a'}}>Architect & Engineer</p></a>
              </div>
              </div>
            </div>
           
          </div>
        </div>
        <MDBRow className="mt-0 mb-5">
          <div className="text-center">
        <Button sx = {{backgroundColor : '#22577a'}} variant="contained" > View More </Button>
          </div>
        </MDBRow>
        <MDBRow className="aboutprofile d-flex flex-column flex-lg-row px-3 py-5">
          <MDBCol className="mb-5 col-12 col-lg-6 mx-auto ">
            <section className="text-start d-flex flex-column lg:w-full lg:py-40 lg:text-left">
            <div className=" mt-md-5 mt-md-2 ">
                <h1 className="text-white">Hire Me.</h1>
                <p className="text-break text-white">
                I am available for freelance work. Connect with me via phone: <a style = {{color : 'red'}}> 01923 088574 </a> or email: <a style = {{color : 'red'}}>admin@example.com</a>
                </p>
              </div>
              
              <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <FormControl fullWidth action="#" >
      <CssTextField fullWidth inputProps={{ style: { color: "white" } }} label="Name" id="name" className="my-2 " type="text" required autoComplete="off"/>
      <CssTextField fullWidth inputProps={{ style: { color: "white" } }} label="Email" id="email" className="my-2 " type="email" required autoComplete="off"/>
      <CssTextField fullWidth inputProps={{ style: { color: "white" } }} label="Write a Subject" id="subject"className="my-2 " type="text" required autoComplete="off" />
      <CssTextField fullWidth inputProps={{ style: { color: "white" } }} label="Message" id="message"   multiline
          rows={4} className="my-2 " type="text" required autoComplete="off"/>
          <Button style={{width:'25%'}} sx = {{backgroundColor : '#a9a9a9' , color : '#22577a' , fontWeight : 'bold'}} variant="contained" type="submit" endIcon={<SendIcon />}>
            Send
          </Button>
      </FormControl>
          </Box>
            </section>
          </MDBCol>

          <MDBCol className="mb-5 col-12 col-lg-6 mx-auto">
            <section className="text-start d-flex flex-columnn justify-content-center  lg:w-full lg:py-40 lg:text-left">
              
              <div className="mx-auto">
                <img
                  src={profile}
                  alt="profile.jpg"
                  className="shadow-4-strong w-100 h-100  my-5 mx-auto rounded-4 border border-5 "
                />
              </div>
            </section>
          </MDBCol>
        </MDBRow>
        <footer className="bg-lightgray text-center text-black">
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
    </div>
  );
}

export default Portfolio;
