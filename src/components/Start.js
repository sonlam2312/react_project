import React from 'react';
import './../style/start.css';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component{

    render(){    
        return(
            <Link to = '/login'>
                <div className = "login">
                    <span className="glyphicon glyphicon-log-in"></span>
                    <span>Login</span>
                </div>
            </Link>
        );
    }
}