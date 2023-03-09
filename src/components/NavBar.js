import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchBar from './SearchBar';

import ContactModal from './ContactModal';
import AddCompanyModal from './AddCompanyModal';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});
export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (

    <AppBar position="static" sx={{
      backgroundColor: 'rgba(0,0,0,0.9)'
    }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },

              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Yeni Nesil Çalışma
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <ThemeProvider theme={darkTheme}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}

                sx={{
                  display: { xs: 'block', md: 'none' },

                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}

              >
                <MenuItem onClick={handleCloseNavMenu}  >
                  <Button variant="h6"
                    noWrap
                    component="a"
                    sx={{ my: 2, color: 'white', display: 'block' }} href="/">Ana Sayfa</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <AddCompanyModal />
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button variant="h6"
                    noWrap
                    component="a"
                    sx={{ my: 2, color: 'white', display: 'block' }} href="/about">Katkı Sağlayanlar</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} >
                  <ContactModal />
                </MenuItem>


              </Menu>
            </ThemeProvider>
          </Box>

          <Box sx={{
            flexGrow: 1, display: { xs: 'none', md: 'flex' },
          }}>
            {
              <Button
                variant="h6"
                noWrap
                component="a"
                href="/"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Ana Sayfa
              </Button>
            }
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
              <AddCompanyModal />
            }
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
              <Button
                variant="h6"
                noWrap
                component="a"
                href="/about"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Katkı Sağlayanlar
              </Button>
            }
          </Box>
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' }
          }}>
            {
              <ContactModal />
            }
          </Box>
          <SearchBar />
        </Toolbar>
      </Container>
    </AppBar>

  )
}   