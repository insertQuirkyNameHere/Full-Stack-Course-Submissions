import { useState, useEffect } from "react";

import Person from './components/Person'
import Search from './components/Search'

import services from './services/app'

import './css/index.css'

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [searchName, setSearchName] = useState('');

  useEffect( ()=>{
    services
      .getAll()
      .then( (persons)=> {
        setPersons(persons);
      })
  }, []);

  const addName = (e)=>{
    e.preventDefault();
    const foundPerson = persons.find((person) => person.name.toUpperCase() === newName.toUpperCase());
    if(foundPerson){
      if(window.confirm(`${newName} is already in the phonebook. Update details?`)){
        const newPerson = {...foundPerson, number:newNum};
        services
          .updatePerson(foundPerson.id, newPerson)
          .then( person => {
            setPersons(persons.map( person => person.id===newPerson.id? newPerson : person));
            setNewName('');
            setNewNum('');
          })
      }
    }

    else{
      const newNameObj = {name: newName, number:newNum};
      services
        .addPerson(newNameObj)
        .then( (newPerson) => {
          setPersons(persons.concat(newPerson));
          setNewName('');
          setNewNum('');
        })  
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

  const handleDelete = (id) =>{
    if (window.confirm(`Delete ${persons.find( person => person.id===id).name}?`)){
      services.deletePerson(id).then( () => {
        services.getAll()
        .then(newPersons => setPersons(newPersons));
      } );
    }
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
      {personsToShow.map(person =><Person name={person.name} number={person.number} key={person.id} onDelete={() => handleDelete(person.id)}></Person>)}

    </div>  
  );
};

export default App;