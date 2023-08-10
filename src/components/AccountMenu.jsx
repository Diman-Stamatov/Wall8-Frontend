import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useAuth } from "../context/AuthContext";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function AccountMenu() {
  const { user, logoutUser } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const ThemeSwitch = () => {
    return (
      <label className="relative inline-flex items-center mb-5 cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    );
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
            srcSet="src\assets\money-3722123_640.png"
            sx={{ width: 40, height: 40 }}
          ></Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          mt: 1,
          "& .MuiMenu-paper": {
            width: "20ch",
            backgroundColor: "paleturquoise",
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
        <MenuItem>
          Theme
          <div className="relative left-2.5 top-2.5 ml-8">
            <ThemeSwitch />
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
