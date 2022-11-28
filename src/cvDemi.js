import Navbar from './Navbar'
import React from 'react'
import bg from './img/bg.jpg'
import Pdf from "react-to-pdf";
import { useNavigate } from "react-router-dom";
function Demi(){
    const ref = React.createRef();
    const navigate = useNavigate();

    return(
        <>
        <Navbar/>
        <div ref={ref} style={{marginLeft:'21%',marginRight:'21%'}} >
        <div className='bg'>
        <img src={bg} alt="dp" width="150px" height="150px" style={{position:'absolute',bottom:'-40%',left:'5%',borderRadius:'50%',border:'4px solid white',zIndex:'50'}}/>
        <div style={{height:'200px'}}></div>
        <span style={{position:'absolute',bottom:'1%',left:'25%',color:'white'}}><h4>Muhammad Arshad</h4></span>
        <div style={{backgroundColor:'black',padding:'3%', borderTop:'1px transparent'}}>
        <span ><p style={{paddingLeft:'23%',color:'white'}}>787 East Fordham Street
Old Bridge, NJ 08857</p></span>
        </div>
        <div style={{display:'flex',justifyContent:'space-around',backgroundColor:'teal',padding:'2%'}}>
        
            <div >
            <p style={{color:'white'}}>abc@gmail.com</p>
<p style={{color:'white'}}>787 East Fordham Street
Old Bridge, NJ 08857<br/> 787 East Fordham Street
Old Bridge, NJ 08857</p>
            </div>
            <div  >
            <p style={{color:'white'}}>+9203123456</p>
<p style={{color:'white'}}>787 East Fordham Street
Old Bridge, NJ 08857<br/> 787 East Fordham Street
Old Bridge, NJ 08857</p>
            </div>
        
        </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between',position:'relative', marginTop:'23%',paddingBottom:'8%',paddingTop:'10%',paddingLeft:'6%',paddingRight:'6%',}}>
            <div>
        <div>
            <h3>Education</h3>
            <ul>
                <li>education</li>
                <li>education</li>
                <li>education</li>
                <li>education</li>
                </ul>
        </div>
        <div>
            <h3>Work Experience</h3>
            <ul>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                </ul>
        </div>
        </div>
        <div>
       
        <div>
            <h3>Skills</h3>
            <ul>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                </ul>
        </div>
        <div>
            <h3>Awards</h3>
            <ul>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                </ul>
        </div>
        <div>
            <h3>Certificate</h3>
            <ul>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                </ul>
        </div>
        <div>
            <h3>Interests</h3>
            <ul>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                </ul>
        </div>
        </div>
        </div>
                </div>
                <button onClick={()=> navigate('/cvDummy2')} style={{marginTop:'1%',marginBottom:'1%'}}>Use another Format</button>

        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
        </>
    );
}
export default Demi;