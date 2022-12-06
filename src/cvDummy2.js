import Navbar from './Navbar'
import React from 'react'
import bg from './img/bg.jpg'
import Pdf from "react-to-pdf";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';


function Demi2(){

    const useLoc = useLocation();
    const ref = React.createRef();
    const navigate = useNavigate();
    

    let data = useLoc.state;
    console.log(data);

    return(
        <>
        <div style = {{backgroundColor : '#a9a9a9'}}>
        <Navbar/>
        <div ref={ref} style={{ marginLeft:'21%',marginRight:'21%', top:'80px',fontFamily:'Macan,Helvetica Neue,Helvetica,Arial,sans-serif'}} className="position-relative" >
        <div className='d-flex flex-column flex-md-row' style={{backgroundColor:'#f5f5f5'}}>
       
       
       
        
        <div className="col-sm-12 col-md-4" style={{backgroundColor:'#a9a9a9' }}>
        <div className='w-50 mx-auto my-2'>
        <img src={bg} alt="dp" width="120px" height="120px" style={{margin:'auto',borderRadius:'50%'}}/>
        </div>
            <div style={{paddingLeft:'8px'}} className="my-3 ">
        <div className='my-3 px-2 text-center'>
            <h2> {data.firstName} {data.lastName} </h2>
           
        </div>
        <div className='border my-4' style={{marginLeft:'-8px'}}></div>
        <div>
            <h3> Personal Informs</h3>
            <ul>
                <li> {data.address} </li>
                <li> {data.city} , {data.district} , {data.postalCode} </li>
                <li> {data.telephoneNumber} </li>
                <li> {data.email} </li>
                <li> {data.gender} </li>
                <li> {data.nationality} </li>
                <li> 09/11/1996 </li>
                </ul>
        </div>
        <div className='border my-3' style={{marginLeft:'-8px'}}></div>
       
        <div>
            <h3>About Yourself</h3>
            <ul>
                <li> {data.aboutYourself} </li>
    
                </ul>
        </div>
        <div className='border my-3' style={{marginLeft:'-8px'}}></div>
        <div>
            <h3>Skills</h3>
            <ul>
                <li> {data.skill} </li>
                
                </ul>
        </div>
        <div className='border my-3' style={{marginLeft:'-8px'}}></div>
        <div>
            <h3>Languages</h3>
            <ul>
                <li> {data.professionalProficiency} </li>
                
                </ul>
        </div>
        <div className='border my-3' style={{marginLeft:'-8px'}}></div>
        <div>
            <h3>Interests</h3>
            <ul>
                <li> {data.interest} </li>
                
                </ul>
        </div>
        
        </div>
       
        </div>
        <div className="col-sm-12 col-md-8" >
        
        <div className='mx-4'>
            <div className="mx-auto my-4"><h1 className='text-center'>Education and Work</h1></div>
            <div className='border my-4'></div>

        <h2 >Education </h2>
        <ul>
            <li> {data.studyProgram} </li>
            <li> {data.iopoe} </li>
            <li> {data.city2} </li>
            <li> {data.country} </li>
            <li> GPA : {data.gpa} </li>
        </ul>
         <div className='border my-4'></div>
         <h2 >Work Experience</h2>
         <ul>
            <li> {data.title} </li>
            <li> {data.workPlace} </li>
            <li> {data.city1} </li>
            <li> {data.country1} </li>
            <li> {data.task} </li>
        </ul>
        <div className='border my-4'></div>
         <h2 >Certificates</h2>
         <ul>
            <li> {data.certificate} </li>
            
        </ul>
        </div>
    
    </div>
    </div>
    
   
        </div>
        
        
        
        </div>
        <div style = {{backgroundColor : '#a9a9a9'}}>
        <Button variant = "contained" onClick={()=> navigate('/cvDemi' , {state : data})} style={{marginTop:'1%',marginBottom:'1%', marginLeft : '60%' , backgroundColor : '#22577a'}}>Use another Format</Button>
        <Button variant = "contained" onClick={()=> navigate('/portfolio' , {state : data})} style={{marginTop:'1%',marginBottom:'1%', marginLeft : '1%' , backgroundColor : '#22577a'}}> Portfolio </Button>
        <Pdf targetRef={ref} filename="Cv.pdf">
        {({ toPdf }) => <Button variant = "contained" style = {{backgroundColor : '#22577a' , marginLeft : '1%'}} onClick={toPdf}>Generate Pdf</Button>}
      </Pdf>
      </div>
        </>
        
    );
}
export default Demi2;