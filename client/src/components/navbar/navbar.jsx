import NavButton from "./navButton";
import navInnerContent from "./navInnerContent";
import Auth from '../../utils/auth'


function Navbar() {

    // check to see if the user is currently logged in and renders the corresponding nav bar buttons for interaction
    // attach a use effect to it 
    // convert into a use state
    const loginStatus = Auth.loggedIn();

    if (loginStatus) {
        return (
            <nav>
                <NavButton {...navInnerContent.home} />
                <NavButton {...navInnerContent.profile} />
                <NavButton {...navInnerContent.cellar} />
                <NavButton {...navInnerContent.logout} />
            </nav>
        )
    } else {
        <nav>
            <NavButton {...navInnerContent.signUp} />
            <NavButton {...navInnerContent.login} />
        </nav>
    }
}

export default Navbar;

/*
    <NavButton {...navInnerContent.login} />
    <NavButton {...navInnerContent.signUp} />
    <NavButton {...navInnerContent.profile} />
    <NavButton {...navInnerContent.cellar} />
*/