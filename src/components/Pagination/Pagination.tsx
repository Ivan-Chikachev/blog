import React from "react";
import {Pagination} from "antd";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {setCurrentPage} from "../../redux/App/appActions";
import {useAppDispatch} from "../../hooks/reduxHook";

type Props = {
    currentPage: number
    totalArticles: number
    history: {
        push: (page: string) => void
    }
}

const AppPagination = (props: Props) => {
    const {
        currentPage,
        history, totalArticles,
    } = props

    const dispatch = useAppDispatch()

    return (
        <Pagination current={currentPage}
                    defaultPageSize={10}
                    showSizeChanger={false}
                    total={totalArticles}
                    className='pagination'
                    onChange={page => {
                        history.push(`/articles/page/${page}`)
                        dispatch(setCurrentPage(page))
                    }}/>
    )
}

export default withRouter<Props & RouteComponentProps<{}>, any>(AppPagination)