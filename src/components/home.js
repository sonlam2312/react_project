import React from 'react';
import './../style/home.css';
import {Link} from 'react-router-dom';

export default class Home extends React.Component{
    render(){
        return(  
            <div>  
                <div className = "profile">
                    <i className = "fa fa-user-circle"></i>     
                    <span>{window.localStorage.getItem('user')}</span>
                </div> 
                <Link to = '/logout'>                
                    <div className = "logout">
                        <span className = "	glyphicon glyphicon-off"></span>
                        <span>Logout</span>
                    </div>                   
                </Link>      
                <div class="navbar">
                    <Link to ='/home'>Home</Link>
                    <ul class="nav navbar-nav">
                        <Link to ='/managercustomer'>Manager Customer</Link>
                        <Link to ='/managerstaff'>Manager Staff</Link>
                        <Link to ='/manageraccount'>Manager Account</Link>
                    </ul>
                </div>
            </div>
        );
    }
}