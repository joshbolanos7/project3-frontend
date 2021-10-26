import { useState } from "react";
import { Link } from "react-router-dom"
import car from "../public/images/formula-one-car.png"



function Index(props) {

    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        team: "",
        rating: "",
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createDriver(newForm);
        setNewForm({
            name: "",
            image: "",
            team: "",
            rating: "",
        });
    };
    const loaded = () => {
        return props.driver.map((driver) => (
            <div key={driver._id} className="driver">
                <Link to={`/driver/${driver._id}`}><h1>{driver.name}</h1></Link>
                <img src={driver.image} alt={driver.name} />
                <h3>{driver.team}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1> <img src={car} width="100px" height="75px" alt="car" ></img>LOADING...💨</h1>;
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.team}
                    name="team"
                    placeholder="team"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.rating}
                    name="rating"
                    placeholder="rating"
                    onChange={handleChange}
                />
                <input type="submit" value="Add Driver" />
            </form>
            {props.driver ? loaded() : loading()}
        </section>
    );
}

export default Index;