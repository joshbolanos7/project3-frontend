import { Route, Switch } from " react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
    return (
        <Main>
            <Swtich>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route
                    path="/driver/:id"
                    render={(rp) => (
                        <Show
                            {...rp}
                        />
                    )}
                />
            </Swtich>
        </Main>
    )
}

export default Main;