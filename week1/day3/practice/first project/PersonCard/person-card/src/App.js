
import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  const Arr =[
    {firstName:"John", lastName:"Doe", age:25 , hairColor:"Brown"},
    {firstName:"Jane", lastName:"Smith" ,age:30, hairColor:"Black"},
    {"firstName":"Mike", "lastName":"Johnson","age":35,"hairColor":"Black"},
    {"firstName":"Emily", "lastName":"Davis","age":28,"hairColor":"Black"}
  ]
  
  
  return (
    <div className="App">

      {Arr.map((person, idx) => {
        return <PersonCard person={person} key={idx} />;
      })
      
      }
      
    </div>
  );
}

export default App;
