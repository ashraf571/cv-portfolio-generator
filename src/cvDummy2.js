import Navbar from './Navbar'
import React from 'react'
import bg from './img/bg.jpg'
import Pdf from "react-to-pdf";
import { useNavigate } from "react-router-dom";
function Demi2(){
    const ref = React.createRef();
    const navigate = useNavigate();

    return(
        <>
        <Navbar/>
        <div ref={ref} style={{marginLeft:'21%',marginRight:'21%', top:'80px',fontFamily:'Macan,Helvetica Neue,Helvetica,Arial,sans-serif'}} className="position-relative" >
        <div className='d-flex flex-column flex-md-row' style={{backgroundColor:'#f5f5f5'}}>
       
       
       
        
        <div className="col-sm-12 col-md-4" style={{backgroundColor:'darkgray' }}>
        <div className='w-50 mx-auto my-2'>
        <img src={bg} alt="dp" width="120px" height="120px" style={{margin:'auto',borderRadius:'50%'}}/>
        </div>
            <div style={{paddingLeft:'8px'}} className="my-3 ">
        <div className='my-3 px-2 text-center'>
            <h2>Muhammad Arshad</h2>
           
        </div>
        <div className='border my-4' style={{marginLeft:'-8px'}}></div>
        <div>
            <h3>Contact</h3>
            <ul>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                </ul>
        </div>
        <div className='border my-3' style={{marginLeft:'-8px'}}></div>
       
        <div>
            <h3>Skills</h3>
            <ul>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                </ul>
        </div>
        <div className='border my-3' style={{marginLeft:'-8px'}}></div>
        <div>
            <h3>Awards</h3>
            <ul>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                </ul>
        </div>
        <div className='border my-3' style={{marginLeft:'-8px'}}></div>
        <div>
            <h3>Certificate</h3>
            <ul>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                <li>experience</li>
                </ul>
        </div>
        <div className='border my-3' style={{marginLeft:'-8px'}}></div>
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
        <div className="col-sm-12 col-md-8" >
        
        <div className='mx-4'>
            <div className="mx-auto my-4"><h1 className='text-center'>Work Experience</h1></div>
            <div className='border my-4'></div>

        <h2 >Project</h2>
<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         <div className='border my-4'></div>
         <h2 >Project</h2>
<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<div className='border my-4'></div>
         <h2 >Project</h2>
<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>
    
    </div>
    </div>
    
   
        </div>
        <button onClick={()=> navigate('/cvDemi')} style={{marginTop:'1%',marginBottom:'1%',}}>Use another Format</button>
        <Pdf targetRef={ref} filename="code-example.pdf" >
        {({ toPdf }) => <button onClick={toPdf} style={{marginTop:'120px',marginBottom:'60px'}} >Generate Pdf</button>}
      </Pdf>
        </>
    );
}
export default Demi2;