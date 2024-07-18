const key = import.meta.env.VITE_API_KEY
const baseUrl = import.meta.env.VITE_API_URl

export const api_url = `${baseUrl}/?apikey=${key}`

//get Url for movie details
export const getMovieDetailsUrl = (id) =>{
    return `${baseUrl}/?i=${id}&apikey=${key}`
}



