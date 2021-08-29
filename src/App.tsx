import React from 'react';
import './App.scss';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";

const App = () => {

    return (
        <div className='wrapper'>
            <Header/>
            <SignIn/>
            <CreateAccount/>
        </div>
    );
}

export default App;
