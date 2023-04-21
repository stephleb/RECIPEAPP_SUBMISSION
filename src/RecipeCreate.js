import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
    let initialFormData = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
      preparation: ''
 };
  
  const [formData, setFormData] = useState(initialFormData);
  
  function handleInput(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
//   const handleInput = ({ target }) => {
//     setFormData({
//       ...formData,
//       [target.name]: target.value,
//     });
//   };
  
  
  function handleFormSubmit(event) {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormData});
  };
    
  
  return (
    <form name="create" onSubmit={handleFormSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              

    <input  placeholder="Name" type="text" name="name" id="name" value={formData.name} 
      onChange={handleInput} /> </td> <td>

    <input placeholder="Cuisine" type="text" name="cuisine" id="cuisine" value={formData.cuisine} 
      onChange={handleInput} /> </td> <td>

    <input  placeholder="URL" type="text" name="photo" id="photo" value={formData.photo} 
      onChange={handleInput} /> 
            </td> <td>

    <textarea placeholder="ingredients" type="text" name="ingredients" id="ingredients" value={formData.ingredients} 
      onChange={handleInput} /> </td> <td>
            
    <textarea placeholder="preparation" type="text" name="preparation" id="preparation" value={formData.preparation} 
      onChange={handleInput} /> </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
