import {ThunkAction} from "redux-thunk";
import {articlesActions} from "../redux/Article/articleActions";
import {appActions} from "../redux/App/appActions";
import {AppStateType} from "../redux/rootReducer";
import {authActions} from "../redux/Auth/authActions";

export type createArticleType = {
    "title": string,
    "description": string,
    "body": string,
    "tagList": Array<string>
}

export type AuthUserType = {
    user: {
        "email": string,
        "token": string,
        "username": string,
        "bio": string,
        "image": null | string
    }
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

// General

type PropType<T> = T extends { [key: string]: infer U } ? U : never

type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropType<T>>

// App

export type ActionsArticlesType = InferActionsType<typeof appActions>

export type ThunkAppType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsArticlesType>

// Article

export type ActionsArticlePageType = InferActionsType<typeof articlesActions>

export type ThunkArticleType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsArticlePageType>

// Auth

export type ActionsAuthType = InferActionsType<typeof authActions>

export type ThunkAuthType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsAuthType>
