import { useState } from "react";
import {useMutation} from '@apollo/client';
import {CREATE_BOTTLE} from '../../../utils/mutations'

function BottleForm({position, itemState}) {

    // I think it would be best if the intial state is set the existing data that exists inside of the database. We could have it be when the 
    
    const [formState, setFormState] = useState(itemState || {
        name: '',
        position: position,
        vintage: 0,
        locale: '',
        type: '',
        body: '',
        notes: ''
    })
    const [createBottle] = useMutation(CREATE_BOTTLE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await createBottle({
            variables: {
                ...formState,
                vintage:parseInt(formState.vintage)
            }
        })
        // reload insead, or update the cache object
        window.location.reload();
    }

    // mutationResponse.data.createBottle model data from the database. 

    const handleBottleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]:value
        });
    };

    return ( 
        <article className="bottleForm" >
            <h4>Cellar Position : {formState.position + 1}</h4>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="bottleName" 
                    value={formState.name}
                    onChange={handleBottleChange} 
                />
                <label htmlFor="type">Type</label>
                <input 
                    type="text" 
                    name="type" 
                    id="bottleType" 
                    value={formState.type}
                    onChange={handleBottleChange} 
                />
                <label htmlFor="vintage">Vintage</label>
                <input 
                    type="number" 
                    name="vintage" 
                    id="bottleVintage" 
                    value={formState.vintage}
                    onChange={handleBottleChange} 
                />
                <label htmlFor="locale">Locale</label>
                <input 
                    type="text" 
                    name="locale" 
                    id="bottleLocale" 
                    value={formState.locale}
                    onChange={handleBottleChange} 
                />
                <label htmlFor="body">Body</label>
                <input 
                    type="text" 
                    name="body" 
                    id="bottleBody" 
                    value={formState.body}
                    onChange={handleBottleChange} 
                />
                <label htmlFor="notes">Notes</label>
                <input 
                    type="text" 
                    name="notes" 
                    id="bottleNotes" 
                    value={formState.notes}
                    onChange={handleBottleChange} 
                />
                <input type="submit" value='SAVE' />
            </form>
        </article>
    );
};

export default BottleForm;