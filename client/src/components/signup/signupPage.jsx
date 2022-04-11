import {useState} from 'react';
import { Link } from "react-router-dom";
import {useMutation} from '@apollo/client';
import {ADD_USER} from '../../utils/mutations'
import Auth from '../../utils/auth'



function SignUpPage() {

const [formState, setFormState] = useState(
    {first_name:``,last_name:``,username:``,email:``,password:``});
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
        variables: {
        firstName: formState.first_name,
        lastName: formState.last_name,
        username:formState.username,
        email: formState.email,
        password: formState.password,
        },
    });
    Auth.login(mutationResponse.data.createUser.token)
};

    const handleSignUp = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]:value
        });
    };


    return ( 
        <section className="signUpPage">
            <h2>Create Your Account!</h2>
            <p>Please Fill out the form below to register as a user.</p>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    name="first_name" 
                    required="required"
                    placeholder="First Name" 
                    onChange={handleSignUp} 
                />
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="last_name" 
                    required="required" 
                    placeholder="Last Name"
                    onChange={handleSignUp} 
                />
                <label htmlFor="email">Email Address</label>
                <input 
                    type="email" 
                    name="email" 
                    required="required" 
                    placeholder="Email Address"
                    onChange={handleSignUp} 
                />
                <label htmlFor="username">UserName</label>
                <input 
                    type="text" 
                    name="username" 
                    required="required" 
                    placeholder="Username"
                    onChange={handleSignUp} 
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    required="required" 
                    placeholder="Password"
                    onChange={handleSignUp} 
                />
                <input type="submit" value="Create Account" />
            </form>
            <p>Already have an account? 
                <br />
                <Link className="signInRedirect" to="/login">Click here to Log in</Link>
            </p>
        </section>
    );
}

export default SignUpPage;