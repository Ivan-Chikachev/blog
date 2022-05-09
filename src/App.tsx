import React, {useEffect} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
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
import {useAppDispatch, useAppSelector} from "./hooks/reduxHook";
import {useTheme} from "./theme/useTheme";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const isAuth = useAppSelector(s => s.auth.isAuth)
  const username = useAppSelector(s => s.auth.user.user?.username)
  const avatarSrc = useAppSelector(s => s.auth.user.user?.image)
  const {isShowAlert, alert} = useAppSelector(s => s.app)

  const {theme} = useTheme()

  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = LS.getToken()
    if (token) {
      dispatch(loginToken())
    }
  }, [])

  return (
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
      <Routes>
        <Route path='/'>
          <Route path='sign-in' element={<SignInPage />}/>
          <Route path='sign-up' element={<SignUpPage />}/>
          <Route path='profile' element={<EditProfilePage />}/>
          <Route path='create-article' element={<CreateArticlePage />}/>
          <Route path='article/:slug/edit-article'
                 element={<EditArticlePage />}
          />
          <Route path='articles/page/:page'
                 element={<ArticlesListPage />}
          />
          <Route
            path='article/:slug'
            element={<ArticlePage />}
          />
          <Route path='*' element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App
