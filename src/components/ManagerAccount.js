import React from 'react';

export default class ManagerAccount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            accounts:[]
        }
    }
    componentDidMount(){
        axios.get('accounts')
            .then(res =>{
                this.setState({
                    accounts : res.data
                })
            })
            .catch(err =>{
                console.log(err);
            });
    }
    render(){
        return(

        );
    }
}