import Navbar from './Navbar'
import React from 'react'
import bg from './img/bg.jpg'
import Pdf from "react-to-pdf";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

function Demi(){

    const useLoc = useLocation();
    const ref = React.createRef();
    const navigate = useNavigate();

    let data = useLoc.state;
    console.log(data);

    return(
        <div style = {{backgroundColor : 'gray'}}>
        <Navbar/>
        <div ref={ref} style={{marginLeft:'21%',marginRight:'21%' , backgroundColor : 'lightgray' , height : '175vh'}} >
        <div className='bg'>
        <img src={bg} alt="dp" width="150px" height="150px" style={{position:'absolute',bottom:'-40%',left:'5%',borderRadius:'50%',border:'4px solid white',zIndex:'50'}}/>
        <div style={{height:'200px'}}></div>
        <span style={{position:'absolute',bottom:'1%',left:'25%',color:'black'}}><h1> {data.firstName} {data.lastName} </h1> <div> {data.professional} </div></span>
        <div style={{backgroundColor:'black',padding:'3%', borderTop:'1px transparent'}}>
        <span ><p style={{paddingLeft:'23%',color:'white'}}> {data.aboutYourself} </p></span>
        </div>
        
        <div style={{ display:'flex',justifyContent:'space-around',backgroundColor:'teal',padding:'2%'}}>
        
            <div style = {{marginRight : '10%'}}>
            <p style={{color:'white'}}> {data.email} </p>
            <p style={{color:'white'}}> {data.address} </p>
            </div>
            <div style = {{marginRight : '10%'}} >
            <p style={{color:'white'}}> {data.telephoneNumber} </p>
            <p style={{color:'white'}}> 09/11/1991 </p>
            </div>
        
        </div>

        </div>
        <div style={{display:'flex', justifyContent:'space-between',position:'relative', marginTop:'23%',paddingBottom:'8%',paddingTop:'10%',paddingLeft:'6%',paddingRight:'6%',}}>
            <div>
            <div>
            <h3>Gender</h3>
            <ul>
                <li> {data.gender} </li>
                
                </ul>
        </div>
        <div>
            <h3>City and District</h3>
            <ul>
                <li> {data.city} , {data.district} </li>
                
                </ul>
        </div>
            <div>
            <h3>Nationality and PostalCode</h3>
            <ul>
                <li> {data.nationality} , {data.postalCode} </li>
                
                </ul>
        </div>
        
        
        <div>
            <h3>Education</h3>
            <ul>
                <li> {data.studyProgram} </li>
                <li> {data.iopoe} </li>
                <li> {data.city2} , {data.country} </li>
                <li> GPA : {data.gpa} </li>
                </ul>
        </div>
        <div>
            <h3>Skills</h3>
            <ul>
                <li> {data.skill} </li>
                
                </ul>
        </div>
        
        
        
        </div>


        <div>
        <div>
            <h3>Work Experience</h3>
            <ul>
                <li> {data.title} </li>
                <li> {data.workPlace} </li>
                <li> {data.city1} , {data.country1} </li>
                <li> {data.task} </li>
                </ul>
        </div>
        
        <div>
            <h3>Certificate</h3>
            <ul>
                <li> {data.certificate} </li>
                
                </ul>
        </div>
        
        <div>
            <h3>Languages</h3>
            <ul>
                <li> {data.professionalProficiency} </li>
                
                </ul>
        </div>
        <div>
            <h3>Interests</h3>
            <ul>
                <li> {data.interest} </li>
                
                </ul>
        </div>
        </div>
        </div>
                </div>
                <Button variant = "contained" onClick={()=> navigate('/cvDummy2' , {state : data})} style={{marginTop:'1%',marginBottom:'1%', marginLeft : '60%' , backgroundColor : '#22577a'}}>Use another Format</Button>
                <Button variant = "contained" onClick={()=> navigate('/portfolio' , {state : data})} style={{marginTop:'1%',marginBottom:'1%', marginLeft : '1%' , backgroundColor : '#22577a'}}> Portfolio </Button>
        <Pdf targetRef={ref} filename="Cv.pdf">
        {({ toPdf }) => <Button variant = "contained" style = {{backgroundColor : '#22577a' , marginLeft : '1%'}} onClick={toPdf}>Generate Pdf</Button>}
      </Pdf>
        </div>
    );
}
export default Demi;