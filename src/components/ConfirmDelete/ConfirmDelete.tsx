import React from "react";
import './ConfirmDelete.scss'
import {Popconfirm} from 'antd';
import {useTranslation} from "react-i18next";

type Props = {
    slug: string
    clickDeleteArticle: (slug: string) => void
}

const ConfirmDelete = ({clickDeleteArticle, slug}: Props) => {

    const { t } = useTranslation();

    return (
        <Popconfirm
            title={t('confirmDelete')}
            onConfirm={() => clickDeleteArticle(slug)}
            okText={t('yes')}
            cancelText={t('no')}
            className='confirm'
        >
            <a
                className='btn btn__danger btn__medium'
                href="#">
                {t('delete')}
            </a>
        </Popconfirm>
    )
}

export default ConfirmDelete
