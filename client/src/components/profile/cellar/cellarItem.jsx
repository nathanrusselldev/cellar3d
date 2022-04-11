import { useState } from "react";
import BottleForm from "./bottleForm";
import Modal from 'react-modal'


// query to find the initial state for the information.

Modal.setAppElement(document.querySelector(`main`))

function CellarItem({position, data}) {

    const initialState = {
        name:``,
        position:0,
        type:``,
        grape:``,
        vintage:``,
        locale:``,
        body:``,
        notes:``
    }

    const [modalStatus, setModalStatus] = useState(false)
    const openModal = () => { setModalStatus(true) }
    const closeModal = async (position) => { 
        setModalStatus(false)
        setItemState({...itemState, position})
        setFormState(prevState => ({
            ...prevState,
            status : !prevState.status
        }));
    }

    const [itemState, setItemState] = useState(initialState)
    const [formState, setFormState] = useState({status:false})



    const handleClick = async (position) => {
        openModal();
        setItemState({...itemState, position})
        setFormState(prevState => ({
            ...prevState,
            status : !prevState.status
        }));
    };
    // create setItem state for the form submission
    // Handle form change
    // 
    
    return ( 
        <article className="cellarItem" style={{width:`calc(100vw / 4 - 5px)`, height:250}}>
            {/* for each position in a  grid render a buttonj like this one that passes its index */}
            <button onClick={()=>handleClick(position)} style={{width:`100%`,height:`100%`}}>
                {itemState.name || "Add a bottle"}

            </button>
            {/* When the status is currently set to true, then the form will be opened */}
            <Modal
                isOpen={modalStatus}
                onRequestClose={closeModal}
                className="modal"
                contentLabel="attempt 1"
                >
                {formState.status && <BottleForm position={position} setItemState={setItemState} itemState={itemState} />}
                <button onClick={closeModal}>Close the modal</button>
            </Modal>
        </article>
        )
    
}


export default CellarItem;