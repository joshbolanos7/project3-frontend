import { useState } from "react";

function Show(props) {
    const id = props.match.params.id
    const driver = props.driver
    const person = driver.find(d => d._id === id)

    const [editForm, setEditForm] = useState(person);

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.updateDriver(editForm, person._id);
        props.history.push("/");
    }

    const removePerson = () => {
        props.deleteDriver(person._id);
        props.history.push("/");
    }

    return (
        <div className="person">
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            <img src={person.image} alt={person.name} />
            <button id="delete" onClick={removePerson}>
                DELETE
            </button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.team}
                    name="team"
                    placeholder="team"
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    value={editForm.rating}
                    name="rating"
                    placeholder="rating"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Driver" />
            </form>
        </div>
    )
}

export default Show