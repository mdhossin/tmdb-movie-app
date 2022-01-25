const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: process.env.REACT__APP__API__KEY,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  img: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
