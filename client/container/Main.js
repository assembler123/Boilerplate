import React from 'react';


import babbu from '../../public/assets/babbu.jpg'
class App extends React.Component{
   constructor(props)
   {
      super(props);
      this.state={
         displayForm:false,
         color:'red',
         Name:''
      }
   }
   render(){
      const showForm=()=>{
         this.setState({displayForm:true},()=>{
            console.log(this.state)
         });

      }
      const form=(
         <div className='modal' >
            <div className='touchAll' onClick={()=>{this.setState({displayForm:false})}}></div>
               <form onSubmit={(e)=>{
                  e.preventDefault();
                  console.log(this.state);
                  this.setState({displayForm:false})
               }} >
                  <input placeholder='name' type='text' name='Name' onChange={(e)=>{this.setState({[e.target.name]:e.target.value})}}/>
                  <input placeholder='phone no.' type='text' name='Phone' onChange={(e)=>{this.setState({[e.target.name]:e.target.value})}}/>
                  <input value='Contact' type='submit' />
               </form>
               </div>)
      return(
         <div className='cobt'>
            
            <button className='rvButton'>Checkout Gallery</button>
            {this.state.displayForm?form:null}
            <div className='side1'><img src={babbu} style={{width:'100%'}}></img>
            </div>
            
            <div className='side2'>
               <h1>All About Photography</h1>
               <div>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed corporis voluptatum accusantium totam provident quia, beatae ipsum, necessitatibus quam iusto tenetur aspernatur asperiores! Aliquam odit sapiente debitis unde alias cupiditate!
               </p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet beatae mollitia omnis quisquam provident. Distinctio sequi accusamus aspernatur incidunt quaerat! Vel voluptatem labore nesciunt doloremque tempore quaerat praesentium, laboriosam ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, accusamus odit? Quaerat ipsa, iusto quod repellat minima sunt, rerum exercitationem debitis unde quibusdam qui deserunt modi eveniet porro odit animi.</p>
               </div>
               <button onClick={showForm}>Know more </button>           
            </div>
         </div>
      );
   }
}
export default App;