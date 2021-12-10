import React,{useState,useEffect} from 'react';
import Axios from  "axios";
import './App.css';
import Recipes from "./Recipes";
import Head from "./Head";

function App() {

  const [search,setSearch]=useState("chiken");
  const [recipes,setRecipes]=useState([]);
  const APP_ID="909424aa";
  const APP_KEY="0c088a86bf3488da40ec5d4986bcbe96";

  useEffect(()=>{

    async function fetchdata(){
    const res= await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    console.log(res);
    

    setRecipes(res.data.hits);
    }
    fetchdata();
  },[])

 

  
  const onInputChange=(e)=>{
    setSearch(e.target.value);
  }
  return (
    <div className="App">
    <Head search={search} onInputChange={onInputChange}/>
    <Recipes  recipes={recipes}/>
    
     
     
    </div>
  );
}

export default App;
