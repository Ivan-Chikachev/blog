import {AuthUserType, GetListArticlesType, ProfileType} from '../types/types';
import instance from '../http';

const blogAPI = {

    auth(email: string, password: string) {
        return instance
            .post<AuthUserType>('users/login', {
                user: {email, password}
            })
    },

    loginToken() {
        return instance
            .post<AuthUserType>('users/login',)
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
            .get<GetListArticlesType>(`articles?offset=${count}`);
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
    },
    setFavorite(slug: string) {
        return instance
            .post(`articles/${slug}/favorite`, {slug});
    }
};

export default blogAPI;
