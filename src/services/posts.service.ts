const baseUrl = import.meta.env.VITE_MAIN_URL;

export const getPosts = async () =>
    await fetch(baseUrl + '/posts').then(response => response.json());