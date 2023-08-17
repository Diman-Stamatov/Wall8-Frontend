import * as React from "react";
import { useContext, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useAuth } from "../context/AuthContext";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Switch from "react-switch";
import { ThemeContext } from "../ThemeProvider";

export default function AccountMenu() {
  const { user, logoutUser } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { toggleTheme, theme } = useContext(ThemeContext);
  
  const [switchState, setSwitchState] = useState(theme === "dark");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemThemeChange = () => {
    toggleTheme();
    setSwitchState((prevSwitchState) => !prevSwitchState);
  };
  const handleOnChange = () =>{

  };
  return (
    <React.Fragment>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            src={user.data.photoUrl}
            sx={{ width: 40, height: 40 }}
          ></Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          mt: 1,
          "& .MuiMenu-paper": {
            width: "20ch",

            backgroundColor: theme === "light" ? "#FFFFFF" : "#090030",
            color: theme === "light" ? "#000000" : "#FFFFFF",
            boxShadow: "0 0 10px 0 rgba(0,0,0,.1)",
          },
          "& .MuiMenu-List": { padding: "0" },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar srcSet={user.data.photoUrl} className="shadow-md" />{" "}
          <span className="ml-3">My Account</span>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuItemThemeChange}>
          Dark Mode
          <div className="relative left-auto top-auto ml-2">
            <Switch checked={switchState} onChange={handleOnChange} />
          </div>
        </MenuItem>
        <MenuItem onClick={logoutUser}>
          Logout
          <LogoutIcon className="ml-11" />
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
