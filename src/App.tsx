import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {getArticles} from "./redux/Articles/articlesActions";
import {connect} from "react-redux";
import {AppStateType} from "./redux/rootReducer";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticleListPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import EditProfilePage from "./pages/EditProfilePage";
import CreateArticlePage from "./pages/CreateArticlePage";
import EditArticlePage from "./pages/EditArticlePage";
import {logout} from './redux/Auth/authActions';

type StateTypes = {
    isAuth: boolean
    username: string
    avatarSrc: string | null
}

type DispatchTypes = {
    getArticles: (offset: number) => void
    logout: () => void
}

type Props = StateTypes & DispatchTypes


const App = (props: Props) => {

    const {getArticles, isAuth, logout, username, avatarSrc} = props

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header
                    logout={logout}
                    isAuth={isAuth}
                    username={username}
                    avatarSrc={avatarSrc}/>
                {/*<Redirect from="/" to="/articles/page/1"/>*/}
                <Route path='/sign-in' component={SignInPage}/>
                <Route path='/sign-up' component={SignUpPage}/>
                <Route path='/profile' component={EditProfilePage}/>
                <Route path='/edit-article' component={EditArticlePage}/>
                <Route path='/create-article' component={CreateArticlePage}/>
                <Route path='/articles/page/:page'
                       render={({match}) => {
                           const page = +match.params.page - 1
                           getArticles(page)
                           return <ArticlesListPage page={page}/>
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
    isAuth: state.auth.isAuth,
    username: state.auth.user.user?.username,
    avatarSrc: state.auth.user.user?.image
})

const mapDispatchToProps = {
    logout,
    getArticles
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(App);

