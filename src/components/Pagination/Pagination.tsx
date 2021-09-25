import React from "react";
import {Pagination} from "antd";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {onLoading} from "../../redux/Articles/articlesActions";

type Props = {
    currentPage: number
    setCurrentPage: (number: number) => void
    totalArticles: number
    onLoading: () => void
    history: {
        push: (page: string) => void
    }
}

const AppPagination = ({
                           currentPage, setCurrentPage,
                           history, totalArticles,
                           onLoading
                       }: Props) => {
    return (
        <Pagination current={currentPage}
                    defaultPageSize={20}
                    showSizeChanger={false}
                    total={totalArticles}
                    className='pagination'
                    onChange={page => {
                        history.push(`/articles/page/${page}`)
                        setCurrentPage(page)
                        onLoading()
                    }}/>
    )
}

export default withRouter<Props & RouteComponentProps<{}>, any>(AppPagination)