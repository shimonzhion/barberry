import "./Home.css";
import { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "../../features/SignUp/SignUp";
import { usersContext } from "../../../contexts/users-context";
import SignInSide from "../../features/SingInSide/SingInSide";

const theme = createTheme();

const pictures=[
  'https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/7697390/pexels-photo-7697390.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/7388978/pexels-photo-7388978.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/7755216/pexels-photo-7755216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  
  ]
  
  const barberPictures= ()=>{
    const randomNum= Math.floor(Math.random()*4)
    return pictures[randomNum]
  }

function Home() {
  const { toggle, setToggle } = useContext(usersContext);
  const returnForm = (toggle) => {
    return toggle ? <SignUp />: <SignInSide /> ;
  };
  return (
    <ThemeProvider theme={theme} >
      <Grid container component="main" sx={{ height: "100vh" }} >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{ 
           backgroundImage: `url(${barberPictures()})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: 'dark',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
       
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {returnForm(toggle)}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Home;
