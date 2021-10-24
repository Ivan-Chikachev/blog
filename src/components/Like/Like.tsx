import classNames from "classnames";
import React from "react"
import './Like.scss'

type Props = {
    slug: string
    likeCount: number
    clickLike: (slug: string) => void
    isLiked: boolean
    disabled: boolean
}

const Like = (props: Props) => {
    const {isLiked, clickLike, likeCount, slug, disabled} = props

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames({
                "like": true,
                "active": isLiked
            })}
            onClick={() => clickLike(slug)}
        >
            {likeCount || 0}
        </button>
    )
}

export default Like