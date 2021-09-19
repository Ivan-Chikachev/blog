import React from 'react';
import './App.scss';
import Articles from './components/Article/Articles';
import CreateAccount from './components/CreateAccount/CreateAccount';
import EditProfile from './components/EditProfile/EditProfile';
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import CreateArticle from "./components/CreateArticle/CreateArticle";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <Route path='/' exact component={Articles}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/signup' component={CreateAccount}/>
                <Route path='/s' component={EditProfile}/>
                <Route path='/create-article' component={CreateArticle}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
