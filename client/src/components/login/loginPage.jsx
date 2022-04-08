import { Link } from "react-router-dom"

function LoginPage(){
/*
        const [formState, setFormState] = useState({ email: '', password: '' });
        const [login, { error }] = useMutation(LOGIN);
    
        const handleFormSubmit = async (event) => {
            event.preventDefault();
            try {
                const mutationResponse = await login({
                    variables: { email: formState.email, password: formState.password },
                });
                const token = mutationResponse.data.login.token;
                Auth.login(token);
            } catch (e) {
                console.log(e);
            }
        };
    
        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormState({
                ...formState,
                [name]: value,
            });
        };
*/

        

    return (
        <section className="loginPage">
            <h2>Login!</h2>
            <p>Happy to see you again</p>
            <form id="signInForm">
                <label htmlFor="usernameOrEmail">Username / Email Address</label>
                <input type="text" name="usernameOrEmail" required="required" placeholder="Username or Email"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required="required" placeholder="password"/>
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