import logo from './logo.svg';
import './App.css';



function WhoAmI({name, surname, link}) {
  return (
    <div>
        <h1>My name is {name()} , surname - {surname} </h1> 
        <a href={link}>link</a>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <WhoAmI name={() => { return "John"}} surname="Smith" link="facebook.com"/>
      <WhoAmI name={() => { return "John"}} surname="Petrychenko" link="vk.com"/>
    </div>
  );
}

export default App;
