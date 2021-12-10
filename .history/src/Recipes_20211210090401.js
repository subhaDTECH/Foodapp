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
                <div key={index} className="col-md-3 gx-3 gy-3 p-4 mycrd">
                  <div className="card">
                      <div className="card-body">
                           <h4>{recipe.recipe.label}</h4>
                           <img src={recipe.recipe.image} alt="" />

                           <h4>{recipe.recipe.label}</h4>

                           <p>calories :{recipe.recipe.calories}</p>
                           <p>totalTime :{recipe.recipe.totalTime}</p>
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
