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
            <nav className="custom-nav">
                <div className="header">
                    <h1 className="mainTitle">cellar3d</h1>
                </div>
                <NavButton {...navInnerContent.home} />
                <NavButton {...navInnerContent.profile} />
                <NavButton {...navInnerContent.cellar} />
                <NavButton {...navInnerContent.logout} onClick={Auth.logout}/>
            </nav>
        )
    } else {
        return (
            <nav className="custom-nav">
                <div className="header">
                    <h1 className="mainTitle">cellar3d</h1>
                </div>
                <NavButton {...navInnerContent.home} />
                <NavButton {...navInnerContent.signUp} />
                <NavButton {...navInnerContent.login} />
            </nav>
        )
    }
}

export default Navbar;
