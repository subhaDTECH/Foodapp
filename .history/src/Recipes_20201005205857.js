import React from 'react';
const  Recipes=(props) =>{
    const {recipes}=props;
    console.log(recipes);
    return (
        
       <div  className="row">
       {
           recipes.map(recipe =>{
               <div className="col-md-3">
                  <div className="card">
                      <div className="card-body">
                           <h2>{recipe.recipe.label}</h2>
                      </div>
                  </div>

               </div>
           })

       }
           
       </div>
       

      
    )
}

export default Recipes;
