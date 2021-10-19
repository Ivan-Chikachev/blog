import {ThunkAction} from "redux-thunk";
import {articlesPageActions} from "../redux/ArticlePage/articlePageActions";
import {articlesActions} from "../redux/Articles/articlesActions";
import {AppStateType} from "../redux/rootReducer";
import {authActions} from "../redux/Auth/authActions";

export type AuthUserType = {
    user: {
        "email": string,
        "token": string,
        "username": string,
        "password": string,
        "bio": string,
        "image": null | string
    }
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

// General

type PropType<T> = T extends { [key: string]: infer U } ? U : never

type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropType<T>>

// Articles

export type ActionsArticlesType = InferActionsType<typeof articlesActions>

export type ThunkArticlesType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsArticlesType>

// ArticlePage

export type ActionsArticlePageType = InferActionsType<typeof articlesPageActions>

export type ThunkArticlePageType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsArticlePageType>

// Auth

export type ActionsAuthType = InferActionsType<typeof authActions>

export type ThunkAuthType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsAuthType>
