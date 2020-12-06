import React from 'react';
import axios from 'axios';
import './../style/login.css';
import 'font-awesome/css/font-awesome.min.css';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          username: '',
          password: '',
          loggedIn: false
        }
      }
      
      handleSubmit = e =>{
        e.preventDefault();
        const data = {
          username : this.username,
          password : this.password
        }
        axios.post('login', data)
          .then(res => {
            window.sessionStorage.setItem('token',res.data.accessToken);
            window.localStorage.setItem('user',this.username);
            this.setState({
                loggedIn: true
            })
          })
          .catch(err =>{
              console.log(err)
          });
      }
  
    render() {
        if(this.state.loggedIn){
            return <Redirect to = '/home' />
        }
      return (
            <div className="center-container">
                <div className="header-w3l">
                    <h1>Manager Bank</h1>
                </div>
                <div className="main-content-agile">
                    <div className="sub-main-w3">	
                        <div className="wthree-pro">
                            <h2>Login</h2>
                        </div>
                        <form onSubmit = {this.handleSubmit}>
                            <div className="pom-agile">
                                <input placeholder="Username" 
                                        name="username" 
                                        className="user" 
                                        type="text" 
                                        required=""
                                        onChange = {e => this.username = e.target.value}/>
                                <span className="icon1"><i className="fa fa-user" aria-hidden="true"></i></span>
                            </div>
                            <div className="pom-agile">
                                <input  placeholder="Password" 
                                        name="password" 
                                        className="pass" 
                                        type="password" 
                                        required=""
                                        onChange = {e => this.password = e.target.value}/>
                                <span className="icon2"><i className="fa fa-unlock" aria-hidden="true"></i></span>
                            </div>
                            <div className="sub-w3l">
                                <div className="right-w3l">
                                    <input type="submit" value="Login"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer">
                    <p>@Manager Bank-Group 10</p>
                </div>
            </div>
      );
    }
}