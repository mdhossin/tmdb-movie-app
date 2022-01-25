const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "eed3abfec69ef1e08b863ec0a15d4fd0",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  img: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
