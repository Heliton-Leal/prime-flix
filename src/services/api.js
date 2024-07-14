import axios from "axios";

// FULL URL: https://api.themoviedb.org/3/movie/now_playing?api_key=70ad69b0526aacbfb76afd9f9fc70f
// Base URL: https://api.themoviedb.org/3/
// Chave API: 70ad69b0526aacbfb76afd9f9fc70f

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;