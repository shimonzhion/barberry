import './Header.css';
import React, { useEffect, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { usersContext } from '../../../contexts/users-context';
import { useNavigate } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { useCart } from 'react-use-cart';

const drawerWidth = 240;

export default function Header() {
  const home = useNavigate();
  const { login, setLogin } = useContext(usersContext);
  const [auth, setAuth] = useState(login);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ['Store', 'ContactUs'];

  useEffect(() => setAuth(login), []);
  console.log(auth, 'header');

  const { isEmpty, totalItems,setTotalItems } = useCart();


  const handleChange = () => {
    setLogin(false);
    home('/');
    return setAuth(login);
  };

  useEffect(() => {}, [<Header />]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {/* user Img */}
        {auth && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-app-bar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        )}

        {/* logout button mobile menu */}
        <Box sx={{ display: { xs: 'block' } }}>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </Box>

        {/* menu button link */}
      </Typography>
      <Divider />
      <List>
        <ListItem key={'Barbers'} disablePadding>
          <ListItemButton href={`/`} sx={{ textAlign: 'center' }}>
            <ListItemText primary={'Barbers'} />
          </ListItemButton>
        </ListItem>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton href={`/${item}`} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" className="bg-dark">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              {auth && (
                <div className="d-flex">
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-app-bar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>

                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Button
                      href={`/Store`}
                      key={'Simple-ecart'}
                      sx={{ color: '#fff', border: '5px black solid' }}
                    >
                      {'Simple-ecart'}
                    </Button>
                  </Box>
                </div>
              )}
            </Typography>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={auth ? handleDrawerToggle : null}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            ></Typography>

            <Button
              href={`/Cart`}
              key={'cart'}
              sx={{ display: { xs: 'block', sm: 'none', color: '#fff' } }}
            >
              <BiCart size="2rem" />
              {!isEmpty && (
                <span
                  style={{
                    left: '-21px',
                    top: '-18px',
                    color: 'red',
                    fontSize: '19px',
                    fontWeight: '5px',
                    textShadow: '0px 0px 17px white',
                  }}
                >
                  {totalItems}
                </span>
              )}
            </Button>

            {auth ? (
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button href={`/Cart`} key={'cart'} sx={{ color: '#fff' }}>
                  <BiCart size="2rem" />
                  {!isEmpty && (
                    <span
                      style={{
                        position: 'relative',
                        left: '-1px',
                        top: '-11px',
                        color: 'red',
                        fontSize: '19px',
                        fontWeight: '5px',
                        textShadow: '0px 0px 12px white',

                        zIndex: '1',
                      }}
                    >
                      {totalItems}
                    </span>
                  )}
                </Button>

                <Button href={`/`} key={'Barbers'} sx={{ color: '#fff' }}>
                  {'Barbers'}
                </Button>

                {navItems.map((item) => (
                  <Button href={`/${item}`} key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Button>
                ))}
              </Box>
            ) : (
              ''
            )}

            {auth ? (
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={auth}
                      onChange={handleChange}
                      aria-label="login switch"
                    />
                  }
                  label={auth ? 'Logout' : 'Login'}
                />
              </Box>
            ) : (
              ''
            )}
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}></Box>
      </Box>
    </ThemeProvider>
  );
}
