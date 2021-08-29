import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";

const App = () => {

    return (
        <div className='wrapper'>
            <Header/>
            <SignIn/>
        </div>
    );
}

export default App;
