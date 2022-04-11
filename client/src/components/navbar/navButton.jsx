import { Link } from 'react-router-dom'

function NavButton({content, sendTo, onClick}) {
    if (onClick) {
        return (
            <button id='nav-item' className={content} onClick={onClick}>
                {content}
            </button>
        )
    }
    
    return ( 
        <button id='nav-item'>
            <Link className={content} to={sendTo}>{content}</Link>
        </button> 
    );
}

export default NavButton;