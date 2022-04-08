import NavButton from "./navButton";

const devNavInnerContent = {
    home: {
        content:`Home`,
        sendTo:`/`
    },
    login: {
        content:`Login`,
        sendTo:`/login`
    },
    signUp: {
        content:`SignUp`,
        sendTo:`/signUp`
    },
    profile: {
        content:`Profile`,
        sendTo:`/profile`
    },
    cellar : {
        content:`Cellar`,
        sendTo:`/profile/cellar`
    }
}

function DevNav() {
    return ( 
        <nav>
            <NavButton {...devNavInnerContent.home} />
            <NavButton {...devNavInnerContent.login} />
            <NavButton {...devNavInnerContent.signUp} />
            <NavButton {...devNavInnerContent.profile} />
            <NavButton {...devNavInnerContent.cellar} />
        </nav> 
    );
}

export default DevNav;