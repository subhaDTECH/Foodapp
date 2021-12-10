import React from 'react';
const  Recipes=(props) =>{
    const {recipes}=props;
    console.log(recipes);
    return (
        
       <div  className="row">
       {
           recipes.map((recipe,index) =>{
               console.log(recipe.recipe.uri)

               return (
                <div key={index} className="col-md-3">
                  <div className="card">
                      <div className="card-body">
                           <h2>{recipe.recipe.label}</h2>
                           <img src={recipe.recipe.uri} alt="" />
                      </div>
                  </div>

               </div>
               )
               
           })

       }
           
       </div>
       

      
    )
}

export default Recipes;
