import React from 'react';
import './topbar.css';
import Avatar1 from "./../../Images/avatar.png";
import { Avatar } from "@material-ui/core";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AddIcon from '@mui/icons-material/Add';
import MainLogo from "./../../Images/MainLogo.png"
class Topbar extends React.Component {
    render(){
        return(
            <div class = 'dashboardTopbar'>
            <img className="TopbarLogo" alt="  Project Hub" src={MainLogo} />
              
                <div class = 'dashboardEndbutton'>
                  <AddIcon />
                    <NotificationsActiveIcon />
                    <Avatar className="avatarItems" src= {Avatar1}/>
                </div>
            </div>
        )
    }
}

export {Topbar}