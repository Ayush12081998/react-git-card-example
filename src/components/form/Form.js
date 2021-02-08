import React from "react";
import './Form.css';
import axios from 'axios';

class Form extends React.Component{
    // userNameInput = React.createRef();
    state={
        userName: ''
    };
    handleSubmit = async (event)=>{
        event.preventDefault();
        // console.log(this.userNameInput.current.value);
        console.log(this.state.userName);
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        // console.log(response.data);
        this.props.onSubmit(response.data);
    };
    render(){
        return(
            <div>
                <form className="formContainer" onSubmit={this.handleSubmit}>
                    <label for="fname">Git Hub User Name</label>
                    <input
                    value={this.state.userName}
                    onChange={event => this.setState({userName: event.target.value})}
                    type="text"
                    id="fname"
                    placeholder="user name.."
                    required/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default Form