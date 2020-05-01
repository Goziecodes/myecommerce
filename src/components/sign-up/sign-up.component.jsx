import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
// import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import {signUpStart} from '../../redux/user/user.actions';

import './sign-up.style.scss';

const SignUp = ({signUpStart}) => {
const [userCredentials, setUserCredentials ] = useState({displayName: '', email: '', password: '', confirmPassword: ''});
const {displayName, email, password, confirmPassword} = userCredentials;
     
  const handleSubmit = async (event) =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('passwords dont match');
            return;
        }
        // console.log(email, password)
        signUpStart({email, password, displayName});

        // try{
        //     const {user} = await auth.createUserWithEmailAndPassword(email,password);
        //   await createUserProfileDocument(user, {displayName});
          
        //   this.setState({
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''  
        //   })

        // } catch(error){
        //     console.error(error);

        // }
        // this.setState = {
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        // }
    };

   const handleChange = (event) => {
        const {name, value} = event.target;

        setUserCredentials({
            ...userCredentials, 
            [name]: value
        })

        // console.log(this.state);
    };

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
            
            {/* <form className="sign-up-form" onSubmit={signUpStart} > */}
            <form className="sign-up-form" onSubmit={handleSubmit} >
                <FormInput
                    type = 'text'
                    name = 'displayName'
                    value = {displayName}
                    onChange = {handleChange}
                    label = 'User Name'
                >
                </FormInput>
                <FormInput
                    type = 'email'
                    name = 'email'
                    value = {email}
                    onChange = {handleChange}
                    label = 'Email'
                >
                </FormInput>
                <FormInput
                    type = 'password'
                    name = 'password'
                    value = {password}
                    onChange = {handleChange}
                    label = 'password'
                >
                </FormInput>
                <FormInput
                    type = 'password'
                    name = 'confirmPassword'
                    value = {confirmPassword}
                    onChange = {handleChange}
                    label = 'Confirm Password'
                >
                </FormInput>

                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
            
            </div>

        )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})


export default connect(null,mapDispatchToProps)(SignUp);