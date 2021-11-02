import React, {useEffect} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "./redux/rootReducer";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticleListPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import EditProfilePage from "./pages/EditProfilePage";
import CreateArticlePage from "./pages/CreateArticlePage";
import EditArticlePage from "./pages/EditArticlePage";
import {loginToken, logout} from './redux/Auth/authActions';
import {LS} from './loacalStorage/localStorage';
import {AlertType} from "./types/types";
import Alert from "./components/Alert/Alert";

type StateTypes = {
    isAuth: boolean
    username: string
    avatarSrc: string | null
    isFetching: boolean,
    isShowAlert: boolean,
    alert: AlertType
}

type DispatchTypes = {
    logout: () => void
    loginToken: () => void
}

type Props = StateTypes & DispatchTypes


const App = (props: Props) => {

    const {isShowAlert, alert, loginToken, isAuth, logout, username, avatarSrc} = props

    const token = LS.getToken()

    useEffect(() => {
        if (token) {
            loginToken()
        }
    }, [])

    return (
        <BrowserRouter>
            <div className='wrapper'>
                {isShowAlert && <Alert
                    type={alert.type}
                    message={alert.msg}
                />}
                <Header
                    logout={logout}
                    isAuth={isAuth}
                    username={username}
                    avatarSrc={avatarSrc}/>
                {/*<Redirect from="/" to="/articles/page/1"/>*/}
                <Route path='/sign-in' component={SignInPage}/>
                <Route path='/sign-up' component={SignUpPage}/>
                <Route path='/profile' component={EditProfilePage}/>
                <Route path='/create-article' component={CreateArticlePage}/>
                <Route path='/article/:slug/edit-article'
                       render={({match}) => {
                           return <EditArticlePage
                               slug={match.params.slug}
                           />
                       }}
                />
                <Route path='/articles/page/:page'
                       render={({match}) => {
                           const page = +match.params.page - 1
                           return <ArticlesListPage
                               page={page}/>
                       }}/>
                <Route
                    exact
                    path='/article/:slug'
                    render={({match}) => {
                        return <ArticlePage  slug={match.params.slug}/>
                    }}/>
            </div>
        </BrowserRouter>
    );
}


const mapStateToProps = (state: AppStateType): StateTypes => ({
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    username: state.auth.user.user?.username,
    avatarSrc: state.auth.user.user?.image,
    isShowAlert: state.app.isShowAlert,
    alert: state.app.alert
})

const mapDispatchToProps = {
    logout,
    loginToken
}

export default connect<StateTypes, DispatchTypes, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(App);

