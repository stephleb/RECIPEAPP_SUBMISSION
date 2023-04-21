import React from 'react';

function Recipe({ data, deleteRecipe }) {
  return ( <tr>
    <td>{data.name}</td>
    <td>{data.cuisine}</td>
   <td><img src={data.photo}/></td>
  <td className="content_td"><p>{(data.ingredients)}</p></td>
<td className="content_td"><p>{(data.preparation)}</p></td>
    
      <td>
        
        <button name="delete"
      onClick={() => deleteRecipe(data)}>
      Delete</button>
      </td>
  </tr> 
   );
}

export default Recipe;