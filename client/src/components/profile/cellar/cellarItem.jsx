import { useState } from "react";
import BottleForm from "./bottleForm";

const tempInfo = {
    name:`wine name`,
    position:`1`,
    type:`wine type`,
    grape:`grape type`,
    vintage:`vintage`,
    locale:`locale`,
    body:`body`,
    notes:`notes`
}

function CellarItem({position}) {
    const [itemState, setitemState] = useState(tempInfo)
    const [formState, setFormState] = useState({status:false})

    const handleClick = async (position) => {
        setitemState({...itemState, position})
        setFormState(prevState => ({
            ...prevState,
            status : !prevState.status
        }));
    };
    // create setItem state for the form submission
    // Handle form change
    // 
    
    return ( 
        <article className="cellarItem">
            {/* for each position in a  grid render a buttonj like this one that passes its index */}
            <button onClick={()=>handleClick(position)}>Some Txt</button>
            {/* When the status is currently set to true, then the form will be opened */}
            {formState.status && <BottleForm/>}
        </article>
        )
    
}


export default CellarItem;