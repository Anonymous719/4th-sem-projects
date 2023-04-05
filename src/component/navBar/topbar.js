import React from 'react';
import './topbar.css';

class Topbar extends React.Component {
    render(){
        return(
            <div class = 'dashboardTopbar'>
                <h1>Project Hub</h1>
                <div class = 'dashboardEndbutton'>
                    <p>Home</p>
                    <p>Home</p>
                </div>
            </div>
        )
    }
}

export {Topbar}