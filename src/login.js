import {  BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import Navbar from './Navbar'
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
function LogIn() {
  const [Credintial,setCredintial] = useState({email:'',password:''});
  const onChange =(e)=>{
    setCredintial({ ...Credintial , [e.target.name]: e.target.value})
}
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [eyeShown, seteyeShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    seteyeShown(!eyeShown)
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const {email,password} = Credintial
    const response = await fetch('http://localhost:4000/api/auth/user/login', {
        
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         },
         body: JSON.stringify({email,password})
   
      });
      const json = await response.json();
        console.log(json);
      if(json.error){
        alert(json.error.message)
      }else{
        navigate('/')
      }
    }
  return (
    <>
    <Navbar/>
    <MDBContainer className="my-5 gradient-form position-relative" style={{top:'60px'}}>

    <MDBRow className="d-flex flex-column flex-lg-row">

      <MDBCol col='6' className="mb-5 ">
        <div className="d-flex flex-column">

          <div className="text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              style={{width: '185px'}} alt="logo" />
            <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
          </div>

          <p className="text-center">Please login to your account</p>
          
          <div className="text-center d-flex pt-1 mb-5 pb-1 mx-auto">
          <MDBBtn className='mx-3' style={{ backgroundColor: '#ecf2f7' }} href='#'>
        <h5><BsTwitter className="text-primary"/></h5>
        </MDBBtn>
          <MDBBtn className='mx-3' style={{ backgroundColor: '#ecf2f7' }} href='#'>
          <h5><FcGoogle/></h5>
         </MDBBtn>
        
          </div>
          <MDBContainer tag="form" onSubmit={handleSubmit}>
          <MDBInput wrapperClass='mb-4  mx-4' required style={{'backgroundColor': '#ecf2f7', }} label='Email address' id='form1' name="email" onChange={onChange} type='email'/>
          <MDBContainer className="d-flex position-relative align-items-baseline justify-content py-0 px-4"  >
          <MDBInput wrapperClass='mb-4 w-100' required style={{'backgroundColor': '#ecf2f7', }}  label='Password' name="password" onChange={onChange}  id='form2' type={passwordShown ? "text" : "password"} /><div className='position-absolute  end-0' style={{
            display:'flex',
            alignItems:'center',
            padding:'12px',marginRight:'40px',marginTop:'2px' ,background:'#ecf2f7',height:"30px",width:"30px"}}>
          <MDBIcon icon={eyeShown ? "eye":"eye-slash"} onClick={togglePassword}/>
          </div>
          </MDBContainer>

          <div className="text-end pt-1 mb-5 pb-1  mx-4">
            <MDBBtn className="mb-4 w-100 gradient-custom-2" type="submit">LogIn</MDBBtn>
            <a className="text-muted" href="#!">Forgot password?</a>
          </div>
          </MDBContainer>
          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p className="mb-0">Don't have an account?</p>
            <MDBBtn outline className='mx-2 btn-sign' color='primary' onClick={()=> navigate('/signup')}>
              Sign Up
            </MDBBtn>
          </div>

        </div>

      </MDBCol>

      <MDBCol col='6' className="mb-5">
        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
          
          <div className="text-white px-3 py-4 p-md-5 mx-md-4 bg-danger bg-opacity-50 h-75 d-flex flex-column  justify-content-center">
          <div className="text-center d-flex justify-content-center  pt-1 mb-5 pb-1 px-4">
          <div className=" p-4 p-md-5 mx-2  border rounded-circle bg-white border-danger"></div>
          <div className=" p-4 p-md-5 mx-2  border rounded-circle bg-white border-danger"></div>
          <div className=" p-4 p-md-5 mx-2  border rounded-circle bg-white border-danger"></div>
          </div>
            <h4 className="mb-4">We are more than just a company</h4>
            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
        </div>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
  </>
);
}

export default LogIn;
