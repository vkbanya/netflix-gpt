export const access_token =import.meta.env.VITE_TOKEN

export const API_key = "92a29122b55d2cf2fb6b4bcbf7ca81eb";

export const API_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${import.meta.env.VITE_TOKEN}`,
  },
};

export const movieImgUrl = "https://image.tmdb.org/t/p/w500/";

export const supportedLanguage = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "sp", name: "Spanish" },
];
 
export const API_Key =import.meta.env.VITE_API_Key
