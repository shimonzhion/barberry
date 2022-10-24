import "./ContactUs.css";
import React from "react";
import { TextField ,Button} from "@mui/material";

function ContactUs() {

  return (

    <div className="div-container bg-black  d-flex justify-content-center"> 

         <div className="contact-us">
      <div className="div-form d-flex flex-column align-items-center">
      <h1>ContactUs</h1>
      
      <form className="form-contact " action="https://formsubmit.co/shimonb055@icloud.com" method="POST" >
      <TextField className="inputs "  label="name" variant="outlined" type="text" />
      <TextField className="inputs "  label="email" variant="outlined" type="email" />
      <TextField className="inputs "  label="phone number" variant="outlined" type="phone" />
      <TextField className="inputs "  label="massage" variant="outlined" type="text" />
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
