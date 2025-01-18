import React, { useState } from 'react';
import './createNewTree.css'; // pour le style, voir un exemple plus bas

const CreateNewTree = ({setShowForm, setANewTreeData})=>{

    const [addById, setAddById] = useState(true);
    const [formData, setFormData] = useState({
        title_tree: '',
        image_tree: '',
        id_tree:'',

    });


    const handleFormChange = (event) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };
    
    // Ferme le formulaire
    const handleCloseForm = () => {

        setShowForm(false);
    };

    const handleChoiceToAddById = () =>{
        setAddById(true);
        setFormData({
            ...formData,
            title_tree: '',
            image_tree: '',
            id_tree:'',
        });
    };
    const handleChoiceToAddByCreateOne = () =>{
        setAddById(false);
        setFormData({
            ...formData,
            title_tree: '',
            image_tree: '',
            id_tree:'',
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setANewTreeData((prevState)=>{
            return{
          ...prevState,
          title_tree: formData.title_tree,
          image_tree: formData.image_tree,
          id_tree: formData.id_tree
        };
        });
    };
    return (
        <div className="AddNewTree-content">
            <div className='sub_content'>
                <h1>Add a New Tree</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form_element'>
                        <div className='choice_how_to_add'>
                            <button className='add_by_id' type="button"  onClick={handleChoiceToAddById}>By Id</button>
                            <button className='add_by_create' type="button" onClick={handleChoiceToAddByCreateOne}>Create One</button>
                        </div>
                        {   (!addById)? 
                            <div className='add_by_create'>
                                <label className='title_of_tree'>
                                    <span >Title</span>
                                    <input type="text" id='title_tree' name="title" placeholder='The Title of the tree' value={formData.title_tree} onChange={handleFormChange} required />
                                </label>
                                <div className='img_of_tree_container'>
                                    <label className='image_of_tree' >
                                        <span >Image</span>
                                        <input type="text"id='image_tree' name="image" placeholder='The link of the image' value={formData.image_tree} onChange={handleFormChange} required />
                                    </label>
                                    <button className='browse_an_image' type="button" onClick="">Browse</button>
                                </div>
                            </div> 
                            : 
                            <div>
                                <label className='id_of_tree'>
                                    <span >Id</span>
                                    <input type="text" id='id_tree' name="title" placeholder='The Id of the Tree' value={formData.id_tree} onChange={handleFormChange} required />
                                </label>   
                            </div>
                        }
                        <div className='form_actions'>
                            <button className='add-button' type="submit">Add</button>
                            <button className='back-button' type="button" onClick={handleCloseForm}>
                                Back
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNewTree;
