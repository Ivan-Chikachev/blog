import React from "react";
import {Pagination} from "antd";
import {setCurrentPage} from "../../redux/App/appActions";
import {useAppDispatch} from "../../hooks/reduxHook";

type Props = {
    currentPage: number
    totalArticles: number
}

const AppPagination = (props: Props) => {
    const {currentPage, totalArticles} = props

    const dispatch = useAppDispatch()

    return (
        <Pagination current={currentPage}
                    defaultPageSize={10}
                    showSizeChanger={false}
                    total={totalArticles}
                    className='pagination'
                    onChange={page => {
                        dispatch(setCurrentPage(page))
                    }}
        />
    )
}

export default AppPagination