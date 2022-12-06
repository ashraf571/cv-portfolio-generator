import React from 'react'
import Navbar from './Navbar'
import story from './img/story.png'
import resume from './img/resume.jpg'
import profile from './img/profile.jpg'
import bg from './img/bg.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function About(){
    return(
        <div style = {{backgroundColor : 'lightgray'}}>
        <Navbar/>
        <div className='aboutheader position-relative  py-4 text-center w-100' style={{top:'60px',height:'400px'}}>
        <div className="px-4 py-2" style={{backgroundColor:'#a9a9a9',opacity:'0.8'}}>  
              <h1 style = {{color : 'black'}} className='my-4 py-2'>About Us </h1>
        <p style = {{color : 'black'}} className=' w-50 mx-auto '>Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn't interrupt the user experience, and they don't require user input to disappear.</p>
        </div>

        </div>
        
        <div className=' p-4 position-relative ' style={{top:'60px'}}>
        <h2 style = {{color : 'black'}} className='my-4 py-4 text-center'>Features</h2>
        <div className='d-flex flex-row justify-content-around p-4 my-4 flex-wrap'>
        <Card sx={{ maxWidth: 345 }} className="my-2">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={story}
          alt="green iguana"
        />
        <CardContent style = {{backgroundColor : '#22577a' , color : '#a9a9a9'}}>
          <Typography gutterBottom variant="h5" component="div">
            Cv Maker
          </Typography>
          <Typography variant="body2" color="text.secondary" style = {{color : '#a9a9a9'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="my-2">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={profile}
          alt="green iguana"
        />
        <CardContent style = {{backgroundColor : '#22577a'}}>
          <Typography style = {{color : '#a9a9a9'}}  gutterBottom variant="h5" component="div">
            PDF Generator
          </Typography>
          <Typography variant="body2" color="text.secondary" style = {{color : '#a9a9a9'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} className="my-2">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={resume}
          alt="green iguana"
        />
        <CardContent style = {{backgroundColor : '#22577a'}}>
          <Typography style = {{color : "#a9a9a9"}} gutterBottom variant="h5" component="div">
            Portfolio Generator
          </Typography>
          <Typography variant="body2" color="text.secondary" style = {{color : '#a9a9a9'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
        <div className=' px-4 position-relative' style={{top:'60px',backgroundColor:'lightgray'}}>
        <h2 style = {{color : 'black'}} className='my-4 py-4 text-center'>Meet Our Team</h2>
        <div className='d-flex flex-row justify-content-around p-4 my-4 flex-wrap'>
        <Card sx={{ maxWidth: 345 }} style={{boxShadow:'none' , backgroundColor : '#22577a'}} className="my-2">
      <CardActionArea>
        <div style={{height:'140px'}}  className="text-center">
        <img width="120px" height="120px" className='my-4'
          src={bg} style={{borderRadius:'50%'}}
          alt="bg"
        />
        </div>
        <CardContent style={{marginTop:'40px', textAlign:'center' , backgroundColor : '#a9a9a9'}}>
          <Typography gutterBottom variant="h5" component="div" style = {{color : '#22577a'}}>
            Person 1
          </Typography>
          <Typography variant="body2" color="text.secondary" style = {{color : '#22577a'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow:'none' , backgroundColor : '#22577a'}} className="my-2">
      <CardActionArea>
      <div style={{height:'140px'}}  className="text-center">
        <img width="120px" height="120px" className='my-4'
          src={bg} style={{borderRadius:'50%'}}
          alt="bg"
        />
        </div>
        <CardContent style={{marginTop:'40px', textAlign:'center' , backgroundColor : '#a9a9a9'}}>
          <Typography gutterBottom variant="h5" component="div" style = {{color : '#22577a'}}>
            Person 2
          </Typography>
          <Typography variant="body2" color="text.secondary" style = {{color : '#22577a'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow:'none' , backgroundColor : '#22577a'}} className="my-2">
      <CardActionArea>
      <div style={{height:'140px'}}  className="text-center">
        <img width="120px" height="120px" className='my-4'
          src={bg} style={{borderRadius:'50%'}}
          alt="bg"
        />
        </div>
        <CardContent style={{marginTop:'40px', textAlign:'center' , backgroundColor : '#a9a9a9'}}>
          <Typography gutterBottom variant="h5" component="div" style = {{color : '#22577a'}}>
            Person 3
          </Typography>
          <Typography variant="body2" color="text.secondary" style = {{color : '#22577a'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
        </div>
    )
}
export default About;