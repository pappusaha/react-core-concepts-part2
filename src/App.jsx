
import './App.css'
import Counter from './counter'
import Team  from './team'
import User from './User'
import Friends from './friends'

function App() {
 function handleClick(){
alert('Button clicked')
 }

 const handleClick2= () => {
  alert('This is second')
 }

 const handleClick4=(nums) =>{
alert(nums+3)
 }

  return (
    <>

     
      <h2> React core concepts 2</h2>
      <Friends></Friends>
      <User></User>
      <Team> </Team>

    <Counter></Counter>
      <button onClick={handleClick}>Click me!1</button>
      <button onClick={handleClick2}>Click me2 </button> 
      {/* this is another system to call funcion we wriing funciton on onCLick  */}
      <button onClick={() => {alert('this is third')}}> Click Me! </button> 

      {/* now i am writing another function also add params this is the systme below */}
      <button onClick={() => handleClick4(3) }>CLick me 4</button>

    </>
  )
}

export default App
