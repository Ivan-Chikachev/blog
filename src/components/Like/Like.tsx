import classNames from "classnames";
import React, {useEffect} from "react"
import './Like.scss'
import {useTheme} from "../../theme/useTheme";

type Props = {
    slug: string
    likeCount: number
    clickLike: (slug: string) => void
    isLiked: boolean
    disabled: boolean
}

const Like = (props: Props) => {
    const {isLiked, clickLike, likeCount, slug, disabled} = props

    const {theme} = useTheme()

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames({
                "like": true,
                "active": isLiked
            })}
            data-theme={theme}
            onClick={() => clickLike(slug)}
        >
            {likeCount || 0}
        </button>
    )
}

export default React.memo(Like)