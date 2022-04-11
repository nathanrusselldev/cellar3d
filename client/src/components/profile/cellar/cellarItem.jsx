import { useState } from "react";
import BottleForm from "./bottleForm";
import Modal from 'react-modal'

// query to find the initial state for the information.

Modal.setAppElement(document.querySelector(`main`))

function CellarItem({position, item}) {

    const [modalStatus, setModalStatus] = useState(false)
    const openModal = () => { setModalStatus(true) }
    const closeModal = async (position) => { 
        setModalStatus(false)
 
        setFormState(prevState => ({
            ...prevState,
            status : !prevState.status
        }));
    }

 
    const [formState, setFormState] = useState({status:false})



    const handleClick = async (position) => {
        openModal();
 
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
            <button onClick={()=>handleClick(position)}>
                {item?.name || "Add a bottle"}
            </button>
            <Modal
                isOpen={modalStatus}
                onRequestClose={closeModal}
                className="modal"
                contentLabel="attempt 1"
                >
                {formState.status && <BottleForm position={position} itemState={item} />}
                <button onClick={closeModal} className="modalCloseBtn">X</button>
            </Modal>
        </article>
        )
}


export default CellarItem;