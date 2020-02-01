import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoggin } from '../actions/actionCreator';
import Dashboard from './Dashboard';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        const { username, password } = this.state;
        const credentials = {
            username: username,
            password: password
        }
        var isValid = true;

        if(!username || username === '') {
            document.querySelector('.username-error-msg').innerHTML = 'Please enter your username';
            isValid = false
        } 
        if(!password || password === '') {
            document.querySelector('.password-error-msg').innerHTML = 'Please enter your password';
            isValid = false
            }
        if(isValid) {
            this.props.dispatch(userLoggin(credentials));
        }
        
    }

    render() {
        const { isLoggedIn,errorMsg } = this.props;
        return (
            isLoggedIn ? <Dashboard /> : 
            <div>
                <form onSubmit={this.handleSubmit} className="form-container">
                    <input type="text" name="username" onChange={this.handleChange} placeholder="Username" />
                    <p className="username-error-msg"></p>
                    <input type="password" name="password" onChange={this.handleChange} placeholder="Password" />
                    <p className="password-error-msg"></p>
                    <p className="error-msg">{errorMsg}</p>
                    <button type="submit" onClick={this.handleValidation}>Submit</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        errorMsg: state.errorMsg
    }
}

export default connect(mapStateToProps)(Login);