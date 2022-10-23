import "./ContactUs.css";
import React from "react";
import { TextField ,Button} from "@mui/material";

function ContactUs() {

  return (

    <div className="div-container bg-black bg-opacity-100 d-flex justify-content-center"> 

         <div className="contact-us">
      <div className="div-form d-flex flex-column align-items-center">
      <h1>ContactUs</h1>
      
      <form className="form-contact " action="https://formsubmit.co/shimonb055@icloud.com" method="POST" >
      <TextField className="inputs mb-5" id="outlined-basic" label="name" variant="outlined" type="text" />
      <TextField className="inputs mb-5" id="outlined-basic" label="email" variant="outlined" type="email" />
      <TextField className="inputs mb-5" id="outlined-basic" label="phone number" variant="outlined" type="phone" />
      <TextField className="inputs mb-5" id="outlined-basic" label="massage" variant="outlined" type="text" />
      <Button variant="contained" type="submit" >
  Send
</Button>
    </form>
    </div>
    </div>
    </div>

  );
};

export default ContactUs;
