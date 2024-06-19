// src/utils/api.js
import axios from 'axios';

const API_KEY = '8b21f66eac314b88a7d40ff70103b993';
const BASE_URL = 'https://newsapi.org/v2';
export const fetchArticles = async (category, page) => {
    const response = await axios.get(`${BASE_URL}/top-headlines?country=us`, {
        params: {
            apiKey: API_KEY,
            category,
            page,
            pageSize: 10,
        },
    });
    return response.data;
};

export const fetchArticleById = async (id) => {
    const response = await axios.get(`${BASE_URL}/everything`, {
        params: {
            apiKey: API_KEY,
            q: id,
        },
    });
    return response.data;
};
