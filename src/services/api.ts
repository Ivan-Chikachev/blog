import {
    AuthUserType,
    createArticleType,
    GetListArticlesType,
    ProfileType,
    updateArticleType,
    UpdateUserType
} from '../types/types';
import instance from '../http';

const blogAPI = {

    auth(email: string, password: string) {
        return instance
            .post<AuthUserType>('users/login', {
                user: {email, password}
            })
    },

    register(username: string, email: string, password: string) {
        return instance
            .post<AuthUserType>('users', {
                user: {
                    username,
                    email,
                    password
                }
            })
    },
    getUser() {
        return instance
            .get<AuthUserType>('user');
    },
    updateUser(user: UpdateUserType) {
        return instance
            .put<AuthUserType>('user', {user});
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
            .get<GetListArticlesType>(`articles?limit=10&offset=${count}`);
    },
    getFeedArticles() {
        return instance
            .get(`articles/feed`);
    },
    getArticle(slug: string) {
        return instance
            .get(`articles/${slug}`);
    },
    createArticle(article: createArticleType) {
        return instance
            .post(`articles`, {article});
    },
    updateArticle(slug: string, article: updateArticleType) {
        return instance
            .put(`articles/${slug}`, {article});
    },
    deleteArticle(slug: string) {
        return instance
            .delete(`articles/${slug}`);
    },
    setFavorite(slug: string) {
        return instance
            .post(`articles/${slug}/favorite`, {slug});
    },
    removeFavorite(slug: string) {
        return instance
            .delete(`articles/${slug}/favorite`)
    }
};

export default blogAPI;
