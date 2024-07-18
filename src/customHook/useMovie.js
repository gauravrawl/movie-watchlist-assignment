import axios from "axios";
import { useEffect, useState } from "react";
import { api_url } from "../config/baseUrl";

const useMovie = (search) => {
    const [isSearching, setIsSearching] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    useEffect(()=>{
      const fetchMovieData = async (url) => {
        setIsSearching(true);
      try {
        const response = await axios.get(url);
        const data = response?.data
        console.log(data);
        if (data?.Response === "True") {
          setIsSearching(false);
          setData(data?.Search || data);
          setError('');
        } else {
            setError( data.Error );
        }
      } catch (error) {
        console.log(error);
      }finally{
        setIsSearching(false);
      }
    };
      fetchMovieData(`${api_url}&s=${search}`)
    },[search])

    return { isSearching, data, error };
  };

export default useMovie;
