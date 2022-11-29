// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Greeting from "./components/greeting";
import {Provider, useDispatch, useSelector} from "react-redux";
import {fetchGreetings} from "./redux/actions";
import store from "./redux/store";

function App() {
    const dispatch = useDispatch();
    const greetings = useSelector((state) => state.greetings);
    useEffect(() => {
        if (greetings.length === 0) dispatch(fetchGreetings());
    }, [])
    return (
        <>
            <h1>Get a random greeting</h1>
            <Greeting message={greetings[Math.floor(Math.random() * greetings.length)]}/>
        </>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);
