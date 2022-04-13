import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Cards.css";

export default function DoctorCard({handleClick,image, title,Speciality,price}) {
  return (
    <Card sx={{ maxWidth: 250 }} className="DoctorCard">
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt="doctor Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h6" color="secondary.main">
         {Speciality}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Cost per Appointment : ₹{price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={handleClick}>Book Appointments</Button>
       
      </CardActions>
    </Card>
  );
}