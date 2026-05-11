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
    <section className="card">
      <h2>Add Person</h2>
      <div className="person-row">
        <input
          placeholder="Add a person"
          value={name}
          onChange={handleOnChange}
        />
        <button onClick={handleOnClick}>Add</button>
      </div>
    </section>
  );
}

export default AddPerson;
