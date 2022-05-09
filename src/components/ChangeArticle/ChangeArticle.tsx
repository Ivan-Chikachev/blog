import './ChangeArticle.scss'
import React, {useState} from "react";
import Tag from "./Tag";
import {useForm} from "react-hook-form";
import classNames from "classnames";
import {ArticleType, createArticleType, InputType, updateArticleType} from "../../types/types";
import {Navigate} from "react-router";
import Input from "../Input/Input";
import {useTheme} from "../../theme/useTheme";
import {useTranslation} from "react-i18next";

type Props = {
    title: string
    createSubmit?: (article: createArticleType) => void,
    updateSubmit?: (slug: string, article: updateArticleType) => void
    isLoading: boolean,
    slug?: string,
    article?: ArticleType
}

const ChangeArticle = (props: Props) => {

    const {title, createSubmit, updateSubmit, isLoading, slug, article} = props

    const [tags, setTags] = useState<Array<string>>([])
    const [isRedirect, setIsRedirect] = useState(false)
    const {register, handleSubmit, formState} = useForm({mode: 'onBlur'})

    const {errors} = formState

    const {theme} = useTheme()
    const { t } = useTranslation();

    if (isRedirect) {
        return <Navigate to="/articles/page/1"/>
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

    const registerTitle = register('title', {
        required: true,
        value: article?.title
    })

    const registerDescription = register('description', {
        required: true,
        value: article?.description
    })

    const registerText = register('text', {
        required: true,
        value: article?.body
    })

    const isError = Boolean(Object.keys(errors).length)

    const inputs: Array<InputType> = [
        {
            type: 'text',
            placeholder: t('title'),
            errors: errors.title,
            registerInput: registerTitle,
            inputLabel: t('title')
        },
        {
            type: 'text',
            placeholder: t('shortDescr'),
            errors: errors.description,
            registerInput: registerDescription,
            inputLabel: t('shortDescr')
        }
    ]

    return (
        <div>
            <form className='create-article'
                  data-theme={theme}
                  onSubmit={handleSubmit(onSubmit)}
                  action="">
                <h3 className='create-article__title'>
                    {title}
                </h3>
                {inputs.map(i =>
                    <Input
                        key={i.inputLabel}
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
                    {t('text')}
                </p>
                <textarea
                    placeholder='Text'
                    className={classNames({
                        "textarea": true,
                        "create-article__textarea": true,
                        'input-error': errors.text
                    })}
                    data-theme={theme}
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
                    {t('send')}
                </button>
            </form>
        </div>
    )
}

export default ChangeArticle
