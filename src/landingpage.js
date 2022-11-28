import CV from './CV.png'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
}
from 'mdb-react-ui-kit';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
function Landingpage() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <MDBContainer className="my-5 gradient-form position-relative" style={{top:'60px'}}>

    <MDBRow className="d-flex flex-column flex-lg-row ">

      <MDBCol col='6' className="mb-5">
      <section className="text-start d-flex flex-column lg:w-full lg:py-40 lg:text-left">
        <div className='p-4 mt-md-5 mt-md-2'>
            <h1 className='text-break'><span className=" " style={{ fontSize:'5rem',fontWeight:'bold',marginRight:'4px'}}>Easy</span><span className="text-wrap " style={{ color:'orange', marginLeft:'4px',marginRight:'4px'}}>Way to Make</span><span className="text-wrap " style={{fontSize:'5rem', fontWeight:'bold', marginLeft:'4px'}}>Your Cv</span></h1>
        </div>
        <div className='p-4'>
            <p className="">Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."</p>
        </div>
        </section>

        

      </MDBCol>

      <MDBCol col='6' className="mb-5">
        <img src={CV} alt="cv.png" className='w-100 h-100 mx-auto'/>

      </MDBCol>

    </MDBRow>
    <MDBRow className='pb-4 d-flex flex-row flex-wrap mx-auto'>
        <MDBCol  className="my-3 col-12 col-md-6 col-lg-4">
        <Card sx={{ maxWidth: 345 }} className="mx-auto">
      <CardActionArea onClick={()=>navigate('/PersonalInformation')}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6 bold" component="div" style={{fontWeight:'bold' ,color:'#4338ca'}}>
            CV Generator
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
        </MDBCol>
        <MDBCol  className="my-3 col-12 col-md-6 col-lg-4 ">
        <Card sx={{ maxWidth: 345 }} className="mx-auto">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6 bold" component="div" style={{fontWeight:'bold' , color:'#4338ca'}}>
            Portfolio Generator
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
        </MDBCol>
        <MDBCol className="my-3 col-12 col-md-6 col-lg-4 ">
        <Card sx={{ maxWidth: 345 }} className="mx-auto">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{fontWeight:'bold' , color:'#4338ca'}}>
            Live Portfolio
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
        </MDBCol>
    </MDBRow>

  </MDBContainer>
  </>
);
}

export default Landingpage;
