import React from "react";
import {AppBar} from '@mui/material';
import { Toolbar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    return(
        <AppBar position="Fixed" style={
         {
            backgroundColor: '#2f2f2f',
            boxShadow: 'none',
            padding: '10px 0px'
        }
        }>

        </AppBar>
    );
}

export default Header;