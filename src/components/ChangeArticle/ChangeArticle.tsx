import './ChangeArticle.scss'
import React from "react";
import Tag from "./Tag";

type Props = {
    title: string
}

const ChangeArticle = ({title} : Props) => {
    return (
        <div>
            <form className='create-article' action="">
                <h3 className='create-article__title'>
                    {title}
                </h3>
                <p className="create-article__label">
                    Title
                </p>
                <input
                    placeholder='Title'
                    type="text" className="create-article__input"/>
                <p className="create-article__label">
                    Short description
                </p>
                <input
                    placeholder='Short description'
                    type="text" className="create-article__input"/>
                <p className="create-article__label">
                    Text
                </p>
                <textarea className='create-article__textarea' placeholder='Text'/>
                <p className="create-article__label">
                    Tags
                </p>
                <div className="create-article__tag-block">
                    <div className="">
                        <Tag/>
                    </div>
                    <button className="create-article__btn create-article__btn-add btn btn__primary btn__for-modal">
                        Add tag
                    </button>
                </div>
                <button
                    type='submit'
                    className="create-article__btn btn btn__for-modal btn__primary-bg">
                    Send
                </button>
            </form>
        </div>
    )
}

export default ChangeArticle
