import axios from 'axios';
import {ArticleType, AuthUserType, ProfileType} from '../types/types';

const instance = axios.create({
    baseURL: 'https://conduit-api-realworld.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

type GetListArticlesType = {
    articles: Array<ArticleType>
    articlesCount: number
}

const blogAPI = {
    auth(email: string, password: string) {
        return instance
            .post<AuthUserType>('users/login', {
                user: email, password
            })
    },
    reg(username: string, email: string, password: string) {
        return instance
            .post<AuthUserType>('users', {
                user: {
                    username,
                    email,
                    password
                }
            })
    },
    getCurrentUser() {
        return instance
            .get<AuthUserType>('user');
    },
    updateUser(email: string, bio: string, image: string) {
        return instance
            .put<AuthUserType>('user', {
                user: {
                    email,
                    bio,
                    image
                }
            });
    },
    getProfile(username: string) {
        return instance
            .get<ProfileType>(`profiles/${username}`);
    },
    followUser(username: string) {
        return instance
            .post<ProfileType>(`profiles/${username}/follow`);
    },
    unfollowUser(username: string) {
        return instance
            .delete<ProfileType>(`profiles/${username}/follow`);
    },
    getListArticles(count: number = 0) {
        return instance
            .get<GetListArticlesType>(`articles?page=${count}`);
    },
    getFeedArticles() {
        return instance
            .get(`articles/feed`);
    },
    getArticle(slug: string) {
        return instance
            .get(`articles/${slug}`);
    },
    createArticle() {
        return instance
            .post(`articles`, {});
    }

};


export default blogAPI;
