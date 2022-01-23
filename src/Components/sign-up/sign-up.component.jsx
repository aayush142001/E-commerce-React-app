import React from 'react';

import FormInput from '../Form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';

import {auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmpassword : '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmpassword} = this.state;

        if(password !== confirmpassword){
            alert("Passwords do not match, please try again.");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmpassword : '',
            });

        }catch(error){
            console.log(error)
        }
    }

    handleChange = (event) => {
        const { name , value } = event.target;
        this.setState({[name] : value});
    }
    render(){
        const {displayName, email, password, confirmpassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className = "title">I do not have an account.</h2>
                <span className= "title">Sign up with email and Password</span>
                <form className = "sign-up-form" onSubmit = {this.handleSubmit}>
                    <FormInput 
                    type = "text" 
                    name = "displayName" 
                    value = {displayName} 
                    handleChange = {this.handleChange} 
                    label = "Display Name"
                    required 
                    />
                    <FormInput 
                    type = "email" 
                    name = "email" 
                    value = {email} 
                    handleChange = {this.handleChange} 
                    label = "Email"
                    required 
                    />
                    <FormInput 
                    type = "password" 
                    name = "password" 
                    value = {password} 
                    handleChange = {this.handleChange} 
                    label = "Password"
                    required 
                    />
                    <FormInput 
                    type = "password" 
                    name = "confirmpassword" 
                    value = {confirmpassword} 
                    handleChange = {this.handleChange} 
                    label = "Confirm Password"
                    required 
                    />
                    <CustomButton type = "submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;