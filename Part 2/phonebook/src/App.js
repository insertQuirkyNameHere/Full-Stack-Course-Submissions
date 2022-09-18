import { useState, useEffect } from "react";
import axios from 'axios'

import Person from './components/Person'
import Search from './components/Search'

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [searchName, setSearchName] = useState('');

  useEffect( ()=>{
    axios
      .get('http://localhost:3001/persons')
      .then(
        response => {
          setPersons(response.data);
        }
      );
  }, []);

  const addName = (e)=>{
    e.preventDefault();
    if(persons.find((person) => person.name.toUpperCase() === newName.toUpperCase())){
      alert(`${newName} is already in the phonebook`);
      setNewName('');
    }
    else{
      const newNameObj = {name: newName, number:newNum, id:persons.length+1};
      setPersons(persons.concat(newNameObj));
      setNewName('');
      setNewNum('');
    }
  }

  const handleNameChange = (e) =>{
    setNewName(e.target.value);
  }

  const handleNumberChange = (e)=>{
    setNewNum(e.target.value);
  }

  const handleSearchChange = (e)=>{
    setSearchName(e.target.value);
  }
  
  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toUpperCase() === searchName.toUpperCase());
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Search handleChange={handleSearchChange} value={searchName} handleSubmit={() => setShowAll(!showAll)} showAll={showAll} />
      <h2>Add new</h2>
      <form onSubmit={addName}>
        <div>
          <label>
            Name:
            <input type="text" onChange={handleNameChange} value={newName} required={true}></input>
          </label>
        </div>

        <div>
          <label>
            Number:
            <input type="text" onChange={handleNumberChange} value={newNum} required={true}></input>
          </label>
        </div>


        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {personsToShow.map(person =><Person name={person.name} number={person.number} key={person.id}></Person>)}

    </div>  
  );
};

export default App;