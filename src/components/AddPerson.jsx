import { useState } from "react";

function AddPerson({persons,setPersons}) {
  const [name, setName] = useState("");

  function handleOnChange(e) {
    setName(e.target.value);
  }

  function handleOnClick() {
    if(!name){
        return; 
    }
    setPersons([...persons,{id:crypto.randomUUID(),name:name}])
    setName('')
  }
  return (
    <div>
      <input
        placeholder="Add a person"
        value={name}
        onChange={handleOnChange}
      ></input>
      <button
        onClick={handleOnClick}
      >Add</button>
    </div>
  );
}

export default AddPerson;
