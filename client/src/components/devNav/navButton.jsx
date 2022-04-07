import { Link } from 'react-router-dom'

function NavButton({content, sendTo}) {
    return ( 
        <button>
            <Link className={content} to={sendTo}>{content}</Link>
        </button> 
    );
}

export default NavButton;