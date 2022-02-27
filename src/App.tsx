import React, {useEffect} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticleListPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import EditProfilePage from "./pages/EditProfilePage";
import CreateArticlePage from "./pages/CreateArticlePage";
import EditArticlePage from "./pages/EditArticlePage";
import {loginToken} from './redux/Auth/authActions';
import {LS} from './loacalStorage/localStorage';
import Alert from "./components/Alert/Alert";
import {useAppSelector} from "./hooks/reduxHook";
import {useTheme} from "./theme/useTheme";

const App = () => {

    const isAuth = useAppSelector(s => s.auth.isAuth)
    const username = useAppSelector(s => s.auth.user.user?.username)
    const avatarSrc = useAppSelector(s => s.auth.user.user?.image)
    const {isShowAlert, alert} = useAppSelector(s => s.app)

    const {theme} = useTheme()

    const dispatch = useDispatch()

    useEffect(() => {
        const token = LS.getToken()
        if (token) {
            dispatch(loginToken())
        }
    }, [])

    return (
        <BrowserRouter>
            <div
                data-theme={theme}
                className='wrapper'>
                {isShowAlert &&
                    <Alert
                        type={alert.type}
                        message={alert.msg}
                    />
                }
                <Header
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
                           const page = +match.params.page
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

export default App
