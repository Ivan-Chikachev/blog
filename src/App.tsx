import React from 'react';
import './App.scss';
import Articles from './components/Article/Articles';
import CreateAccount from './components/CreateAccount/CreateAccount';
import EditProfile from './components/EditProfile/EditProfile';
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import CreateArticle from "./components/CreateArticle/CreateArticle";

const App = () => {

    return (
        <div className='wrapper'>
            <Header/>
            <SignIn/>
            <EditProfile/>
            <CreateAccount/>
            <CreateArticle/>
            <Articles/>
        </div>
    );
}

export default App;
