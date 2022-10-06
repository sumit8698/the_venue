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
        }
        >
            <Toolbar>
                <div className= "Header_logo">
                    <div className="font_righteous header_logo_venu">The Venu</div>
                    <div className="header_logo_title">Musical Events</div>

                </div>
            </Toolbar>
            <IconButton
            aria-label="Menu"
            color="inherit"
            
            ><MenuIcon/>
            </IconButton>

        </AppBar>
    );
}

export default Header;