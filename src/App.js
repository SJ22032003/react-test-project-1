import {useState} from 'react';
import NameTag from './Components/Name-Components/NameTag';
import './App.css';

const names = [
  {firstName: 'John',lastName: 'Doe'},
  {firstName: 'Alex',lastName: 'Clark'},
  {firstName: 'John',lastName: 'Jackson'},
  {firstName: 'Sahil',lastName: 'Jaryal'},
  {firstName: 'Shobhit',lastName: 'Jaryal'},
]

function App() {

  const [name , setName] = useState(names);

  const [age , setAge] = useState(10); // useState is a hook. default value is 21
      // useState returns an array with 2 values.
      // 1st value is the current state
      // 2nd value is a function to update the state
      console.log("parent")
      const ageUp = () => {
        setAge(p=>p+1);
      }
      const ageDown = () => {
        if(age>0){
          setAge(p=>p-1);
        }else{
          return;
        }
      }
  return (
    <div className="App">
      <header className="App-header">
        <h1>useState Hook</h1>
        <h2>Age is : {age}</h2>
        <div className="button">
        <button className="btn1" onClick={ageUp}>Inc + </button> {/*button to increase age */}
        <button className="btn2" onClick={ageDown}>Dec - </button> {/*button to decrease age */}
        </div>

        {
          name.map((name,index) => {
            return <NameTag firstName={name.firstName} lastName={name.lastName} key={index} slaveNo={index} age={age} />;  
          })
        }
        {/*should not use index as key */}
      </header>
    </div>
  );
}

export default App;
