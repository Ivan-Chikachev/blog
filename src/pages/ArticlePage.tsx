import React, {useEffect} from "react";
import {getCurrentArticle} from "../redux/Article/articleActions";
import {useAppDispatch} from "../hooks/reduxHook";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Article= React.lazy(() => import('../components/ArticlePage/Article'));

const ArticlePage = () => {

    const dispatch = useAppDispatch()

    const params = useParams()
    const slug = params.slug || ''

    useEffect(() => {
        dispatch(getCurrentArticle(slug))
    }, [])

    return (
      <React.Suspense fallback={<Loading />}>
        <Article />
      </React.Suspense>
    )
}

export default ArticlePage
