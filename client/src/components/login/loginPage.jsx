import { useMutation } from "@apollo/client"
import { useState } from "react"
import { Link } from "react-router-dom"
import Auth from "../../../../server/utils/auth"
import { LOGIN } from '../../utils/mutations'

function LoginPage(){

    const [formState, setFormState] = useState({username: ``, password:``})
    const [login, {error}] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables : {username: formState.username, password: formState.password}
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token)
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]:value,
        });
    };

    return (
        <section className="loginPage">
            <h2>Login!</h2>
            <p>Happy to see you again</p>
            <form id="signInForm" onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required="required" placeholder="Username or Email"  handleChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required="required" placeholder="password" handleChange={handleChange} />
                <input type="submit" value="Log In" />
            </form>
            <p>
                Dont have an account?
                <br />
                <Link className="signUpRedirect" to="/signUp">Register an Account</Link>
            </p>
        </section>
    )
}

export default LoginPage