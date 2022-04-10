import { useState } from "react";

function BottleForm({position}) {

    // I think it would be best if the intial state is set the existing data that exists inside of the database. We could have it be when the 
    const initialState = {
        position:position,
        name:``,
        type:``,
        vintage:``,
        grape:``,
        locale:``,
        body:``,
        notes:``,
    }
    
    const [formState, setFormState] = useState(initialState)

    const handleFormChange = ()=> {
        setFormState()
    }

    return ( 
        <article className="bottleForm" >
            <h4>Cellar Position : {formState.position}</h4>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="bottleName" value={formState.name} />
                <label htmlFor="type">Type</label>
                <input type="text" name="type" id="bottleType" value={formState.type} />
                <label htmlFor="vintage">Vintage</label>
                <input type="text" name="vintage" id="bottleVintage" value={formState.vintage} />
                <label htmlFor="grape">Grape</label>
                <input type="text" name="grape" id="bottleGrape" value={formState.grape} />
                <label htmlFor="locale">Locale</label>
                <input type="text" name="locale" id="bottleLocale" value={formState.locale} />
                <label htmlFor="body">Body</label>
                <input type="text" name="body" id="bottleBody" value={formState.body} />
                <label htmlFor="notes">Notes</label>
                <input type="text" name="notes" id="bottleNotes" value={formState.notes} />
                <input type="submit" value='SAVE' />
            </form>
        </article>
    );
};

export default BottleForm;