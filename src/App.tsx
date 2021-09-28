import React from 'react';
import './App.scss';
import Articles from './components/Article/Articles';
import CreateAccount from './components/SignUp/SignUp';
import EditProfile from './components/EditProfile/EditProfile';
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import CreateArticle from "./components/CreateArticle/CreateArticle";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import {getArticles} from "./redux/Articles/articlesActions";
import {connect} from "react-redux";
import {AppStateType} from "./redux/rootReducer";

type StateTypes = {
}

type DispatchTypes = {
    getArticles: (offset: number) => void
}

type Props = StateTypes & DispatchTypes


const App = ({getArticles}: Props) => {

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                {/*<Redirect from="/" to="/articles/page/1"/>*/}
                <Route path='/sign-in' component={SignIn}/>
                <Route path='/sign-up' component={CreateAccount}/>
                <Route path='/profile' component={EditProfile}/>
                <Route path='/create-article' component={CreateArticle}/>
                <Route path='/articles/page/:page'
                       render={({match}) => {
                           const page = +match.params.page - 1
                           getArticles(page)
                           return <Articles page={page}/>
                       }}/>
                <Route
                    exact
                    path='/articles/:slug' render={({match}) => {
                    return <ArticlePage slug={match.params.slug}/>
                }}/>
            </div>
        </BrowserRouter>
    );
}


const mapStateToProps = (state: AppStateType): StateTypes => ({
})

const mapDispatchToProps = {
    getArticles
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(App);

