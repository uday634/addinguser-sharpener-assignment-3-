import React, {useState} from 'react'

const UserInput = ({addUser}) => {

    const [nameInput, setNameInput]= useState('');
    const [ageInput, setAgeInput]= useState('');

    const handleNameInputChange  = (e) => {
        e.preventDefault();
        setNameInput(e.target.value);
    }

    const handleAgeInputChange  = (e) => {
        e.preventDefault();
        setAgeInput(e.target.value);
    }

    const handleButtonClick  = (e) => {
        if(nameInput.length>0 && ageInput>0){
            addUser({name:nameInput, age:ageInput, id:Math.floor(Math.random()*10000)})
        }else{
            alert('enter the correct value')
        }
        setNameInput('');
        setAgeInput('');
    }


  return (
    <>
      <div>
        <div>
          <label>Name :</label>
          <input value={nameInput} onChange={handleNameInputChange } type="text" />
        </div>
        <div>
          <label>age :</label>
          <input value={ageInput} onChange={handleAgeInputChange } type="number" />
        </div>
        <button onClick={handleButtonClick }>Add</button>
      </div>
    </>
  );
};

export default UserInput;
