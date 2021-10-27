import './ChangeArticle.scss'
import React, {useState} from "react";
import Tag from "./Tag";
import {useForm} from "react-hook-form";
import classNames from "classnames";

type Props = {
    title: string
    submit: (article: any) => void
    isLoading: boolean
}

const ChangeArticle = ({title, submit, isLoading}: Props) => {

    const [tags, setTags] = useState<Array<string>>([])
    const {register, handleSubmit, formState} = useForm({mode: 'onBlur'})
    const {errors} = formState

    const onSubmit = (data: any) => {
        submit({
            title: data.title,
            description: data.description,
            body: data.text,
            tagList: tags
        })
    }
    const registerTitle = {
        ...register('title', {
            required: true,
        })
    }
    const registerDescription = {
        ...register('description', {
            required: true,
        })
    }
    const registerText = {
        ...register('text', {
            required: true,
        })
    }
    const isError = Boolean(Object.keys(errors).length)

    return (
        <div>
            <form className='create-article'
                  onSubmit={handleSubmit(onSubmit)}
                  action="">
                <h3 className='create-article__title'>
                    {title}
                </h3>
                <p className="create-article__label">
                    Title
                </p>
                <input
                    placeholder='Title'
                    type="text"
                    className={classNames({
                        "create-article__input": true,
                        'input-error': errors.title
                    })}
                    {...registerTitle}/>
                <p className="create-article__label">
                    Short description
                </p>
                <input
                    placeholder='Short description'
                    type="text"
                    className={classNames({
                        "create-article__input": true,
                        'input-error': errors.description
                    })}
                    {...registerDescription}/>
                <p className="create-article__label">
                    Text
                </p>
                <textarea
                    placeholder='Text'
                    className={classNames({
                        "create-article__textarea": true,
                        'input-error': errors.text
                    })}
                    {...registerText}/>
                <p className="create-article__label">
                    Tags
                </p>
                <div className="create-article__tag-block">
                    <div className="">
                        <Tag
                            tags={tags}
                            setTags={setTags}
                        />
                    </div>
                </div>
                {isError && <span className='error-label'>
                    Заполните все поля
                </span>}
                <button
                    disabled={isLoading}
                    type='submit'
                    className="create-article__btn btn btn__for-modal btn__primary-bg">
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChangeArticle
