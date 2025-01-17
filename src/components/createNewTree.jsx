import React, { useState } from 'react';
import './createNewTree.css'; // pour le style, voir un exemple plus bas

const CreateNewTree = ()=>{

    const [addById, setAddById] = useState(true);
    // Ferme le formulaire
    const handleCloseForm = () => {

        setShowForm(false);
    };

    // Lorsque le formulaire est soumis
    const handleSubmit = (event) => {
        event.preventDefault();
        // Gestion des données du formulaire...
        console.log('Formulaire soumis');
    };
    return (
        <div className="AddNewTree-content">
            <h1>Add a New Tree</h1>
            {console.log("j'arrive ici")}
            <form onSubmit={handleSubmit}>
                <div className='choice_how_to_add'>
                    <button className='add_by_id' type="button"  onClick="">By Id</button>
                    <button className='add_by_create' type="button" onClick="">Create One</button>
                </div>
                {   (!addById)? 
                    <div>
                        <label className='title_of_tree'>
                            Title :
                            <input type="text" name="title" required />
                        </label>
                        <div>
                            <label className='image_of_tree' >
                                Image :
                                <input type="text" name="title" placeholder='The title of the Tree' required />
                            </label>
                            <button className='browse_an_image' onClick="">Brwose</button>
                        </div>
                    </div> : 
                    <div>
                        <label className='id_of_tree'>
                            Id :
                            <input type="text" name="title" placeholder='The Id of the Tree' required />
                        </label>   
                    </div>
                }
                <div className='form_actions'>
                    <button className='add-button' type="submit">Add</button>
                    <button className='back-button' type="button" onClick={handleCloseForm}>
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateNewTree;
