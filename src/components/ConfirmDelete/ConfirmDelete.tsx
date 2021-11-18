import React from "react";
import './ConfirmDelete.scss'
import {Popconfirm} from 'antd';

type Props = {
    slug: string
    clickDeleteArticle: (slug: string) => void
}

const ConfirmDelete = ({clickDeleteArticle, slug}: Props) => {

    return (
        <Popconfirm
            title={'Are you sure to delete this article?'}
            onConfirm={() => clickDeleteArticle(slug)}
            okText="Yes"
            cancelText="No"
            className='confirm'
        >
            <a
                className='btn btn__danger btn__medium'
                href="#">
                Delete
            </a>
        </Popconfirm>
    )
}

export default ConfirmDelete
