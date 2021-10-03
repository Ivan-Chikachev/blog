import './ChangeArticle.scss'
import React from "react";

const Tag = () => {
    return (
        <div className='tag'>
            <input
                placeholder='Tag'
                type="text" className="create-article__input create-article__input-tag"/>
            <button className="btn btn__danger btn__for-modal">
                Delete
            </button>
        </div>
    )
}

export default Tag;