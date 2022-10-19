import "./Barbers.css";
import React, { useContext,useState,useEffect } from "react";
import { barbersContext } from "../../../contexts/barbers-context";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { height, maxWidth } from "@mui/system";
import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';


function Barbers() {
  const {barbers} = useContext(barbersContext)
  const [visible,setVisible] = useState(3)

const showMoreItems = (showLess)=>{
  if(showLess== "showLess"){
 
    return 'show less'
  }
  if(visible >9){
  setVisible(3)
  }
  setVisible((prevValue)=> prevValue +3)
}


  console.log(barbers);
  return (
    <div className="bg-black barbers d-flex justify-content-center  ">
      <div className="div-cards d-flex flex-wrap xs-w-100 bg-danger" style={{width:"80%" ,}}>

      {
        barbers?.slice(0,visible).map(Item=>{
             return(  <Card className="card bg-dark mb-5  bg-opacity-25 text-light">
          <CardMedia
          className="img-card"
            component="img"
           
            image={Item.img}
            alt="barber-Img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Item.title}
            </Typography>
            <Typography className="text-light" variant="" color="text.secondary">
            {Item.location} 
            </Typography>
            <Typography className="text-warning" variant="h6" color="text.secondary">
            < GradeTwoToneIcon className="bg-dark bg-opacity-50 text-warning"/> {Item.stars}
            </Typography>
           
       
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">{Item.phone}</Button>
          </CardActions>
        </Card>)
        })
      }
     <div className="div-load-more">
     <Button variant="contained" disableElevation onClick={showMoreItems}>
     { visible <=9? 'Load more':showMoreItems()}
    </Button>
     </div>
      </div>
      
      </div>
)
};

export default Barbers;
