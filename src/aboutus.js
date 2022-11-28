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
        <>
        <Navbar/>
        <div className='aboutheader position-relative  py-4 text-center w-100' style={{top:'60px',height:'400px'}}>
        <div className="px-4 py-2" style={{backgroundColor:'lightgray',opacity:'0.8'}}>  
              <h1 className='my-4 py-2'>About Us </h1>
        <p className=' w-50 mx-auto '>Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn't interrupt the user experience, and they don't require user input to disappear.</p>
        </div>

        </div>
        
        <div className=' p-4 position-relative ' style={{top:'60px'}}>
        <h2 className='my-4 py-4 text-center'>Features</h2>
        <div className='d-flex flex-row justify-content-around p-4 my-4 flex-wrap'>
        <Card sx={{ maxWidth: 345 }} className="my-2">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={story}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CvMaker
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PDF Generator
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Portfolio Generator
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
        <div className=' px-4 position-relative' style={{top:'60px',backgroundColor:'honeydew'}}>
        <h2 className='my-4 py-4 text-center'>Meet Our Team</h2>
        <div className='d-flex flex-row justify-content-around p-4 my-4 flex-wrap'>
        <Card sx={{ maxWidth: 345 }} style={{boxShadow:'none'}} className="my-2">
      <CardActionArea>
        <div style={{height:'140px'}}  className="text-center">
        <img width="120px" height="120px" className='my-4'
          src={bg} style={{borderRadius:'50%'}}
          alt="bg"
        />
        </div>
        <CardContent style={{marginTop:'40px', textAlign:'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            Person 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow:'none'}} className="my-2">
      <CardActionArea>
      <div style={{height:'140px'}}  className="text-center">
        <img width="120px" height="120px" className='my-4'
          src={bg} style={{borderRadius:'50%'}}
          alt="bg"
        />
        </div>
        <CardContent style={{marginTop:'40px', textAlign:'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            Person 2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} style={{boxShadow:'none'}} className="my-2">
      <CardActionArea>
      <div style={{height:'140px'}}  className="text-center">
        <img width="120px" height="120px" className='my-4'
          src={bg} style={{borderRadius:'50%'}}
          alt="bg"
        />
        </div>
        <CardContent style={{marginTop:'40px', textAlign:'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            Person 3
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
        </>
    )
}
export default About;