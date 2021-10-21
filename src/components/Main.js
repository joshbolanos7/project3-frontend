import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
    const [driver, setDriver] = useState(null);

    const URL = "https://josh-project3-backend.herokuapp.com/driver/";

    const getDriver = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setDriver(data);
    };

    const createDriver = async (driver) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(driver),
        });
        getDriver();
    };

    useEffect(() => getDriver(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index driver={driver} createDriver={createDriver} />
                </Route>
                <Route
                    path="/driver/:id"
                    render={(rp) => (
                        <Show
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Main;