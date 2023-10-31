import React, {useState, useContext, useCallback} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ListItem
} from '@mui/material';
import {IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ReportIcon from '@mui/icons-material/Report';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import OutputIcon from '@mui/icons-material/Output'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SummarizeIcon from '@mui/icons-material/Summarize';
import {Domain, Download, Edit, FileUpload, People} from "@mui/icons-material";
import {useNavigate} from 'react-router-dom';
import {navigateHelper} from "../helpers/NavigiatorHelper";


const ITEM_HEIGHT = 48;

/**
 * This is the TopNavBar shows on every page.
 * @returns {JSX.Element}
 * @constructor
 */
function TopNavBar() {
  const navigator = useNavigate();
  const navigate = navigateHelper(navigator)


  return (
    <AppBar position="fixed" sx={{backgroundColor: 'rgb(39, 44, 52)', minHeight:"60px"}}>
      <ListItem key={'a'}>
        <ListItemButton sx={{ marginLeft: 15 }} onClick={() => navigate('/')}>
          <ListItemText primary={"Home"} />
        </ListItemButton>
        {/*<ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate('/Bella')}>*/}
        {/*  <ListItemText primary={"Bella"} />*/}
        {/*</ListItemButton>*/}
      </ListItem>
    </AppBar>
  )
}

export default TopNavBar;