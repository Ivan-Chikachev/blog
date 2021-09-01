import React from 'react';
import './App.scss';
import Article from './components/Article/Article';
import CreateAccount from './components/CreateAccount/CreateAccount';
import EditProfile from './components/EditProfile/EditProfile';
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";

const App = () => {

    return (
        <div className='wrapper'>
            <Header/>
            <Article/>
        </div>
    );
}

export default App;
