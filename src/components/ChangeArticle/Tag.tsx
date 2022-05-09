import './ChangeArticle.scss'
import React, {useState} from "react";
import {useTheme} from "../../theme/useTheme";
import {useTranslation} from "react-i18next";

type Props = {
    tags: Array<string>
    setTags: (tags: Array<string>) => void
}

const Tag = ({tags, setTags}: Props) => {

    const [value, setValue] = useState('')
    const {theme} = useTheme()
    const { t } = useTranslation();

  const addClick = (e: any) => {
        e.preventDefault()
        if (value.trim()) {
            setTags([...tags, value.trim()])
            setValue('')
        }
    }

    const deleteClick = (val: string) => {
        const newTags = tags.filter(i => {
            return i !== val
        })
        setTags(newTags)
    }

    const tagsRender = tags.map((item, index) => {
        return (
            <div className='tag__wrap' key={item + index}>
                <div
                    className='tag__item'>
                    {item}
                </div>
                <button
                    className='tag__delete'
                    onClick={(e: any) => {
                        e.preventDefault()
                        deleteClick(item)
                    }}>
                  {t('delete')}
                </button>
            </div>

        )
    })

    return (
        <div className='tag'>
            <div className='tag__added-tag'>
                {tagsRender}
            </div>
            <input
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
                placeholder={t('tag')}
                type="text"
                data-theme={theme}
                className="input create-article__input create-article__input-tag"/>
            <button
                onClick={addClick}
                className="create-article__btn create-article__btn-add btn btn__primary btn__for-modal">
                {t('addTag')}
            </button>
        </div>
    )
}

export default Tag;