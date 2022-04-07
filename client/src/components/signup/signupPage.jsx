import { Link } from "react-router-dom";


function SignUpPage() {
    return ( 
        <section className="signUpPage">
            <h2>Create Your Account!</h2>
            <p>Please Fill out the form below to register as a user.</p>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" required="required" placeholder="First Name" />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" required="required" placeholder="Last Name"/>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" required="required" placeholder="Email Address"/>
                <label htmlFor="username">UserName</label>
                <input type="text" name="username" required="required" placeholder="Username"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required="required" placeholder="Password"/>
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