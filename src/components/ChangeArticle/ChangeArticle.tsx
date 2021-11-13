import './ChangeArticle.scss'
import React, {useState} from "react";
import Tag from "./Tag";
import {useForm} from "react-hook-form";
import classNames from "classnames";
import {createArticleType, InputType, updateArticleType} from "../../types/types";
import {Redirect} from "react-router";
import Input from "../Input/Input";

type Props = {
    title: string
    createSubmit?: (article: createArticleType) => void,
    updateSubmit?: (slug: string, article: updateArticleType) => void
    isLoading: boolean,
    slug?: string,
}

const ChangeArticle = (props: Props) => {

    const {title, createSubmit, updateSubmit, isLoading, slug} = props

    const [tags, setTags] = useState<Array<string>>([])
    const [isRedirect, setIsRedirect] = useState(false)
    const {register, handleSubmit, formState} = useForm({mode: 'onBlur'})
    const {errors} = formState

    if (isRedirect) {
        return <Redirect to="/articles/page/1"/>
    }

    const onSubmit = (data: any) => {
        updateSubmit && slug && updateSubmit(slug, {
            title: data.title,
            description: data.description,
            body: data.text,
        })

        createSubmit && createSubmit({
            title: data.title,
            description: data.description,
            body: data.text,
            tagList: tags
        })
        setIsRedirect(true)
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

    const inputs: Array<InputType> = [
        {
            type: 'text',
            placeholder: 'Title',
            errors: errors.title,
            registerInput: registerTitle,
            inputLabel: 'Title'
        },
        {
            type: 'text',
            placeholder: 'Short description',
            errors: errors.description,
            registerInput: registerDescription,
            inputLabel: 'Short description'
        }
    ]

    return (
        <div>
            <form className='create-article'
                  onSubmit={handleSubmit(onSubmit)}
                  action="">
                <h3 className='create-article__title'>
                    {title}
                </h3>
                {inputs.map(i =>
                    <Input
                        registerInput={i.registerInput}
                        errors={i.errors}
                        type={i.type}
                        errorMessage={i.errorMessage}
                        inputLabel={i.inputLabel}
                        placeholder={i.placeholder}
                        className={i.className}
                    />
                )}
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
                {createSubmit &&
                <>
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
                </>
                }
                {isError && <span className='error-label'>
                    Please, fill in form fields
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
