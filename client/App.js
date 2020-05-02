import React, { Component } from 'react';
// import Abv from './container/Abv.js';
import Abv from './container/Abv.js';
import babbu from '../public/assets/babbu.jpg'
import '../public/assets/styles.css';
import  Routes  from "./Routes.js";

const showForm=()=>{
   let form=(<form><input placeholder='name' type='text'/></form>)
}
class App extends Component
{
   render()
   {
      return(<Routes></Routes>)
   }
}
// class App extends Component
// {
//    render()
//    {
//       return(
//          <div><Hello></Hello><Bye></Bye></div>
      
//          )
//    }
// }

export default App;
