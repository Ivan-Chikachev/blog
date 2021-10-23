import classNames from "classnames";
import React from "react"
import './Like.scss'

type Props = {
    slug: string
    likeCount: number
    clickLike: (slug: string) => void
    isLiked: boolean
}

const Like = (props: Props) => {
    const {isLiked, clickLike, likeCount, slug} = props

    return (
        <button
            type="button"
            className={classNames({
                like: true,
                active: isLiked
            })}
            onClick={() => clickLike(slug)}
        >
            {likeCount || 0}
        </button>
    )
}

export default Like