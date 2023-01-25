import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import React from "react"
import { Link } from "react-router-dom";
  


const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const {checkAuth, user} = useAuth()
    useEffect(()=>{
        checkAuth()
    },[])
    console.log(user);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    // console.log({user});

 const ADMIN = "magometovmustafa@gmail.com";
    return (
        
        <AppBar
       
        id="mbar"
      sx={{ padding: "20px 36px", width: "100%" }}
      position="static"
    >
      <Container maxWidth="100%">
        <Toolbar id="tbar" disableGutters>
          <img
            src="https://www.life-line.ru/local/templates/general/redesign_v2/img/new-design/logo-ll.svg"
            alt=""
          />
          <Box>
        
            <Box id="bbar">
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/funde"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >    
                  </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/medicine"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Фонд
              </Typography>

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/medicine"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Медицина
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"


                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Дети
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Контакты
              </Typography>
            
            <Link
              
              to="/admin"
            >
           <Typography  style={{
                color: "red",
                margin: "0 10px",
                textDecoration: "underline",
              }}>   Admin</Typography>
            </Link>
          
            </Box>
            <div style={{marginLeft: '220px'}}>
                {user ? <div>{user}</div>: null}
            </div>
            <Box id="nbtns">
              <Button id="nbbtn" sx={{ color: "#007aff" }}>
                Хочу помочь
              </Button>
              <Button id="nbbtn2" sx={{ marginLeft: "17px" }}>
                Нужна помощь
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;