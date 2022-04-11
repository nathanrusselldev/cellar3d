import { Link } from 'react-router-dom'

function NavButton({content, sendTo, onClick}) {
    if (onClick) {
        return (
            <button className={content} onClick={onClick}>
                {content}
            </button>
        )
    }
    
    return ( 
        <button>
            <Link className={content} to={sendTo}>{content}</Link>
        </button> 
    );
}

export default NavButton;