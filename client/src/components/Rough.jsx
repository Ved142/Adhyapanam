import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Resources from "./Resources";
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: "0px 0px 5px gray",
  borderRadius: "5px",
  backgroundColor:"lavender",
  p: 4,
};


const Rough = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

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

  return (
    <AppBar position="static" style={{backgroundColor:"#041C32"}}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Resources />
        </Box>
      </Modal>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2,fontFamily:'"Lobster", cursive', display: { xs: "none", md: "flex" } }}
          >
            Adhyapanam
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => {
                    console.log(props.rte);
                    navigate(`/loggedin/${props.rte}`);
                  }}
                >
                  Dashboard
                </Typography>
              </MenuItem>
              <MenuItem >
              <Typography
                  textAlign="center"
                  onClick={handleOpen}
                >
                  Resources
                </Typography>
            </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1,fontFamily:'"Lobster", cursive', display: { xs: "flex", md: "none" } }}
          >
            Adhyapanam
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                onClick={() => {
                  navigate(`/loggedin/${props.rte}`);
                }}
              >
                Dashboard
              </Typography>
            </MenuItem>
            <MenuItem >
              <Typography
                  textAlign="center"
                  onClick={handleOpen}
                >
                  Resources
                </Typography>
            </MenuItem>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={props.name} style={{backgroundColor: "#FF5959"}} src="https//vyvjbk.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => {
                    navigate("/")
                  }}
                >
                  Logout
                </Typography>
              </MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Rough.defaultProps = {
  name: "Rahul",
}

export default Rough;