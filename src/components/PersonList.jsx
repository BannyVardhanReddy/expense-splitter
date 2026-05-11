function PersonList({persons}){
    return(
        <section className="card">
            <h2>People</h2>
            <ul className="list">
                {persons.map((person)=>{
                    return(
                        <li key={person.id}>{person.name}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default PersonList;