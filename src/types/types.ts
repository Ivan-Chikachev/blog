export type InputType = {
    placeholder: string
    type: string
    errors: string
    registerInput: object
    errorMessage?: string
    inputLabel: string
    className?: string
    value?: string
}

export type UpdateUserType = {
    "email": string,
    "token": string,
    "username": string,
    "bio": string,
    "image": string
}

export type createArticleType = {
    "title": string,
    "description": string,
    "body": string,
    "tagList": Array<string>
}

export type updateArticleType = {
    "title": string,
    "description": string,
    "body": string,
}

export type AlertType = {
    msg: string
    type: typesOfAlert
}

export type typesOfAlert = 'success' | 'error' | 'warning' | 'info'

export type AuthUserType = {
    user: {
        "email": string,
        "token": string,
        "username": string,
        "bio": string,
        "image": null | string
    }
    "errors"?: string
}

export type GetListArticlesType = {
    articles: Array<ArticleType>
    articlesCount: number
}

export type AuthErrorType = {
    errors: {
        body: Array<string>
    }
}

export type UserType = {
    "user": {
        "email": string,
        "bio": string,
        "image": string
    }
}

export type _ProfileType = {
    "username": string,
    "bio": string,
    "image": string,
    "following": boolean
}

export type ProfileType = {
    "profile": _ProfileType
}

export type ArticleType = {
    "slug": string,
    "title": string,
    "description": string,
    "body": string,
    "tagList": Array<string>,
    "createdAt": string,
    "updatedAt": string,
    "favorited": boolean,
    "favoritesCount": number,
    "author": _ProfileType
}

export type CommentType = {
    "comment": {
        "id": number,
        "createdAt": string,
        "updatedAt": string,
        "body": string,
        "author": _ProfileType
    }
}
