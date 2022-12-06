import Navbar from './Navbar'
import {  BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import mainlogo from "./images/mainlogo.png";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
}
from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function SignUp() {
  // const [Credintial,setCredintial] = useState({email:'',password:'',name:'',cpassword:''});
  let navigate = useNavigate(); 
//   const onInputChange =(e)=>{
//     setCredintial({ ...Credintial , [e.target.name]: e.target.value})
    
// }
const handleSubmit = async (e)=>{
  e.preventDefault();
  const {name,email,password} = input
  const response = await fetch('http://localhost:4000/api/auth/user/signup', {
      
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       },
       body: JSON.stringify({name,email,password})
 
    });
    
    const json = await response.json();
    console.log("ajsdgahdjhasgd", json)
    if(json.error){
      alert(json.error.message)
    }else{
      navigate('/')
    }
   
      
  }
  const [confirmpasswordShown, setconfirmPasswordShown] = useState(false);
  const [confirmeyeShown, setconfirmeyeShown] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [eyeShown, seteyeShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    seteyeShown(!eyeShown)
  };
  const toggleconfirmPassword = () => {
    setconfirmPasswordShown(!confirmpasswordShown);
    setconfirmeyeShown(!confirmeyeShown)
  };
  const [input, setInput] = useState({
    email:'',
    name:'',
    password: '',
    confirmPassword: ''
  });
 
  const [error, setError] = useState({
   
    password: '',
    confirmPassword: ''
  })
 
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    let { name, value } = e.target;
    setError(Credintial => {
      const stateObj = { ...Credintial, [name]: "" };
 
      switch (name) {
       
 
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Passwords does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Passwords does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }
  return (
    <div style = {{backgroundColor : 'lightgray' , height : '160vh'}}>
    <Navbar/>
    <MDBContainer className="my-5 gradient-form position-relative" style={{top:'60px'}}>

    <MDBRow className="d-flex flex-column flex-lg-row ">

      <MDBCol col='6' className="mb-5">
        <div className="d-flex flex-column mb-4">

          <div className="text-center">
            <img src = {mainlogo}
              style={{width: '185px'}} alt="mainlogo" />
            <h4 style = {{color : ''}} className="pt-4 mb-4 pb-1">We are The Raising Team</h4>
          </div>

          <p className="text-center">Please SignUp to your account</p>
          
          <div className="text-center d-flex pt-1 mb-3 pb-1 mx-auto">
          <MDBBtn className='mx-3' style={{ backgroundColor: '#ecf2f7' }} href='#'>
        <h5><BsTwitter className="text-primary"/></h5>
        </MDBBtn>
          <MDBBtn className='mx-3' style={{ backgroundColor: '#ecf2f7' }} href='#'>
          <h5><FcGoogle/></h5>
         </MDBBtn>
          </div>

          <MDBContainer tag="form" className='mb-4' onSubmit={handleSubmit}>
          <MDBInput wrapperClass='mb-4  mx-4'  style={{backgroundColor: '#ecf2f7', color : '#22577a'  }}  onChange={onInputChange} label='Full Name' name="name" id='form1' type='text' required/>
          <MDBInput wrapperClass='mb-4  mx-4'  style={{backgroundColor: '#ecf2f7', color : '#22577a' }} onChange={onInputChange} label='Email address' name="email" id='form2' type='email' required/>
          <MDBContainer className="d-flex flex-column mb-2 py-0 px-4"  >
          <div>
            <div className="d-flex position-relative align-items-baseline justify-content">
          <MDBInput wrapperClass=' w-100' required style={{'backgroundColor': '#ecf2f7', }} value={input.password}
          onChange={onInputChange}
          onBlur={validateInput} label='Password'   id='form3' type={passwordShown ? "text" : "password"} name="password" /><div className='position-absolute  end-0' style={{
            display:'flex',
            alignItems:'center',
            padding:'12px',marginRight:'10px',marginTop:'2px' ,background:'#ecf2f7',height:"30px",width:"30px"}}>
          <MDBIcon icon={eyeShown ? "eye":"eye-slash"} onClick={togglePassword}/>
          </div>
          </div>
          </div>
          
         <span className='error'> {error.password && <span className='err'>{error.password}</span>}</span>
          
          </MDBContainer>
          
          <MDBContainer className="d-flex flex-column mb-2 py-0 px-4"  >
          <div>
            <div className="d-flex position-relative align-items-baseline justify-content">
          <MDBInput wrapperClass=' w-100' required style={{backgroundColor: '#ecf2f7', color : '#22755a' }} name="confirmPassword" value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}  label='Password'   id='form4' type={confirmpasswordShown ? "text" : "password"}/><div className='position-absolute  end-0' style={{
            display:'flex',
            alignItems:'center',
            padding:'12px',marginRight:'10px',marginTop:'2px' ,background:'#ecf2f7',height:"30px",width:"30px"}}>
          <MDBIcon icon={confirmeyeShown ? "eye":"eye-slash"} onClick={toggleconfirmPassword}/>
          </div>
          </div>
          </div>
          
          <span className='error'>{error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}</span>
          
          </MDBContainer>
          

          <div className="pt-1 mb-1 pb-1 mx-4">
            <MDBBtn style = {{backgroundColor : '#22577a' }} className=" mb-4 w-100" type="submit">Sign Up</MDBBtn>
          </div>
          </MDBContainer>
          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p style = {{color : ''}} className="mb-0">Already have an account?</p>
            <MDBBtn outline className='mx-2 btn-sign' style = {{color : '#22577a'}} onClick={()=> navigate('/login')}>
              LogIn
            </MDBBtn>
          </div>

        </div>

      </MDBCol>

      <MDBCol col='6' className="mb-5">
        <div style = {{backgroundColor : '#22577a'}} className="d-flex flex-column justify-content-center h-100 mb-4">
          
          <div style = {{backgroundColor : "#a9a9a9"}} className="text-white px-3 py-4 p-md-5 mx-md-4 h-75 d-flex flex-column justify-content-center">
          <div className=" d-flex justify-content-center flex-row  pt-1 mb-5 pb-1 px-4">
          <div className=" p-4  p-md-5 mx-2  border rounded-circle bg-white "></div>
          <div className=" p-4 p-md-5 mx-2  border rounded-circle bg-white "></div>
          <div className=" p-4 p-md-5 mx-2  border rounded-circle bg-white "></div>
          </div>
            <h4 style = {{color : 'black'}} className="mb-4">We are more than just a company</h4>
            <p style = {{color : 'black'}} className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
        </div>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
  </div>
);
}

export default SignUp;
