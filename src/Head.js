import React from 'react'

const  Head=(props)=> {
    return (
        <div className="jumbotron bg-danger  display-5 ">
            <h1>header</h1>
            <h2>Taste Food Stall</h2>
                 <div className="input-group mb-3 mx-auto  w-50 py-5">
                     <input value={props.search}  onChange={props.onInputChange} type="text" className="form-control" placeholder="Enter your fav Recipes....." />
                         <div className="input-group-append">
                         <button type="button" className="btn btn-success">Find Food</button>
                        </div>
                        </div>
        </div>
    )
}

export default Head;